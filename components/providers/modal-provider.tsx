"use client"

import CreateServerModal from "@/components/modals/CreateServerModal"
import { useEffect, useState } from "react"
import InviteModal from "@/components/modals/InviteModal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal />
            <InviteModal />
        </>
    )
}