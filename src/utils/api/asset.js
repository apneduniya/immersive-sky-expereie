import axios from 'axios';
import { getToken } from './auth';


async function saveAsset(data) {
    try {

        console.log("data", data);

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/asset/create`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function processAsset(url) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/asset/process_image`,
            {
                image_url: url
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function getNewAsset() { // For home page to get keywords, geolocation, and src
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/asset/new`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function getNewAssetURL() { // For other pages, just to get src
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/asset/new`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            }
        );

        return {
            success: true,
            data: response.data.src
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function getScatterAsset() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/asset/scatter`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function getAsset(id) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/asset/id/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function getMyAssets() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/asset/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function deleteAsset(id) {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/asset/id/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function getLatestSlogan() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/asset/slogan`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}


async function searchScatterAsset(data) {

    const query = Object.keys(data)
        .filter(key => data[key] !== '') // Filter out keys with empty values
        .map(key => key + '=' + data[key])
        .join('&'); // Convert object to query string like "key1=value1&key2=value2"

    console.log("query", `${process.env.NEXT_PUBLIC_API_URL}/asset/search?${query}`);

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/asset/search?${query}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            }
        );

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            data: error.response.data
        }
    }
}




export {
    saveAsset, getNewAsset, getNewAssetURL, getScatterAsset, getAsset, getMyAssets, deleteAsset, getLatestSlogan, searchScatterAsset, processAsset
}

