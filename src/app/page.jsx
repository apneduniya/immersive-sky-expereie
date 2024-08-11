"use client"

import Mousefollower from "@/components/common/MouseFollower";
import ContextMenu from "@/components/layout/NavContextMenu";

import { getLatestSlogan, getNewAsset } from "@/utils/api/asset";
import { updateBackgroundImage } from '@/utils/updateBGImg';
import { useEffect, useRef, useState } from 'react';


export default function HomePage() {
	const [keywords, setKeywords] = useState("");
	const [longitude, setLongitude] = useState("");
	const [latitude, setLatitude] = useState("");
	const [cursorVisible, setCursorVisible] = useState(false);
	const containerRef = useRef();
	const [sloganText, setSloganText] = useState("");
	// const [showMouseFollower, setShowMouseFollower] = useState(true);


	useEffect(() => {
		const fetchURL = async () => {
			try {
				const fetchedUrl = await getNewAsset();
				const response = await getLatestSlogan();
				updateBackgroundImage(fetchedUrl.data.src);
				setSloganText(response.data.forecastAndStories);

				setKeywords(fetchedUrl.data.keywords);

				const geolocation = fetchedUrl.data.geolocation; // 11.324 / 11.986 : Longitude / Latitude (I know its reversed, but it's said to be like this)
				const geolocationArr = geolocation.split("/") || ["", ""];
				setLongitude(geolocationArr[0]);
				setLatitude(geolocationArr[1]);

			} catch (error) {
				console.error("Failed to fetch new asset URL", error);
			}
		};

		fetchURL();
		const intervalId = setInterval(fetchURL, process.env.NEXT_PUBLIC_LATEST_IMG_FETCH_TIME); // 1000 milliseconds = 1 second

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		let timeoutId;

		const handleMouseMove = () => {
			setCursorVisible(true);
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => setCursorVisible(false), 500); // Hide after .5 second of inactivity
		};

		const handleMouseOut = () => {
			setCursorVisible(false);
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseout', handleMouseOut);

		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseout', handleMouseOut);
		};
	}, []);

	// Random position slogan

	const [xPosition, setXPosition] = useState(0);
	const [yPosition, setYPosition] = useState(0);

	useEffect(() => {
		if (containerRef.current) {
			const parentWidth = containerRef.current.clientWidth;
			const parentHeight = containerRef.current.clientHeight;

			console.log(parentHeight, parentWidth);

			// Calculate random positions without overlapping
			let newPos;
			newPos = {
				x: Math.random() * (parentWidth),
				y: Math.random() * (parentHeight),
			};

			setXPosition(newPos.x);
			setYPosition(newPos.y);
		}
	}, [sloganText]);


	return (
		<>
			<ContextMenu>
				<main
					className={`relative main px-10 flex items-center justify-between overflow-hidden ${cursorVisible ? "cursor-default" : "cursor-none"}`}
				>
					{
						cursorVisible && <Mousefollower>
							<div className="p-5 flex flex-col gap-1 items-start select-none">
								<span className="uppercase">{keywords}</span>
								<span className="italic">{latitude}</span>
								<span className="italic">{longitude}</span>
							</div>
						</Mousefollower>
					}
					<div ref={containerRef} className="h-[80dvh] w-10/12 relative">
						<p className={`lg:w-[740px] w-full text-center cursor-default 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-lg absolute`}
							style={{
								// transform: `translate(-50%, -50%)`,
								left: `${xPosition}px`,
								top: `${yPosition}px`,
							}}
						>
							{
								sloganText
							}
						</p>
					</div>
				</main>
			</ContextMenu>
		</>
	);
}
