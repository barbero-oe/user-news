import {Page} from '../model/Page'
import {News} from '../model/News'
import {NewsApi} from '../NewsApi'

export class GetNews {
    constructor(private news: NewsApi) {
    }

    search = async (term: string, pageSize: number, page: number): Promise<Page<News> | { message: string }> => {
        try {
            const response = await this.news.search(term, pageSize, page)
            if (response.values.length === 0) return {message: 'No results found'}
            return response
        } catch (e) {
            console.error(e)
            return {message: 'Please, try again'}
        }
    }
}
