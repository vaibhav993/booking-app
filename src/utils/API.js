import axios from "axios";


export default class API {
    static axiosInstance = null;

    static init() {
        this.axiosInstance = axios.create();
        this.addApiInterceptor();
    }

    static addApiInterceptor() {
        // this.axiosInstance.interceptors.request.use(request => {
        //     //can add request configs
        // });

        this.axiosInstance.interceptors.response.use(
            (response) => {
                if(response.status === 200) {
                    return Promise.resolve(response.data);
                }

                return Promise.reject(response.statusText);
            },
            (error) => {
                return Promise.reject(error.response.status);
            }
        )
    }

    static get(url, config) {
        console.log(url)
        return this.axiosInstance.get(url, config);
    }

    static post(url, data, config) {
        return this.axiosInstance.post(url, data, config);
    }
}