import React from 'react'
import styles from './CardNews.module.css'
import {Image} from '../Image'

interface CardNewsProps {
    title: string
    description: string
    url: string
    thumbnail: Image
    onImageClick: () => void
}

export const CardNews: React.FC<CardNewsProps> = ({title, description, thumbnail, url, onImageClick}) => {
    const shorterDescription = description.split(' ').slice(0, 21).join(' ')
    return (
        <div className={`card ${styles.news} h-100`}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <img className={`card-img mb-3 ${styles.image}`}
                     width={thumbnail.width}
                     height={thumbnail.height}
                     src={thumbnail.url} alt="news thumbnail"
                     onClick={onImageClick}
                />
                <p className="card-text">{shorterDescription}&hellip;</p>
            </div>
            <div className="card-footer bg-transparent border-0 text-right">
                <a className="card-link" rel="noopener noreferrer" target="_blank" href={url}>Read more&hellip;</a>
            </div>
        </div>
    )
}
