"use client"

import ContextMenu from "@/components/layout/NavContextMenu";

import { getNewAssetURL } from "@/utils/api/asset";
import { updateBackgroundImage } from '@/utils/updateBGImg';
import { useEffect } from 'react';


export default function HomePage() {

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

	return (
		<>
			<ContextMenu>
				<main
					className="main px-10 flex items-center justify-between"
				>

				</main>
			</ContextMenu>
		</>
	);
}
