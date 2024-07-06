"use client"

import ContextMenu from "@/components/layout/NavContextMenu";
import { useState } from "react";


export default function AboutPage() {
    const [hover, setHover] = useState(false);

    return (
        <>
            <ContextMenu>
                <main className="min-h-dvh w-full px-5 lg:px-10 py-5 flex items-center justify-between bg-img-bg-6 bg-cover bg-center">
                    <div className="h-full w-full lg:w-2/3 backdrop-blur-lg bg-white bg-opacity-50 rounded-lg">
                        <p className="text-lg font-serif text-justify p-5" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            {
                                !hover
                                    ? <>
                                        The Sky in Odia manifests as ଆକା ଶ (aakasa), ଖଗୋ ଳ (khagola), ଗ   ଗନ (gagana), ଦ୍ୟୋ (dyo), ବ୍ୟୋ ମ
                                        (byoma), ମହା ଶୂନ୍ୟ (mahasunya), ଶୂନ୍ୟ (sunya), ଅମ୍ବର (ambara), ନଭ (nabha), ଅନ୍ତରୀ କ୍ଷ (antariksya),
                                        ଖ (kha), ଅଭ୍ର (abbhra), ସ୍ବର୍ଗ (swarga), ବିନ୍ଦୁ (bindu), and ବ୍ରହ୍ମ (brahma) etc. As each sound
                                        transforms into an image, the &apos;celestial sphere&apos; becomes an observatory. Like a common
                                        language, the common sky reflects on small and vast landscapes and water bodies and
                                        translates into moments, incidents, movements, days, nights, weather, seasons, time, and
                                        epochs. The sky as absorbent, transparent, lucid, reflective, temporal, spatial, and infinite
                                        presents a sophisticated language. <br />
                                        &apos;Immersive Sky Experience&apos; tries to explore and understand the &apos;sky language&apos; using artificial
                                        intelligence, machine learning technology, data mining, and archiving for climate storytelling and
                                        weather prediction. It forests on a minute-to-minute basis weather changes on specific micro
                                        geo-coordinates and provides reports from windows, streets, villages, panchayat, municipalities,
                                        and small towns - prompting a unique perspective and experience of the Odia language and
                                        culture, people, and subjectivities. <br />
                                        The ISE algorithm analyses environmental disaster images, studies and identifies patterns,
                                        extracts the sky part, composes the metadata, and provides a digital sky experience. ISE stories
                                        are based on ground-level data, collected from our &apos;stations&apos; situated near the coast of the Bay
                                        of Bengal at Bagapatia rehabilitation colony (Kendrapada district), the land erosion site of
                                        Podampeta (Ganjam district), and the capital city of Bhubaneswar in Odisha. <br />
                                        The interactive website enables and facilitates marginal and climate-vulnerable communities
                                        from coastal Odisha, and share environment stories, experiences, and concerns and
                                        sustainably engage with the colloquial perspective on climate change. ISE website also hosts
                                        an &apos;Environment Disaster Image Archive&apos; for the public, which has audiovisual information and
                                        documents on different environmental disasters from Odisha. <br />
                                        &apos;Immersive Sky Experience&apos; was conceived and created by Paribartana Mohanty <br />

                                        Credit: <br /> Text and Translation by Paribartana Mohanty and Gita Nandan Ballabha Das <br />
                                        Project Assistance and Resouce: Jyoti Ranjan Sahoo, Gita Nandan Ballabha Das, Satyabadi
                                        Biswal <br />
                                        Technology and Assistance: Python language and Pytorch library to build the AI model <br />
                                        Acknowledgment: Anish Cherian, Akansha Rastogi, Kush Badhwar, Sampurna Mohanty,
                                        Bahbak Hasimi, Shena Raghavan, <br />
                                        Financial and Mentorship Support:
                                        Sharjah Art Foundation Production Programme 2023 <br />
                                        Prince Claus Mentorship Award for Cultural & Artistic Responses to Environmental Change
                                        2022-23
                                    </>
                                    :
                                    <>
                                        ଆକା ଶ, ମହା କା ଶ, ଖଗୋ ଳ, ଗଗନ, ଦ୍ୟୋ , ବ୍ୟୋ ମ, ଶୂନ୍ୟ, ମହା ଶୂନ୍ୟ, ଅମ୍ବର, ନଭ, ଅନ୍ତରୀ କ୍ଷ, ଖ, ଅଭ୍ର, ସ୍ଵର୍ଗ, ବିନ୍ଦୁ ଓ
                                        ବ୍ରହ୍ମ ପରି ଅନେ କ ଶବ୍ଦ ତୁଣ୍ଡରେ - ଏ ସବୁ ଧ୍ୱନି ମା ନସପଟ୍ଟରେ ବିଭିର୍ଣ୍ଣ ଖଗୋ ଳିୟ କ୍ଷେ ତ୍ର। ଖଗୋ ଳ-ଆକା ଶ ଏକ
                                        ଅବଲୋ କନା ଗା ର ବା observatory । ଏହା ର ବିସ୍ତୀ ର୍ଣ୍ଣତା ଏକ ବିସ୍ତୀ ର୍ଣ୍ଣ &apos;ଭା ଷା &apos; ପରି ଛୋ ଟ ବଡ ଭୂଖଣ୍ଡ ଓ ଜଳା ଶୟରେ
                                        ପ୍ରତିବିମ୍ବିତ ଏବଂ ଅନୁବା ଦିତ ହୁଏ, ଛୋ ଟ ଛୋ ଟ ଘଟଣା ବଳୀ , କ୍ଷଣ, ମୂହୁର୍ତ୍ତ, ପ୍ରହର, ପା ଗ, ଦିନ, ରା ତି, ଜଳବା ୟୁ, ଋତୁ, ସମୟ ଓ
                                        କା ଳରେ । ଏପରି ଆକଳନ ଓ ବର୍ଣ୍ଣା ନା ରେ ଆକା ଶର ସ୍ଵଚ୍ଛତା , ସ୍ଥା ୟୀ ତ୍ୱ, ପା ରଦର୍ଶିତା , ଆଦ୍ରତା , ରଙ୍ଗ, ରୂପ ଏବଂ ବ୍ୟା ପ୍ତି,
                                        &apos;ଆକା ଶ-ଭା ଷା &apos; ବା sky-language ପରି ଲା ଗେ । Immersive Sky Experience, ଆକା ଶର ଏହି ଭା ଷା କୁ ବୁଝିବା ର ଏକ
                                        ଚେ ଷ୍ଟା । <br />
                                        ISE website ସଞ୍ଚା ଳିତ ହୁଏ ଏକ ପ୍ରକା ର artificial intelligence program ଦ୍ୱା ରା , ଯା ହା machine learning,
                                        data mining ଓ archival research ମା ଧ୍ୟମରେ ନିର୍ଦ୍ଧିଷ୍ଟ ଆକା ଶଖଣ୍ଡକୁ ତର୍ଜମା କରିବା ସହ ଅନୁଶୀ ଳନ ପୂର୍ବକ
                                        ପା ଣିପଗର ପୂର୍ବା ନୁମା ନ ସୂଚନା ତଥା ଜଳବା ୟୁ ପରିବର୍ତ୍ତନ ଓ &apos;ପ୍ରକୃତି&apos; ସମ୍ବନ୍ଧୀ ୟ କଥା କା ହା ଣୀ webcast କରେ । ଓଡ଼ିଆ
                                        ଜନମା ନସରେ &apos;ଜଳବା ୟୁ ପରିବର୍ତ୍ତନ&apos; ର ଏକ ନୂତନ ଦୃଷ୍ଟିକୋ ଣ ବା ଚେ ତନା ଜା ଗ୍ରତ କରିବା ସହ ଲୋ କଙ୍କୁ ପ୍ରକୃତିର ଅନୁଭୂତି ଓ
                                        ଅଙ୍ଗେ ନିଭା କଥା -କା ହା ଣୀ କୁ ବା ଣ୍ଟିବା ପା ଇଁ ପ୍ରୋ ତ୍ସା ହିତ କରେ । <br />
                                        ISE algorithm ପରିବେ ଶ ବିପର୍ଯୟ ସ୍ଥା ନମା ନଙ୍କ ଫଟୋ ରୁ ନିର୍ଦ୍ଧିଷ୍ଟ ଆକା ଶ-ଅଂ ଶର ନମୁନା ସଂ ଗ୍ରହ କରି, ବିଶ୍ଲେ ଷଣା ତ୍ମକ
                                        ଭିତ୍ତିରେ ପର୍ଯ୍ୟା ଲୋ ଚନା ଦ୍ଵା ରା ଉପଲବ୍ଧ ତଥ୍ୟରୁ ଆକା ଶର ଏକ ତତ୍ଵ-ଭିତ୍ତିକ ସୁନ୍ଦର ଦୃଶ୍ୟା ନୁଭବ ସୃଷ୍ଟିକରି - ରା ସ୍ତା ,
                                        ଛକ, ଗାଁ , ପଞ୍ଚା ୟତ, ଟା ଉନ, ମୁନିସିପା ଲିଟି ତଥା ଛୋ ଟ ଅଞ୍ଚଳରେ କ୍ଷଣକୁ କ୍ଷଣ ବଦଳୁଥିବା ପା ଣିପା ଗର ସୂଚନା ପ୍ରଦା ନ କରେ । ଏହି
                                        ପା ଣିପା ଗ ସୂଚନା ଓଡ଼ିଶା ର ରା ଜଧା ନୀ ଭୁବନେ ଶ୍ଵର, ବଙ୍ଗୋ ପସା ଗର ଉପକୂଳସ୍ଥ କେ ନ୍ଦ୍ରା ପଡ଼ା ଜିଲ୍ଲା ର ପୁନର୍ବା ସ ଗ୍ରା ମ
                                        &apos;ବଗପା ଟିଆ&apos;, ଏବଂ ସମୁଦ୍ର ଜୁଆର ଦ୍ଵା ରା ଭୂ-କ୍ଷୟ ଗଞ୍ଜା ମ ଜିଲ୍ଲା ର ନୋ ଳିଆ ଗାଁ &apos;ପୋ ଡା ମପେ ଟା &apos; ଆଦିରେ ଥିବା ISE-Station
                                        ମା ନଙ୍କରୁ ସଂ ଗୃହୀ ତ ତଥ୍ୟ ବା ସୂଚନା କୁ ପା ଥେ ୟ କରେ । <br />
                                        ପରିବେ ଶ ବିପର୍ଯୟର ଅନେ କ ଫଟୋ ଜନସା ଧା ରଣଙ୍କ ବା ISE-user ଙ୍କ ଦ୍ୱା ରା ସ୍ଵେ ଚ୍ଛା ରେ ISE-website ରେ upload
                                        କରା ଯା ଇଥା ଏ। ଓଡ଼ିଶା ରେ ଘଟିଥିବା ସମସ୍ତ ପ୍ରକା ର ପ୍ରା କୃତିକ ବିପର୍ଯୟ ସମ୍ବନ୍ଧୀ ୟ audio, video, photo, ଏବଂ
                                        documents ସଂ ଗ୍ରହ କରେ ISE, ଯା ହା &apos;Environment Disaster Image Archive&apos; ମା ଧ୍ୟମରେ ଜନସା ଧା ରଣ ଙ୍କ ପା ଇଁ
                                        ଉପଲବ୍ଧ ।
                                    </>
                            }
                        </p>
                    </div>
                </main>
            </ContextMenu>
        </>
    );
}
