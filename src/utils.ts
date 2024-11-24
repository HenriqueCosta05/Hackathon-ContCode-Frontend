import axios from "axios";
import { API_URL } from "./constants";

export const post = async <T>(body: any, path: string): Promise<T> => {
    return new Promise(async (resolve, reject) => {
        
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        };
        
        try {
            await axios.post(API_URL + path, body, config).then((response) => {
                resolve(response.data);
            })
        } catch (error) {
            reject(error as Error);
        }
    })
}

export const get = async <T>(path: string): Promise<T> => {
    return new Promise(async (resolve, reject) => {
        
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        };
        
        try {
            await axios.get(API_URL + path, config).then((response) => {
                resolve(response.data);
            })
        } catch (error) {
            reject(error as Error);
        }
    })
}