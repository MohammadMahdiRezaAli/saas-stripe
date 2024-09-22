"use server";

import {
  createClerkOrganization,
  handleUpdateDataForUser,
} from "@/utils/facades/serverFacades/clerkFacade";
import { getUser } from "@/utils/facades/serverFacades/userFacade";
import { auth } from "@clerk/nextjs";

export default async function completeOnboarding(payload: any) {
  try {
    console.log("Received Payload:", payload);  // Log payload for debugging

    const userClerk = auth();

    // Ensure userClerk exists
    if (!userClerk) throw new Error("Client clerk not found");
    console.log("Authenticated User Clerk:", userClerk);  // Log Clerk auth details

    // Get user ID from Clerk
    const { userId } = await getUser(userClerk);
    console.log("Clerk User ID:", userId);  // Log fetched user ID

    // Create Clerk organization
    const organization = await createClerkOrganization({
      name: payload.applicationName || "",
      createdBy: userClerk.userId,
    });
    console.log("Organization created:", organization);  // Log created organization

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

    // Return success response
    return JSON.stringify({
      organization,
      message: "ok",
    });

  } catch (error) {
    console.error("Error in completeOnboarding:", error.message || error);

    // Re-throw the error to handle it on the frontend
    throw new Error(`Error completing onboarding: ${error.message || "Unknown error"}`);
  }
}
