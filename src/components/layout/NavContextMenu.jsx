"use client"

import { contextMenuContent } from "@/assets/data/contextMenuContent";
import { ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenu as CM } from "../ui/context-menu";
import { useState } from "react";
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

    return (
        <>
            <ContextMenuContent className="bg-transparent border-none shadow-none">
                {
                    contextMenuContent.links.map((item, index) => (
                        /* INFO: 1ST NAVLINK WILL BE CHANGED TO `/about` IF ITS HOME PAGE (/) OTHERWISE RESPECTED LINK WILL GO */
                        item.id === 1
                            ? pathName === "/" ? <MenuItem key={index} item={
                                {
                                    "id": 1,
                                    "text": item.text,
                                    "odia": item.odia,
                                    "link": "/about"
                                }
                            } /> : <MenuItem key={index} item={item} />
                            : <MenuItem key={index} item={item} />
                    ))
                }
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


