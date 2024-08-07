/* eslint-disable react/no-unescaped-entities */ // means that we are using unicode characters in the text
"use client"

import { useState, useEffect } from 'react';
import ContextMenu from "@/components/layout/NavContextMenu";
import { getNewAssetURL } from "@/utils/api/asset";
import { updateBackgroundImage } from '@/utils/updateBGImg';


export default function AboutPage() {
    const [hover, setHover] = useState(false);

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
                <main className="main px-5 lg:px-10 py-5 flex items-center justify-between">
                    <div className="h-full w-full flex items-center">
                        <p className="md:text-base text-sm font-serif p-5 w-full lg:w-10/12" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            {
                                !hover
                                    ? <>
                                        The Sky in Odia manifests as ଆକାଶ (aakasa), ଖଗୋଳ (khagola), ଗଗନ (gagana), ଦ୍ୟୋ (dyo), ବ୍ୟୋମ (byoma), ମହାଶୂନ୍ୟ (mahasunya), ଶୂନ୍ୟ (sunya), ଅମ୍ବର (ambara), ନଭ (nabha), ଅନ୍ତରୀକ୍ଷ (antariksya), ଖ (kha), ଅଭ୍ର (abbhra), ସ୍ବର୍ଗ (swarga), ବିନ୍ଦୁ (bindu), and ବ୍ରହ୍ମ (brahma) etc. As each sound transforms into an image, the 'celestial sphere' becomes an observatory. Like a common language, the common sky reflects on small and vast landscapes and water bodies and translates into moments, incidents, movements, days, nights, weather, seasons, time, and epochs. The sky as absorbent, transparent,  lucid, reflective, temporal, spatial, and infinite presents a sophisticated language.
                                        <br />
                                        <br />
                                        'Immersive Sky Experience'  tries to explore and understand the 'sky language' using artificial intelligence, machine learning technology, data mining, and archiving for climate storytelling and weather prediction. It forests on a minute-to-minute basis weather changes on specific micro geo-coordinates and provides reports from windows, streets, villages, panchayat, municipalities, and small towns – prompting a unique perspective and experience of the Odia language and culture, people, and subjectivities.
                                        <br />
                                        <br />
                                        The ISE algorithm analyses environmental disaster images, studies and identifies patterns, extracts the sky part, composes the metadata, and provides a digital sky experience. ISE stories are based on ground-level data, collected from our 'stations' situated near the coast of the Bay of Bengal at Bagapatia rehabilitation colony (Kendrapada district), the land erosion site of Podampeta (Ganjam district), and the capital city of Bhubaneswar in Odisha.
                                        The interactive website enables and facilitates marginal and climate-vulnerable communities from coastal Odisha, and share environment stories, experiences, and concerns and sustainably engage with the colloquial perspective on climate change. ISE website also hosts an ‘Environment Disaster Image Archive’ for the public, which has audiovisual information and documents on different environmental disasters from Odisha.
                                        ‘Immersive Sky Experience’ was conceived and created by Paribartana Mohanty
                                        Text and Translation: Paribartana Mohanty and Gita Nandan Ballabha Das
                                        Research and Resouce: Jyoti Ranjan Sahoo, Gita Nandan Ballabha Das, Satyabadi Biswal
                                        Tamarind (Drawing): Shashikant Mohanty
                                        Technology and Assistance: Python language and Pytorch library to build the AI model
                                        <br />
                                        <br />
                                        Acknowledgment: Anish Cherian, Akansha Rastogi, Kush Badhwar, Sampurna Mohanty, Bahbak Hasimi, Shena Raghavan
                                        <br />
                                        Financial and Mentorship Support:<br />
                                        Sharjah Art Foundation Production Programme 2023<br />
                                        Prince Claus Mentorship Award for Cultural & Artistic Responses to Environmental Change 2022-23<br />
                                        <br />
                                        Contact: immersiveskyexperience@gmail.com / +91 9717796399

                                    </>
                                    :
                                    <>
                                        ଆକାଶ, ମହାକାଶ, ଖଗୋଳ, ଗଗନ, ଦ୍ୟୋ, ବ୍ୟୋମ, ଶୂନ୍ୟ, ମହାଶୂନ୍ୟ, ଅମ୍ବର, ନଭ, ଅନ୍ତରୀକ୍ଷ, ଖ, ଅଭ୍ର, ସ୍ଵର୍ଗ, ବିନ୍ଦୁ ଓ ବ୍ରହ୍ମ ପରି ଅନେକ ଶବ୍ଦ ତୁଣ୍ଡରେ – ଏ ସବୁ ଧ୍ୱନି ମାନସପଟ୍ଟରେ ବିଭିର୍ଣ୍ଣ ଖଗୋଳିୟ କ୍ଷେତ୍ର। ଖଗୋଳ-ଆକାଶ ଏକ ଅବଲୋକନାଗାର ବା observatory । ଏହାର ବିସ୍ତୀର୍ଣ୍ଣତା ଏକ ବିସ୍ତୀର୍ଣ୍ଣ 'ଭାଷା' ପରି ଛୋଟ ବଡ ଭୂଖଣ୍ଡ ଓ ଜଳାଶୟରେ ପ୍ରତିବିମ୍ବିତ ଏବଂ ଅନୁବାଦିତ ହୁଏ, ଛୋଟ ଛୋଟ ଘଟଣାବଳୀ, କ୍ଷଣ, ମୂହୁର୍ତ୍ତ, ପ୍ରହର, ପାଗ, ଦିନ, ରାତି, ଜଳବାୟୁ, ଋତୁ, ସମୟ ଓ କାଳରେ। ଏପରି ଆକଳନ ଓ ବର୍ଣ୍ଣାନାରେ ଆକାଶର ସ୍ଵଚ୍ଛତା, ସ୍ଥାୟୀତ୍ୱ, ପାରଦର୍ଶିତା, ଆଦ୍ରତା, ରଙ୍ଗ, ରୂପ ଏବଂ ବ୍ୟାପ୍ତି,  'ଆକାଶ-ଭାଷା' ବା sky-language ପରି ଲାଗେ । Immersive Sky Experience, ଆକାଶର ଏହି ଭାଷାକୁ ବୁଝିବାର ଏକ ଚେଷ୍ଟା।
                                        <br />
                                        <br />
                                        ISE website ସଞ୍ଚାଳିତ ହୁଏ ଏକ ପ୍ରକାର artificial intelligence program ଦ୍ୱାରା, ଯାହା machine learning, data mining ଓ archival research ମାଧ୍ୟମରେ ନିର୍ଦ୍ଧିଷ୍ଟ ଆକାଶଖଣ୍ଡକୁ ତର୍ଜମା କରିବା ସହ ଅନୁଶୀଳନ ପୂର୍ବକ ପାଣିପଗର ପୂର୍ବାନୁମାନ ସୂଚନା ତଥା ଜଳବାୟୁ ପରିବର୍ତ୍ତନ ଓ 'ପ୍ରକୃତି' ସମ୍ବନ୍ଧୀୟ କଥା କାହାଣୀ webcast କରେ। ଓଡ଼ିଆ ଜନମାନସରେ 'ଜଳବାୟୁ ପରିବର୍ତ୍ତନ' ର ଏକ ନୂତନ ଦୃଷ୍ଟିକୋଣ ବା ଚେତନା ଜାଗ୍ରତ କରିବା ସହ ଲୋକଙ୍କୁ ପ୍ରକୃତିର ଅନୁଭୂତି ଓ ଅଙ୍ଗେନିଭା କଥା-କାହାଣୀକୁ ବାଣ୍ଟିବା ପାଇଁ ପ୍ରୋତ୍ସାହିତ କରେ ।
                                        <br />
                                        <br />
                                        ISE algorithm ପରିବେଶ ବିପର୍ଯୟ ସ୍ଥାନମାନଙ୍କ ଫଟୋରୁ ନିର୍ଦ୍ଧିଷ୍ଟ ଆକାଶ-ଅଂଶର ନମୁନା ସଂଗ୍ରହ କରି, ବିଶ୍ଲେଷଣାତ୍ମକ ଭିତ୍ତିରେ ପର୍ଯ୍ୟାଲୋଚନା ଦ୍ଵାରା ଉପଲବ୍ଧ ତଥ୍ୟରୁ ଆକାଶର ଏକ  ତତ୍ଵ-ଭିତ୍ତିକ ସୁନ୍ଦର ଦୃଶ୍ୟାନୁଭବ ସୃଷ୍ଟିକରି – ରାସ୍ତା, ଛକ, ଗାଁ, ପଞ୍ଚାୟତ, ଟାଉନ, ମୁନିସିପାଲିଟି  ତଥା ଛୋଟ ଅଞ୍ଚଳରେ କ୍ଷଣକୁ କ୍ଷଣ ବଦଳୁଥିବା ପାଣିପାଗର ସୂଚନା ପ୍ରଦାନ କରେ। ଏହି ପାଣିପାଗ ସୂଚନା ଓଡ଼ିଶାର ରାଜଧାନୀ ଭୁବନେଶ୍ଵର, ବଙ୍ଗୋପସାଗର ଉପକୂଳସ୍ଥ କେନ୍ଦ୍ରାପଡ଼ା ଜିଲ୍ଲାର ପୁନର୍ବାସ ଗ୍ରାମ 'ବଗପାଟିଆ', ଏବଂ ସମୁଦ୍ର ଜୁଆର ଦ୍ଵାରା ଭୂ-କ୍ଷୟ ଗଞ୍ଜାମ ଜିଲ୍ଲାର ନୋଳିଆ ଗାଁ 'ପୋଡାମପେଟା' ଆଦିରେ ଥିବା ISE-Station ମାନଙ୍କରୁ ସଂଗୃହୀତ ତଥ୍ୟ ବା ସୂଚନାକୁ ପାଥେୟ କରେ ।
                                        <br />
                                        <br />
                                        ପରିବେଶ ବିପର୍ଯୟର ଅନେକ ଫଟୋ ଜନସାଧାରଣଙ୍କ ବା ISE-user ଙ୍କ ଦ୍ୱାରା ସ୍ଵେଚ୍ଛାରେ ISE-website ରେ upload କରାଯାଇଥାଏ। ଓଡ଼ିଶାରେ ଘଟିଥିବା ସମସ୍ତ ପ୍ରକାର ପ୍ରାକୃତିକ ବିପର୍ଯୟ ସମ୍ବନ୍ଧୀୟ audio, video, photo, ଏବଂ documents ସଂଗ୍ରହ କରେ ISE, ଯାହା 'Environment Disaster Image Archive' ମାଧ୍ୟମରେ ଜନସାଧାରଣ ଙ୍କ ପାଇଁ ଉପଲବ୍ଧ ।
                                        <br />
                                        <br />
                                        <br />
                                        କଳ୍ପନା ଓ ନିର୍ଦେଶନା : ପରିବର୍ତ୍ତନ ମହାନ୍ତି<br />
                                        ରଚନା ଓ ଅନୁବାଦ: ପରିବର୍ତ୍ତନ ମହାନ୍ତି ଓ ଗୀତା ବଲ୍ଲଭ ନନ୍ଦନ ଦାଶ<br />
                                        ଗବେଷଣା: ଜ୍ୟୋତି ରଞ୍ଜନ ସାହୁ, ଗୀତା ବଲ୍ଲଭ ନନ୍ଦନ ଦାଶ, ସତ୍ୟରଞ୍ଜନ ବିଶ୍ଵାଳ, ପରିବର୍ତ୍ତନ ମହାନ୍ତି<br />
                                        ଆକାଶକୟାଁ: ଶଶୀକାନ୍ତ ମହାନ୍ତି<br />
                                        ଟେକ୍ନୋଲୋଜି ଏବଂ ସହାୟତା: AI ଢାଞ୍ଚା, Python language and Pytorch library ର ସହାୟତା ରେ ନିର୍ମିତ<br />
                                        ଧନ୍ୟବାଦ: ଅନିସ୍ ଚେରିଆନ୍, ଆକାଂକ୍ଷା ରସ୍ତୋଗୀ, କୁଶ ବଧ୍ଵର୍, ସମ୍ପୂର୍ଣ୍ଣ ମହାନ୍ତି, ବାବାକ ହାସମୀ, ସ୍ନେହା ରାଘବନ,<br />


                                    </>
                            }
                        </p>
                    </div>
                </main>
            </ContextMenu>
        </>
    );
}
