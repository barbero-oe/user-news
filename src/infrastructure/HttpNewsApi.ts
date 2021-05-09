import {AxiosInstance} from 'axios'
import {NewsApi} from '../domain/NewsApi'
import {createPage, Page} from '../domain/model/Page'
import {News} from '../domain/model/News'
import {SearchNewsResponse} from './SearchNewsResponse'

export class HttpNewsApi implements NewsApi {
    constructor(private http: AxiosInstance) {
    }

    async search(term: string, pageSize: number, page: number): Promise<Page<News>> {
        const response = await this.http.get<SearchNewsResponse>('/search/NewsSearchAPI',
            {params: {q: term, pageNumber: page, pageSize, withThumbnails: true}})
        const news = response.data.value as News[]
        return createPage(news, response.data.totalCount, pageSize, page)
    }
}
