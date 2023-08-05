interface QueryParams {
    [key: string]: string | number | boolean;
}

function buildQueryParams(params: QueryParams): string {
    const queryParams = Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

    return queryParams;
}

export function queryBuilder(baseUrl: string, params: QueryParams): string {
    const queryParams = buildQueryParams(params);
    const separator = baseUrl.includes('?') ? '&' : '?';

    return `${baseUrl}${separator}${queryParams}`;
}
