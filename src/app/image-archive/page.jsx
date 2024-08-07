"use client"

import ScatteredImages from "@/components/common/ScatteredImages";
import { SearchImageArchive } from "@/components/common/SearchImageArchive";
import ContextMenu from "@/components/layout/NavContextMenu";
import { getNewAssetURL, getScatterAsset, searchScatterAsset } from "@/utils/api/asset";
import { updateBackgroundImage } from "@/utils/updateBGImg";
import { useEffect, useState } from "react";


export default function ImageArchivePage() {
    const [images, setImages] = useState([]);
    const [searchData, setSearchData] = useState({
        disaster: "",
        device: "",
        modelNo: "",
        search: "",
        photo: "",
        audio: "",
        video: "",
        archival: "",
        document: "",
        portfolio: "",
        event: "",
        place: "",
        date: "",
        day: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchData({
            ...searchData,
            [name]: value,
        });
    }

    const handleSubmit = async () => {
        try {
            const response = await searchScatterAsset(searchData);
            if (response.data.length !== 0 && response.success) {
                setImages(response.data);
            } else {
                if (!response.success) {
                    alert("No results found!");
                }
            }
        } catch (error) {
            console.error("Failed to fetch scatter asset", error);
        }

        return true;
    }

    useEffect(() => {
        console.log(images);
    },  [images])

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await getScatterAsset();
                return response.data;
            } catch (error) {
                console.error("Failed to fetch scatter asset", error);
                return [];
            }
        }

        fetchImages().then((data) => {
            setImages(data);
        });
    }, [])


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
                <main className="relative h-dvh main px-5 lg:px-10 py-5 overflow-hidden flex items-center justify-center">
                    <ScatteredImages images={images} />
                    <div>
                        <SearchImageArchive data={searchData} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </div>
                </main>
            </ContextMenu>
        </>
    )
}



