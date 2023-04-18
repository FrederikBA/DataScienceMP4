import axios from "axios";

const URL = 'http://127.0.0.1:8000';

const apiUtils = () => {

    const getUrl = () => {
        return URL;
    }

    const getAxios = () => {
        const authAxios = axios.create()
        return authAxios
    }

    const getAuthAxios = () => {
        const authAxios = axios.create({
            headers: {
                'x-access-token': localStorage.getItem('jwtToken')
            }
        })
        return authAxios
    }

    return {
        getUrl,
        getAxios,
        getAuthAxios
    }
}

export default apiUtils();