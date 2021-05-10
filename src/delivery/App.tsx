import React, {useCallback, useState} from 'react'
import {SearchBar} from './searchbar/SearchBar'
import {Page} from '../domain/model/Page'
import {News} from '../domain/model/News'
import {SearchResult} from './search-result/SearchResult'
import {useImageModal} from './image-modal/ImageModal'

type SearchNews = (term: string, pageSize: number, page: number) => Promise<Page<News> | { message: string }>

export const App: React.FC<{ searchNews: SearchNews }> = ({searchNews}) => {
    const {news, message, search, consultPage, loading} = useSearch(searchNews)
    const {showImage, BoundedImageModal} = useImageModal()
    return (
        <div className="container pt-4">
            <BoundedImageModal/>
            <h1>News Search</h1>
            <SearchBar validationMessage="What news interests you?"
                       loading={loading}
                       search={term => search(term, 1)}/>
            {message !== ''
                ? <div className="container text-center"><span className="h1">{message}</span></div>
                : <SearchResult loading={loading} showImage={showImage} news={news} consultPage={consultPage}/>}
        </div>)
}

interface SearchState {
    news: Page<News> | null
    message: string
    search: (term: string, page: number) => void
    consultPage: (page: number) => void
    loading: boolean
}

function useSearch(searchNews: SearchNews): SearchState {
    const [query, setQuery] = useState('')
    const [news, setNews] = useState<Page<News> | null>(null)
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const search = useCallback(async (term: string, page: number) => {
        setMessage('')
        setLoading(true)
        const response = await searchNews(term, 6, page)
        setQuery(term)
        if (isPage(response)) {
            setNews(response)
        } else {
            setNews(null)
            setMessage(response.message)
        }
        setLoading(false)
    }, [searchNews])
    const consultPage = useCallback(page => search(query, page), [query, search])
    return {news, message, search, consultPage, loading}
}

function isPage<T>(response: Page<T> | { message: string }): response is Page<T> {
    return (response as Page<T>).pages !== undefined
}