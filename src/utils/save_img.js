




// Function to upload the image to ImgBB
async function uploadImageToImgBB(base64Image) {
    console.log("Uploading image to ImgBB");

    const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;
    const formData = new FormData();
    formData.append("image", base64Image);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}


export {
    uploadImageToImgBB
}


