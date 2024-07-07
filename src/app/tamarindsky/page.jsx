"use client"

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { useScreenshot, createFileName } from "use-react-screenshot";

import arrowLeftIcon from "@/assets/icons/arrow_left.png";
import arrowRightIcon from "@/assets/icons/arrow_right.png";
import tamarindImg from "@/assets/images/tamarind.png";
import ContextMenu from "@/components/layout/NavContextMenu";


export default function TamarindSkyPage() {
	const [arrowsVisible, setArrowsVisible] = useState(false);
	const [textHover, setTextHover] = useState(false);
	const ref = useRef(null);
	const [image, takeScreenshot] = useScreenshot();
	const getImage = () => takeScreenshot(ref.current);


	const download = (iImage, { name = 'img', extension = 'png' } = {}) => {
		const a = document.createElement('a');
		a.href = iImage;
		a.download = createFileName(extension, name);
		a.click();
	}

	useEffect(() => {
		if (image) {
			download(image, { name: 'tamarindsky', extension: 'png' });
		}
	}, [image])

	useEffect(() => {
		console.log(arrowsVisible);
	}, [arrowsVisible]);

	return (
		<>
			<ContextMenu>
				<main ref={ref} className="min-h-dvh w-full px-10 flex items-center justify-between bg-img-bg-5 bg-cover bg-center">
					<div className="min-h-dvh h-full w-5 md:w-8 lg:w-10 flex items-center justify-center" onMouseEnter={() => setArrowsVisible(true)} onMouseLeave={() => setArrowsVisible(false)}>
						{
							arrowsVisible && <Image src={arrowLeftIcon} alt="arrow-left" className="cursor-pointer select-none w-5 md:w-8 lg:w-10" />
						}
					</div>
					<div className="relative flex items-center justify-center flex-col gap-12 w-4/5">
						<Image src={tamarindImg} alt="tamarind" className="xl:w-[820px] lg:w-[680px] md:w-96 w-60 select-none cursor-pointer" onClick={getImage} onMouseEnter={() => setArrowsVisible(true)} onMouseLeave={() => setArrowsVisible(false)} />
						<p className="lg:w-[740px] w-full text-center cursor-default 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-lg self-end" onMouseEnter={() => setTextHover(true)} onMouseLeave={() => setTextHover(false)}>
							{
								textHover ? "ସମୁଦ୍ର ଖାଉଛି ମାଟି । ମାଟି ଖାଉଛି ନୋଳିଆ । ନୋଳିଆ ଖାଉଛି ମାଛ । ମାଛ ଖାଉଛି ଜାଲି । ଜାଲି ଖାଉଛି ସମୁଦ୍ର ।" :
									"The sea is eating the soil. The soil is eating the soil. The fish is eating the fish. Jali is eating fish. The sea is eating nets."
							}
						</p>
					</div>
					<div className="min-h-dvh h-full w-5 md:w-8 lg:w-10 flex items-center justify-center" onMouseEnter={() => setArrowsVisible(true)} onMouseLeave={() => setArrowsVisible(false)}>
						{
							arrowsVisible && <Image src={arrowRightIcon} alt="arrow-right" className="cursor-pointer select-none w-5 md:w-8 lg:w-10" />
						}
					</div>
				</main>
			</ContextMenu>
		</>
	);
}
