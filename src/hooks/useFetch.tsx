"use client"

import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface UseFetchProps<T> {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';  
    body?: any; 
    headers?: Record<string, string>; 
}

export function useFetch<T>({ url, method = 'GET', body, headers }: UseFetchProps<T>) {
    const [data, setData] = useState<T | null>(null);  
    const [loading, setLoading] = useState<boolean>(true);  
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);  
                setError(null);   
                const response = await axios({
                    url,
                    method,
                    data: body,
                    headers,
                });
                setData(response.data); 
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.message || err.message);  
                } else {
                    setError('Ocorreu um erro inesperado.');
                }
            } finally {
                setLoading(false); 
            }
        };

        fetchData();  
    }, [url, method, body, headers]);  

    return { data, loading, error };
}
