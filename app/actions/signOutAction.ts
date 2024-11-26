"use server"

import { signOut } from "@/config/auth"

export const signOutAction = async () => {
    await signOut()
}