import axios from 'axios';


async function registerUser(userData) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`,
            userData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            }
        );

        localStorage.setItem("token", response.data.refresh_token);

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



async function loginUser(userData) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`,
            userData,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        localStorage.setItem("token", response.data.refresh_token);

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


function getToken() {
    return localStorage.getItem("token") || null;
}


async function getUser() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`,
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





export { registerUser, loginUser, getToken, getUser };

