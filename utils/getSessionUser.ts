import { auth } from "@/config/auth";

export async function getSessionUser() {
    const session = await auth();
    return session;
}