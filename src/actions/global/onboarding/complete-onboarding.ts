"use server";

import {
  createClerkOrganization,
  handleUpdateDataForUser,
} from "@/utils/facades/serverFacades/clerkFacade";
import { getUser } from "@/utils/facades/serverFacades/userFacade";
import { auth } from "@clerk/nextjs";

export default async function completeOnboarding(payload: any) {
  try {
    // Log incoming payload
    console.log("Received Payload:", payload);

    // Authenticate user
    const userClerk = auth();
    if (!userClerk) {
      console.error("Client Clerk not found or user not authenticated.");
      throw new Error("Client Clerk not found");
    }
    console.log("Authenticated User Clerk:", userClerk);

    // Get user from Clerk
    const { userId } = await getUser(userClerk);
    console.log("Clerk User ID:", userId);

    // Create organization via Clerk
    const organization = await createClerkOrganization({
      name: payload.applicationName || "",
      createdBy: userClerk.userId,
    });
    console.log("Organization created:", organization);

    // Update user metadata
    await handleUpdateDataForUser({
      scope: "publicMetadata",
      userBdId: userId,
      data: {
        onboardingComplete: true,
        applicationName: payload.applicationName || "",
      },
    });
    console.log("User metadata updated successfully");

    // Return successful response
    return JSON.stringify({
      organization,
      message: "ok",
    });

  } catch (error) {
    console.error("Error in completeOnboarding:", error.message || error);

    // Throw error to let frontend handle it
    throw new Error(`Error completing onboarding: ${error.message || "Unknown error"}`);
  }
}
