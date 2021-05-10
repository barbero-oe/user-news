import React from 'react'
import styles from './CardNews.module.css'
import skeleton from '../Skeleton.module.css'
import {Image} from '../Image'
import {LoadingImage} from '../loading-image/LoadingImage'

type CardNewsProps = { loading: true } | {
    loading: false
    title: string
    description: string
    url: string
    thumbnail: Image
    onImageClick: () => void
}

export const CardNews: React.FC<CardNewsProps> = (props) => {
    if (props.loading) return <SkeletonCard/>
    const {title, description, thumbnail, url, onImageClick} = props
    const shorterDescription = description.split(' ').slice(0, 21).join(' ')
    return (
        <div className={`card h-100`}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <LoadingImage className={`card-img mb-3 ${styles.image}`}
                              image={thumbnail}
                              onClick={onImageClick}
                              alt="News thumbnail"/>
                <p className="card-text">{shorterDescription}&hellip;</p>
            </div>
            <div className="card-footer bg-transparent border-0 text-right">
                <a className="card-link" rel="noopener noreferrer" target="_blank" href={url}>Read more&hellip;</a>
            </div>
        </div>
    )

}

const SkeletonCard = () => <div className={`card position-relative ${styles.skeletonCard} ${skeleton.skeleton}`}/>
