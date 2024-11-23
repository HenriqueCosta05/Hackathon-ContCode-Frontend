"use client"

import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { MAX_ITEMS_BY_PAGE } from '@/constants';

interface UseFetchProps<T> {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: Record<string, string>;
    page?: number;
    pageSize?: number;
    queryParams?: Record<string, any>
}

interface Pagination {
    totalElements: number;
    totalPages: number;
    pageSize: number;
    currentPage: number;
}


export function useFetch<T>({ url, method = 'GET', body, headers, page = 0, pageSize = MAX_ITEMS_BY_PAGE, queryParams = {} }: UseFetchProps<T>) {
    const [data, setData] = useState<T[] | T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<Pagination | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                setPagination(null)

                const params = { page, size: pageSize, ...queryParams }

                const response = await axios({
                    url,
                    method,
                    data: body,
                    headers,
                });
                setData(response.data.content);
                setPagination({
                    totalElements: response.data.totalElements,
                    totalPages: response.data.totalPages,
                    pageSize: response.data.pageable.pageSize,
                    currentPage: response.data.pageable.pageNumber + 1,
                });

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
    }, [url, method, body, headers, page, pageSize, queryParams])

    return { data, loading, error, pagination };
}
