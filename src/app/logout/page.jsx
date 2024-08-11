"use client"

import { useEffect } from "react"


export default function LogoutPage() {

    useEffect(() => {
        const logout = () => {
            localStorage.removeItem("token");
            window.location.href = "/";
        }

        logout();
    }, [])
    

    return (
        <>
        </>
    )
}