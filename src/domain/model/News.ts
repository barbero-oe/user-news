export interface News {
    id: string,
    title: string,
    url: string,
    description: string,
    body: string,
    snippet: string,
    image: {
        url: string,
        height: number,
        width: number,
        thumbnail: string,
        thumbnailHeight: number,
        thumbnailWidth: number,
    }
}