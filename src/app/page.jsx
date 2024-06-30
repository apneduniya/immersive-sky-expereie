"use client"

import Image from "next/image";
import { useState } from "react";

import arrowLeftIcon from "@/assets/icons/arrow_left.png";
import arrowRightIcon from "@/assets/icons/arrow_right.png";
import tamarindImg from "@/assets/images/tamarind.png";


export default function HomePage() {
	const [hover, setHover] = useState(false);

	return (
		<>
			<main className="min-h-dvh w-full px-10 flex items-center justify-between bg-img-bg-5 bg-cover bg-center">
				<Image src={arrowLeftIcon} alt="arrow-left" className="cursor-pointer select-none w-5 md:w-8 lg:w-10" />
				<div className="relative flex items-center justify-center flex-col gap-20">
					<Image src={tamarindImg} alt="tamarind" className="xl:w-[820px] lg:w-[680px] md:w-96 w-60 select-none" />
					<p className="lg:absolute lg:w-[740px] lg:-right-64 lg:-bottom-20 w-full text-center cursor-default 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-lg" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
						{
							hover? "ସମୁଦ୍ର ଖାଉଛି ମାଟି । ମାଟି ଖାଉଛି ନୋଳିଆ । ନୋଳିଆ ଖାଉଛି ମାଛ । ମାଛ ଖାଉଛି ଜାଲି । ଜାଲି ଖାଉଛି ସମୁଦ୍ର ।" : 
							"The sea is eating the soil. The soil is eating the soil. The fish is eating the fish. Jali is eating fish. The sea is eating nets."
						}
					</p>
				</div>
				<Image src={arrowRightIcon} alt="arrow-right" className="cursor-pointer select-none w-5 md:w-8 lg:w-10" />
			</main>
		</>
	);
}
