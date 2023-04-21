import axios from "axios";

const URL = 'http://127.0.0.1:8000';

const apiUtils = () => {

    const getUrl = () => {
        return URL;
    }

    const getAxios = () => {
        const baseAxios = axios.create()
        return baseAxios
    }

    return {
        getUrl,
        getAxios,
    }
}

export default apiUtils();