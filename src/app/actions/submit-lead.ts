"use server";

import { supabase } from "@/lib/supabase";

export type SubmitLeadResult =
    | { success: true }
    | { success: false; error: string };

export async function submitLead(
    formData: FormData,
): Promise<SubmitLeadResult> {
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim() || null;
    const service = formData.get("service")?.toString().trim() || null;
    const address = formData.get("address")?.toString().trim() || null;
    const message = formData.get("message")?.toString().trim() || null;
    const source = formData.get("source")?.toString() || "website";

    // Validate required fields
    if (!firstName || !lastName || !email) {
        return { success: false, error: "First name, last name, and email are required." };
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, error: "Please enter a valid email address." };
    }

    const { error } = await supabase.from("leads").insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        service,
        address,
        message,
        source,
    });

    if (error) {
        console.error("Failed to insert lead:", error);
        return { success: false, error: "Something went wrong. Please try again or call us directly." };
    }

    return { success: true };
}
