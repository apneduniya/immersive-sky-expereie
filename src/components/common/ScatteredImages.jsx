"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


const ScatteredImages = ({ images }) => {
    const [positions, setPositions] = useState([]);
    const containerRef = useRef(null);

    const imageWidth = 300;
    const imageHeight = 200;

    const isOverlap = (newPos, positions) => {
        for (const pos of positions) {
            const overlapX = newPos.x < pos.x + imageWidth && newPos.x + imageWidth > pos.x;
            const overlapY = newPos.y < pos.y + imageHeight && newPos.y + imageHeight > pos.y;
            if (overlapX && overlapY) {
                return true;
            }
        }
        return false;
    };

    useEffect(() => {
        if (containerRef.current) {
            const parentWidth = containerRef.current.clientWidth;
            const parentHeight = containerRef.current.clientHeight;

            console.log(parentHeight, parentWidth);

            // Calculate random positions without overlapping
            const newPositions = [];
            for (let i = 0; i < images.length; i++) {
                let newPos;
                let attempts = 0;
                do {
                    newPos = {
                        x: Math.random() * (parentWidth - imageWidth),
                        y: Math.random() * (parentHeight - imageHeight),
                    };
                    attempts++;
                    if (attempts > 2000) {
                        // Fallback to avoid infinite loop
                        break;
                    }
                } while (isOverlap(newPos, newPositions));
                newPositions.push(newPos);
            }

            setPositions(newPositions);
        }
    }, [images]);

    return (
        <div ref={containerRef} className="relative h-full w-full min-h-dvh">
            {images.map(({ src, scale, _id }, index) => {

                return (
                    <Link key={index} href={`/image-details?id=${_id}`}>
                        <Image
                            src={src}
                            // src={"https://picsum.photos/300/200" + `?random=${index}`}
                            alt={`spiral-img-${index}`}
                            // height={300}
                            // width={300}
                            fill
                            className="absolute transition-transform duration-500 transform hover:scale-110 !h-44 !w-auto cursor-pointer"
                            style={{
                                // transform: `translate(-50%, -50%)`,
                                left: `${positions[index]?.x}px`,
                                top: `${positions[index]?.y}px`,
                                scale: `${scale}`,
                                opacity: `${scale}`,
                                zIndex: `${Math.floor(scale * 100)}`,
                            }}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default ScatteredImages;
