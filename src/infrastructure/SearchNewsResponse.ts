export interface SearchNewsResponse {
    _type: string,
    didUMean: string,
    totalCount: number,
    relatedSearch: [],
    value: [{
        id: string,
        title: string,
        url: string,
        description: string,
        body: string,
        snippet: string,
        keywords: string,
        language: string,
        isSafe: true,
        datePublished: string,
        provider: {
            name: string,
            favIcon: string,
            favIconBase64Encoding: string
        },
        image: {
            url: string,
            height: number,
            width: number,
            thumbnail: string,
            thumbnailHeight: number,
            thumbnailWidth: number,
            base64Encoding: string,
            name: string,
            title: string,
            provider: {
                name: string,
                favIcon: string
                favIconBase64Encoding: string
            },
            imageWebSearchUrl: null,
            webpageUrl: string
        }
    }]
}