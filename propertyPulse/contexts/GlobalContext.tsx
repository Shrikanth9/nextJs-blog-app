'use client'

import getUnreadMessageCount from "@/app/actions/getUnreadMessageCount";
import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext({});

export function GlobalProvider( { children }: { children: React.ReactNode }) {
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        getUnreadMessageCount().then((result: any) => {
            if(result.count) {
                setUnreadCount(result.count);
            }
        })
    }, []);
    return (
        <GlobalContext.Provider value={{unreadCount, setUnreadCount}}>
            { children }
        </GlobalContext.Provider>
    )
}


export function useGlobalContext() {
    return useContext(GlobalContext);
}

export default GlobalContext;