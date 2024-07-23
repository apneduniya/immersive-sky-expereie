"use client"

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';


const SpiralImages = ({ images }) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0, radius: 0 });
    const randomIndex = Math.floor(Math.random() * images.length);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;
            const containerRadius = Math.min(containerWidth, containerHeight) / 2;
            setDimensions({ width: containerWidth, height: containerHeight, radius: containerRadius });
        }
    }, [containerRef]);


    const randomizePosition = (index, trails) => {
        if (randomIndex === index) {
            return { x: dimensions.width / 2, y: dimensions.height / 2 };
        }

        if (trails === 0) {
            return { x: dimensions.width / 2, y: dimensions.height / 2 };
        }

        // Randomly set the initial position for each particle within the container
        const randomAngle = Math.random() * 360;

        const x = (Math.cos(randomAngle) * dimensions.radius + dimensions.width / 2);
        const y = (Math.sin(randomAngle) * dimensions.radius + dimensions.height / 2);

        // Check if the new position exceeds the container radius
        const distanceFromCenter = Math.sqrt((x - dimensions.width / 2) ** 2 + (y - dimensions.height / 2) ** 2);
        if (distanceFromCenter <= dimensions.radius) {
            return { x: x, y: y };
        }
        else {
            return randomizePosition(index, trails - 1);
        }
    }

    return (
        <div ref={containerRef} className="relative h-[800px] w-[800px] flex justify-center items-center">
            {images.map((src, index) => {
                const { x, y } = randomizePosition(index, 4);

                return (
                    <Image
                        key={index}
                        // src={src}
                        src={"https://picsum.photos/300/200" + `?random=${index}`}
                        alt={`spiral-img-${index}`}
                        height={300}
                        width={300}
                        className="absolute transition-transform duration-500 transform hover:scale-110 h-44 w-72"
                        style={{
                            transform: `translate(-50%, -50%)`,
                            left: `${x}px`,
                            top: `${y}px`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default SpiralImages;
