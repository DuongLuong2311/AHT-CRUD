import axios from "axios";
const CLIENT_BASE_URL = process.env.REACT_APP_BASE_URL || ""


const httpService = {
    GET: async (uri, token, params) => {
        let url = CLIENT_BASE_URL + uri;
        let headers = {};
        if(token ==="" || token === null){
            headers = {
                "Content-Type": "application/json"
            }
        } else {
            headers = {
                "Content-Type": "application/json"
            }
        }

        try{
            const res = axios.get(url, {
                headers,
                params
            })

            return res
        } catch(error){
            const err = error;
            if(err.response){
                const responseError = err.response.data;
                throw responseError;
            }

            const responseError = {
                status: 400,
                data: {},
                exception: {
                    detail: "Ops! Something went wrong!"
                },
                message: ""
            };
            throw responseError
        }
    },


    POST: async (uri, params) =>{
        let url = CLIENT_BASE_URL + uri;
        try {
            const res = axios.post(url , params)
            return res;
        } catch (error) {
            const err = error
            if (err.response){
                const responseError = err.response.data
                throw responseError
            }

            const responseError = {
                status: 400,
                data:{},
                exception: {
                    detail: "Ops! Something went wrong!"
                },
                message: ""
            }

            throw responseError
        }
    },
    PUT: async (uri, params) =>{
        let url = CLIENT_BASE_URL + uri;
        try {
            const res = axios.put(url , params)
            return res;
        } catch (error) {
            const err = error
            if (err.response){
                const responseError = err.response.data
                throw responseError
            }

            const responseError = {
                status: 400,
                data:{},
                exception: {
                    detail: "Ops! Something went wrong!"
                },
                message: ""
            }

            throw responseError
        }
    },

    DELETE: async (uri, token, params) => {
        let url = CLIENT_BASE_URL + uri
        let headers = {}
        if(token === "" || token === null){
            headers = {
                "Content-Type": "application/json"
            }
        } else {
            headers = {
                "Content-Type": "application/json"
            }
        }

        try {
            const res = axios.delete(url + params)

            return res;
        } catch (error) {
            const err = error
            if (err.response){
                const responseError = err.response.data
                throw responseError
            }

            const responseError = {
                status: 400,
                data:{},
                exception: {
                    detail: "Ops! Something went wrong!"
                },
                message: ""
            }

            throw responseError
        }
    }
}


export default httpService;