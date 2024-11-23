import { useState, useCallback } from "react";
import { MAX_ITEMS_BY_PAGE } from "@/constants";

interface UseFetchProps {
    url: string;
    headers?: Record<string, string>;
    page?: number;
    pageSize?: number;
    queryParams?: Record<string, any>;
}

interface Pagination {
    totalElements: number;
    totalPages: number;
    pageSize: number;
    currentPage: number;
}

export function useFetch<T>({ url, headers = {}, page = 0, pageSize = MAX_ITEMS_BY_PAGE, queryParams = {} }: UseFetchProps) {
    const [data, setData] = useState<T[] | T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<Pagination | null>(null);

    const request = useCallback(
        async (method: "GET" | "POST" | "PUT" | "DELETE", body?: any, additionalConfig?: RequestInit) => {
            setLoading(true);
            setError(null);

            try {
                // Inclui parâmetros apenas para GET
                const params = method === "GET" ? new URLSearchParams({ page: page.toString(), size: pageSize.toString(), ...queryParams }).toString() : undefined;
                const config: RequestInit = {
                    method,
                    mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json",
                        ...headers,
                    },
                    body: method === "POST" || method === "PUT" ? JSON.stringify(body) : undefined,
                    ...additionalConfig,
                };

                const response = await fetch(`${url}${params ? `?${params}` : ""}`, config);

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const responseData = await response.json();

                setData(responseData.content || responseData);

                // Configura paginação apenas se a resposta incluir detalhes da página
                if (responseData.pageable) {
                    setPagination({
                        totalElements: responseData.totalElements,
                        totalPages: responseData.totalPages,
                        pageSize: responseData.pageable.pageSize,
                        currentPage: responseData.pageable.pageNumber + 1,
                    });
                }

                return responseData;
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocorreu um erro inesperado.");
                }
                throw err;
            } finally {
                setLoading(false);
            }
        },
        [url, headers, page, pageSize, queryParams]
    );

    // Define operações CRUD
    const read = useCallback(() => request("GET"), [request]);
    const create = useCallback((body: any) => request("POST", body), [request]);
    const update = useCallback((body: any) => request("PUT", body), [request]);
    const remove = useCallback((id: string | number) => request("DELETE", null, { headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) }), [request, url]);

    return { data, loading, error, pagination, read, create, update, remove };
}
