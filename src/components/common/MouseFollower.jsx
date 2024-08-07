"use client";

import { useState, useEffect, useRef } from "react";


const Mousefollower = ({ children }) => {
    const [point, setPoint] = useState({ x: 0, y: 0 });
    const { x, y } = point;
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current;

            // top-left corner
            const x = clientX - element.offsetLeft;
            const y = clientY - element.offsetTop;
            setPoint({ x, y });
            console.log(x, y);
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="fixed z-50 pointer-events-none top-0 left-0"
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}
        >
            {children}
        </div>
    );
};

export default Mousefollower;
