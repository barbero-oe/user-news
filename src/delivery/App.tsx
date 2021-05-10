import React, {useCallback, useState} from 'react'
import {SearchBar} from './searchbar/SearchBar'
import {CardNews} from './card-news/CardNews'
import {Paginator} from './paginator/Paginator'
import {Page} from '../domain/model/Page'
import {News} from '../domain/model/News'
import {Image} from './Image'
import {ImageModal} from './image-modal/ImageModal'

type SearchNews = (term: string, pageSize: number, page: number) => Promise<Page<News>>

export const App: React.FC<{ searchNews: SearchNews }> = ({searchNews}) => {
    const [query, setQuery] = useState('')
    const [news, setNews] = useState<Page<News> | null>(null)
    const search = useCallback(async (term: string, page: number) => {
        setQuery(term)
        setNews(await searchNews(term, 6, page))
    }, [searchNews])
    const consultPage = useCallback(page => search(query, page), [query, search])
    const {showImage, BoundedImageModal} = useImageModal()
    return (
        <div className="container pt-4">
            <BoundedImageModal/>
            <h1>News Search</h1>
            <SearchBar search={term => search(term, 1)}/>
            {news === null ? null :
                <>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {news.values.map(item =>
                            <div key={item.id} className="col my-3">
                                <CardNews
                                    title={item.title}
                                    description={item.description}
                                    url={item.url}
                                    thumbnail={{
                                        url: item.image.thumbnail,
                                        width: item.image.width,
                                        height: item.image.height,
                                    }}
                                    onImageClick={() => showImage({
                                        url: item.image.url,
                                        width: item.image.width,
                                        height: item.image.height,
                                    })}
                                />
                            </div>,
                        )}
                    </div>
                    <Paginator pages={news.pages} current={news.current}
                               onPageChange={consultPage}/>
                </>
            }
        </div>)
}

type ImageModalHook = { showImage: (image: Image) => void, BoundedImageModal: () => JSX.Element }

function useImageModal(): ImageModalHook {
    const showImage = (image: Image) => {
        setImage(image)
        setShow(true)
    }
    const hide = () => setShow(false)
    const [show, setShow] = useState(false)
    const [image, setImage] = useState<Image>({url: '', width: 0, height: 0})
    return {
        showImage,
        BoundedImageModal: () => <ImageModal image={image} show={show} onHide={hide}/>,
    }
}