import React, {useState} from 'react'
import styles from '../Skeleton.module.css'
import loadingStyles from './LoadingImage.module.css'
import {Image} from '../Image'

export interface LoadingImageProps {
    className: string
    image: Image
    onClick?: () => void
    alt?: string
}

export const LoadingImage: React.FC<LoadingImageProps> = ({className, image, alt, onClick}) => {
    const [loading, setLoading] = useState(true)
    const hide = loading ? loadingStyles.hide : ''
    const clickable = onClick === undefined ? '' : loadingStyles.clickable
    return (
        <div className={loading ? styles.skeleton : ''}>
            <img className={`${className} ${hide} ${clickable}`}
                 width={image.width}
                 height={image.height}
                 src={image.url} alt={alt}
                 onLoad={() => setLoading(false)}
                 onClick={onClick}
            />
        </div>)
}