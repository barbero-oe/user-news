export interface Page<T> {
    totalResults: number
    pages: number
    current: number
    values: T[]
}

export function createPage<T>(values: T[], total: number, pageSize: number, current: number): Page<T> {
    const pages = Math.ceil(total / pageSize)
    return {totalResults: total, pages, current, values}
}