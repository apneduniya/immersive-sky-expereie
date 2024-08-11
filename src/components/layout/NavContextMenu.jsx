"use client"

import { contextMenuContent } from "@/assets/data/contextMenuContent";
import { ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenu as CM } from "../ui/context-menu";
import { useEffect, useState } from "react";
import { getUser } from "@/utils/api/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";


function MenuItem({ item }) {
    const [hover, setHover] = useState(false);

    return (
        <>
            <Link href={item.link}>
                <ContextMenuItem
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="hover:!bg-transparent !py-1"
                >
                    <span>
                        {hover ? item.odia : item.text}
                    </span>
                </ContextMenuItem>
            </Link>
        </>
    )
}


function Menu() {
    const pathName = usePathname();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);


    useEffect(() => {
        const checkUserStatus = async () => {
            try {
                const data = await getUser();
                if (data.success) {
                    setIsUserLoggedIn(true);
                } else {
                    setIsUserLoggedIn(false);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setIsUserLoggedIn(false);
            }
        };

        checkUserStatus();
    }, []);

    return (
        <>
            <ContextMenuContent className="bg- rounded-lg border-none shadow-none w-[290px]">
                <div className="p-1 relative z-10 bg- rounded-lg">
                    <div className="relative z-30">
                        {
                            contextMenuContent.links.map((item, index) => (
                                /* INFO: 1ST NAVLINK WILL BE CHANGED TO `/about` IF ITS HOME PAGE (/) OTHERWISE RESPECTED LINK WILL GO */
                                item.id === 1 ?
                                    pathName === "/" ?
                                        <MenuItem key={index} item={
                                            {
                                                "id": 1,
                                                "text": item.text,
                                                "odia": item.odia,
                                                "link": "/about"
                                            }
                                        } />
                                        :
                                        <MenuItem key={index} item={item} />
                                    :
                                    item.id === 4 ?
                                        isUserLoggedIn ?
                                            <MenuItem key={index} item={
                                                {
                                                    "id": 4,
                                                    "odia": "Portfolio",
                                                    "text": "ପୋର୍ଟଫୋଲିଓ",
                                                    "link": "/upload-image"
                                                }
                                            } />
                                            :
                                            <MenuItem key={index} item={item} />
                                        :
                                        <MenuItem key={index} item={item} />
                            ))
                        }
                    </div>
                    <div className="absolute top-0 left-0 z-20 h-full w-full rounded-lg blur-sm bg-white opacity-25" />
                </div>
            </ContextMenuContent>
        </>
    );
}


export default function ContextMenu({ children }) {
    return (
        <>
            <CM>
                <ContextMenuTrigger>
                    {children}
                </ContextMenuTrigger>
                <Menu />
            </CM>
        </>
    )
}


