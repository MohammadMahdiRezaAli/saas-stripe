"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import completeOnboarding from "@/actions/global/onboarding/complete-onboarding";
import { toast } from "sonner";
import ReactConfetti from "react-confetti";
import { constants } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { useOrganizationList } from "@clerk/nextjs";

export default function Example() {
  const { setActive, isLoaded } = useOrganizationList();
  const t = useTranslations("Onboarding");
  const [projectName, setProjectName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [open, setOpen] = useState(true);

  const handleCompleteOnboarding = async () => {
    await completeOnboarding({
      applicationName: projectName,
    })
      .then((rJson: any) => {
        const response = JSON.parse(rJson);
        if (response.message === "ok" && response.organization) {
          isLoaded && setActive(response.organization.id);
          setIsCompleted(true);
          toast.success(t("onboarding.success"));
        } else {
          toast.error(t("onboarding.error"));
        }
      })
      .catch(() => {
        toast.error(t("onboarding.error"));
      });
  };

  // Bypass onboarding if already completed or skip for certain conditions
  if (isCompleted) {
    return <div>Onboarding is already completed. Redirecting to dashboard...</div>;
  }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          {/* Onboarding Dialog Code Here */}
          <div>
            {/* Dialog content */}
            <h2>{t("onboarding.title")}</h2>
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder={t("onboarding.placeholder")}
            />
            <button onClick={handleCompleteOnboarding}>
              {t("onboarding.completeButton")}
            </button>
          </div>
        </Dialog>
      </Transition.Root>

      {isCompleted && <ReactConfetti />}
    </>
  );
}
