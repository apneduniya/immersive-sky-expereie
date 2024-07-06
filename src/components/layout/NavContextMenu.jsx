"use client"

import { contextMenuContent } from "@/assets/data/contextMenuContent";
import { ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenu as CM } from "../ui/context-menu";
import { useState } from "react";
import Link from "next/link";


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

    return (
        <>
            <ContextMenuContent className="backdrop-blur-lg bg-white bg-opacity-50 rounded-lg">
                {
                    contextMenuContent.links.map((item, index) => (
                        <MenuItem key={index} item={item} />
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


