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


async function getNewAssetURL() {
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




export {
    saveAsset, getNewAssetURL, getScatterAsset, getAsset, getMyAssets, deleteAsset
}

