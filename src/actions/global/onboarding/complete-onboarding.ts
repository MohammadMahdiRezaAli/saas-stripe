"use server";

import {
  createClerkOrganization,
  handleUpdateDataForUser,
} from "@/utils/facades/serverFacades/clerkFacade";
import { getUser } from "@/utils/facades/serverFacades/userFacade";
import { auth } from "@clerk/nextjs";

export default async function completeOnboarding(payload: any) {
  try {
    const userClerk = auth();
    
    // Ensure userClerk exists
    if (!userClerk) throw new Error("Client clerk not found");

    // Get user ID from Clerk
    const { userId } = await getUser(userClerk);

    // Initialize organization variable
    let organization: any = null;

    // Create Clerk organization
    organization = await createClerkOrganization({
      name: payload.applicationName || "",
      createdBy: userClerk.userId,
    });

    // Update user metadata
    await handleUpdateDataForUser({
      scope: "publicMetadata",
      userBdId: userId,
      data: {
        onboardingComplete: true,
        applicationName: payload.applicationName || "",
      },
    });

    // Return successful response with the organization info
    return JSON.stringify({
      organization,
      message: "ok",
    });

  } catch (error) {
    console.error("Error in completeOnboarding:", error.message || error);

    // Throw the error to be handled by the frontend
    throw new Error(`Error completing onboarding: ${error.message || "Unknown error"}`);
  }
}
