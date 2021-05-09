import {News} from './model/News'
import {Page} from './model/Page'

export interface NewsApi {
    search(term: string, pageSize: number, page: number): Promise<Page<News>>
}