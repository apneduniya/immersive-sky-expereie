"use client"

import Mousefollower from "@/components/common/MouseFollower";
import ContextMenu from "@/components/layout/NavContextMenu";

import { getNewAsset } from "@/utils/api/asset";
import { updateBackgroundImage } from '@/utils/updateBGImg';
import { useEffect, useState } from 'react';


export default function HomePage() {
	const [keywords, setKeywords] = useState("");
	const [longitude, setLongitude] = useState("");
	const [latitude, setLatitude] = useState("");


	useEffect(() => {
		const fetchURL = async () => {
		  try {
			const fetchedUrl = await getNewAsset();
			updateBackgroundImage(fetchedUrl.data.src); 

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

	return (
		<>
			<ContextMenu>
				<main
					className="relative main px-10 flex items-center justify-between"
				>
					<Mousefollower>
					<div className="p-5 flex flex-col gap-1 items-start select-none">
						<span className="uppercase">{keywords}</span>
						<span className="italic">{latitude}</span>
						<span className="italic">{longitude}</span>
					</div>
					</Mousefollower>
				</main>
			</ContextMenu>
		</>
	);
}
