import React from 'react'
import styles from './CardNews.module.css'

interface CardNewsProps {
    description: string
    thumbnail: {
        url: string
        width: number
        height: number
    }
}

export const CardNews: React.FC<CardNewsProps> = ({description, thumbnail}) => {
    const shorterDescription = description.split(' ').slice(0, 21).join(' ')
    return (
        <div className={`card ${styles.news} h-100`}>
            <div className="card-body">
                <h5 className="card-title">'The Wheel of Time': First Look at Main Character in Amazon Series
                    Revealed</h5>
                <img className={`card-img mb-3 ${styles.image}`}
                     width={thumbnail.width}
                     height={thumbnail.height}
                     src={thumbnail.url} alt="news thumbnail"/>
                <p className="card-text">{shorterDescription}&hellip;</p>
                <div className="text-right">
                    <a className="card-link" href="#">Read more&hellip;</a>
                </div>
            </div>
        </div>
    )
}
