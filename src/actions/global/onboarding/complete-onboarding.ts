"use server";

import {
  createClerkOrganization,
  handleUpdateDataForUser,
} from "@/utils/facades/serverFacades/clerkFacade";
import { getUser } from "@/utils/facades/serverFacades/userFacade";
import { auth } from "@clerk/nextjs";

export default async function completeOnboarding(payload: any) {
  try {
    // Log the incoming payload for clarity
    console.log("Received Payload:", payload);

    const userClerk = auth();

    // Log authentication info and handle missing authentication
    if (!userClerk) {
      console.error("Client Clerk not found or user not authenticated.");
      throw new Error("Client Clerk not found");
    }
    console.log("Authenticated User Clerk:", userClerk);

    // Get user ID from Clerk and log it
    const { userId } = await getUser(userClerk);
    console.log("Clerk User ID:", userId);

    // Create Clerk organization and log the output
    const organization = await createClerkOrganization({
      name: payload.applicationName || "",
      createdBy: userClerk.userId,
    });
    console.log("Organization created:", organization);

    // Update user metadata and log confirmation
    await handleUpdateDataForUser({
      scope: "publicMetadata",
      userBdId: userId,
      data: {
        onboardingComplete: true,
        applicationName: payload.applicationName || "",
      },
    });
    console.log("User metadata updated successfully");

    // Return success response with the organization info
    return JSON.stringify({
      organization,
      message: "ok",
    });

  } catch (error) {
    // Log detailed error information for debugging
    console.error("Error in completeOnboarding:", error.message || error);
    
    // Re-throw the error to ensure it can be handled on the frontend
    throw new Error(`Error completing onboarding: ${error.message || "Unknown error"}`);
  }
}
