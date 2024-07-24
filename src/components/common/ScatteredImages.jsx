"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


const ScatteredImages = ({ images }) => {
    const [positions, setPositions] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const parentWidth = containerRef.current.clientWidth;
            const parentHeight = containerRef.current.clientHeight;

            console.log(parentHeight, parentWidth);

            // Calculate random positions
            const newPositions = images.map(() => ({
                x: Math.random() * parentWidth,
                y: Math.random() * parentHeight,
            }));

            setPositions(newPositions);
        }
    }, [images]);

    return (
        <div ref={containerRef} className="relative h-full w-full min-h-dvh">
            {images.map((src, index) => {

                return (
                    <Link key={index} href="/image-detail">
                        <Image
                            // src={src}
                            src={"https://picsum.photos/300/200" + `?random=${index}`}
                            alt={`spiral-img-${index}`}
                            height={300}
                            width={300}
                            className="absolute transition-transform duration-500 transform hover:scale-110 h-44 w-72"
                            style={{
                                transform: `translate(-50%, -50%)`,
                                left: `${positions[index]?.x}px`,
                                top: `${positions[index]?.y}px`
                            }}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default ScatteredImages;
