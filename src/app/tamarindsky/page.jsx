"use client"

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { useScreenshot, createFileName } from "use-react-screenshot";

import arrowLeftIcon from "@/assets/icons/arrow_left.png";
import arrowRightIcon from "@/assets/icons/arrow_right.png";
import tamarindImg from "@/assets/images/tamarind.png";
import ContextMenu from "@/components/layout/NavContextMenu";
import { getLatestSlogan, getNewAssetURL } from "@/utils/api/asset";
import { updateBackgroundImage } from "@/utils/updateBGImg";


function SloganImage(sloganImage = "", getImage = () => {}) {
	return <Image src={sloganImage} alt="tamarind" className="lg:w-[560px] md:w-96 w-60 select-none cursor-pointer" onClick={getImage} width={560} height={560} />;
}


export default function TamarindSkyPage() {
	const [arrowLeftVisible, setArrowLeftVisible] = useState(false);
	const [arrowRightVisible, setArrowRightVisible] = useState(false);
	const [textHover, setTextHover] = useState(false);
	const ref = useRef(null);
	const [image, takeScreenshot] = useScreenshot();
	const getImage = () => takeScreenshot(ref.current);
	const [randomDirection, setRandomDirection] = useState(0); // O for top-left, 1 for top-right, 2 for bottom-right, 3 for bottom-left
	const [sloganImage, setSloganImage] = useState("");
	const [sloganText, setSloganText] = useState("");
	const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);
	const [assets, setAssets] = useState([]);
    const [currentId, setCurrentId] = useState();


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
		const fetchURL = async () => {
			try {
				const fetchedUrl = await getNewAssetURL();
				updateBackgroundImage(fetchedUrl.data);
			} catch (error) {
				console.error("Failed to fetch new asset URL", error);
			}
		};

		fetchURL();
		const intervalId = setInterval(fetchURL, process.env.NEXT_PUBLIC_LATEST_IMG_FETCH_TIME); // 1000 milliseconds = 1 second

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		setRandomDirection(Math.floor(Math.random() * 4));
	}, []);

	useEffect(() => {
		const fetchSlogan = async () => {
			try {
				const response = await getLatestSlogan();
				setSloganImage(response.data.src);
				setSloganText(response.data.forecastAndStories);
			} catch (error) {
				console.error("Failed to fetch latest slogan", error);
			}
		};

		fetchSlogan();
	}, []);

	return (
		<>
			<ContextMenu>
				<main ref={ref} className="main flex items-center justify-between">
					<div className="pl-10 min-h-dvh h-full w-15 md:w-18 lg:w-20 flex items-center justify-center" onMouseEnter={() => setArrowLeftVisible(true)} onMouseLeave={() => setArrowLeftVisible(false)}>
						{
							arrowLeftVisible && <Image src={arrowLeftIcon} alt="arrow-left" className="cursor-pointer select-none w-5 md:w-8 lg:w-10" />
						}
					</div>
					<div className={`relative flex items-center justify-center ${randomDirection === 2 || randomDirection === 3? "flex-col": "flex-col-reverse"} gap-12 w-4/5`}>
						{SloganImage(tamarindImg, getImage)}
						<p className={`lg:w-[740px] w-full text-center cursor-default 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-lg ${randomDirection === 1 || randomDirection === 2? "self-end": "self-start"}`} onMouseEnter={() => setTextHover(true)} onMouseLeave={() => setTextHover(false)}>
							{
								textHover ? sloganText :
									sloganText
							}
						</p>
					</div>
					<div className="pr-10 min-h-dvh h-full w-15 md:w-18 lg:w-20 flex items-center justify-center" onMouseEnter={() => setArrowRightVisible(true)} onMouseLeave={() => setArrowRightVisible(false)}>
						{
							arrowRightVisible && <Image src={arrowRightIcon} alt="arrow-right" className="cursor-pointer select-none w-5 md:w-8 lg:w-10" />
						}
					</div>
				</main>
			</ContextMenu>
		</>
	);
}
