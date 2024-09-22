"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import completeOnboarding from "@/actions/global/onboarding/complete-onboarding";
import { toast } from "sonner";
import ReactConfetti from "react-confetti";
import { constants } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { useOrganizationList } from "@clerk/nextjs";

export default function OnboardingPage() {
  const { setActive, isLoaded } = useOrganizationList();
  const t = useTranslations("Onboarding");
  const [projectName, setProjectName] = useState("");  // Store project name input
  const [isCompleted, setIsCompleted] = useState(false);  // Onboarding completion state
  const [isLoading, setIsLoading] = useState(false);  // Loading state for the button
  const [open, setOpen] = useState(true);  // Modal open/close state

  // Function to handle form submission and complete onboarding
  const handleCompleteOnboarding = async () => {
    if (!projectName || projectName.trim().length === 0) {
      toast.error("Project name is required.");  // Validate empty input
      return;
    }

    setIsLoading(true);  // Start loading state

    try {
      const responseJson = await completeOnboarding({
        applicationName: projectName.trim(),  // Send project name after trimming
      });

      // Check if responseJson is valid
      if (!responseJson || responseJson === "undefined") {
        throw new Error("Invalid response from server");
      }

      const response = JSON.parse(responseJson);  // Parse the response as JSON

      if (response.message === "ok" && response.organization) {
        if (isLoaded) {
          setActive({ organization: response.organization.id });
        }
        setIsCompleted(true);
        toast.success("Onboarding completed!");

        setTimeout(() => {
          window.location.href = "/home";  // Redirect after success
        }, 3000);

      } else {
        toast.error("Unexpected response from the server.");
      }

    } catch (error) {
      // Log error and show feedback to the user
      console.error("Error during onboarding:", error.message || error);
      toast.error(`Error completing onboarding: ${error.message || "Unknown error"}`);
    } finally {
      setIsLoading(false);  // End loading state
    }
  };

  return (
    <Transition.Root show={open} as={Fragment} appear>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto p-7 max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all">
              <div className="flex flex-col text-center">
                <div className="mx-auto my-14">
                  <h1 className="text-title">
                    {t("welcome") + constants.appName}
                  </h1>
                  <div className="mt-7 flex flex-col space-y-3">
                    <label htmlFor="organizationName">
                      {t("organizationName")}
                    </label>

                    <input
                      type="text"
                      className="input-text"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder={t("organizationName")}
                      disabled={isLoading}  // Disable input while loading
                    />
                  </div>
                </div>

                {isCompleted && <ReactConfetti width={1000} height={1000} />}  {/* Confetti on success */}

                {!isCompleted ? (
                  <button
                    onClick={handleCompleteOnboarding}
                    className={`btn-main w-[50%] mx-auto ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isLoading}  // Disable button while loading
                  >
                    {isLoading ? t("loading") : t("completeOnboarding")}
                  </button>
                ) : (
                  <p className="animate-pulse">{t("redirecting")} ...</p>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
