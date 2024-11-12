import { getServerSession } from "next-auth";

export const getSessionUser = async () => {
        const session: any = await getServerSession();
    
        if(!session || !session.user) {
            return null
        }
        
        return {
            user: session.user,
            id: session.user
        }
};