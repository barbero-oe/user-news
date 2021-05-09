import {Page} from '../model/Page'
import {News} from '../model/News'
import {NewsApi} from '../NewsApi'

export class GetNews {
    constructor(private news: NewsApi) {
    }

    search = async (term: string, pageSize: number, page: number): Promise<Page<News>> =>
        await this.news.search(term, pageSize, page)
}
