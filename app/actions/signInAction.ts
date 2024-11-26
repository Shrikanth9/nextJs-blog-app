"use server"

import { signIn } from "@/config/auth"

export const signInAction = async (provider: string) => {
    await signIn(provider)
}