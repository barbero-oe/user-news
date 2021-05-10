import {CardNews} from '../card-news/CardNews'
import {Paginator} from '../paginator/Paginator'
import React from 'react'
import {Page} from '../../domain/model/Page'
import {News} from '../../domain/model/News'
import {Image} from '../Image'


interface SearchResultProps {
    news: Page<News> | null
    showImage: (image: Image) => void
    consultPage: (page: number) => void
    loading: boolean
}

export const SearchResult: React.FC<SearchResultProps> = ({news, showImage, consultPage, loading}) => {
    if (loading) return <SkeletonSearchResult/>
    if (news === null) return null
    return <>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            {news.values.map(item =>
                <div key={item.id} className="col my-3">
                    <CardNews
                        loading={loading}
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

const SkeletonSearchResult = () =>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {Array.from(Array(6).keys()).map((_, i) =>
            <div key={i} className="col my-3">
                <CardNews loading={true}/>
            </div>,
        )}
    </div>
