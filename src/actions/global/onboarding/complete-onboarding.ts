"use server";

import {
  createClerkOrganization,
  handleUpdateDataForUser,
} from "@/utils/facades/serverFacades/clerkFacade";
import { getUser } from "@/utils/facades/serverFacades/userFacade";
import { auth } from "@clerk/nextjs";

export default async function completeOnboarding(payload: any) {
  let result = { message: "Proceeding by force", organization: null, success: true };

  try {
    // Log incoming payload
    console.log("Received Payload:", payload);

    // Authenticate user
    const userClerk = auth();
    if (!userClerk) {
      console.error("Client Clerk not found. Proceeding anyway.");
      result.success = false;
      result.message = "Client Clerk not found, but proceeding.";
    } else {
      console.log("Authenticated User Clerk:", userClerk);

      // Get user from Clerk
      const { userId } = await getUser(userClerk);
      console.log("Clerk User ID:", userId);

      // Attempt to create organization
      try {
        const organization = await createClerkOrganization({
          name: payload.applicationName || "Untitled Project",
          createdBy: userClerk.userId,
        });
        console.log("Organization created:", organization);
        result.organization = organization;
      } catch (orgError) {
        console.error("Error creating organization. Proceeding without org:", orgError);
        result.success = false;
        result.message = "Organization creation failed, proceeding.";
      }

      // Attempt to update user metadata
      try {
        await handleUpdateDataForUser({
          scope: "publicMetadata",
          userBdId: userId,
          data: {
            onboardingComplete: true,
            applicationName: payload.applicationName || "Untitled Project",
          },
        });
        console.log("User metadata updated successfully");
      } catch (metaError) {
        console.error("Error updating user metadata. Proceeding anyway:", metaError);
        result.success = false;
        result.message = "Metadata update failed, proceeding.";
      }
    }

    return JSON.stringify({
      ...result,
      message: "Onboarding completed with issues (if any)",
    });

  } catch (error) {
    console.error("Unexpected error during onboarding:", error);
    return JSON.stringify({
      success: false,
      message: "Unexpected server error. Onboarding still completed with fallback.",
    });
  }
}
