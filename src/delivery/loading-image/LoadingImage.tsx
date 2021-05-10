import React, {useState} from 'react'
import styles from '../Skeleton.module.css'
import loadingStyles from './LoadingImage.module.css'
import {Image} from '../Image'
import NotFound from './not-found.webp'

export interface LoadingImageProps {
    className: string
    image: Image
    onClick?: () => void
    alt?: string
}

export const LoadingImage: React.FC<LoadingImageProps> = ({className, image, alt, onClick}) => {
    const [showedImage, setShowedImage] = useState(image)
    const [loading, setLoading] = useState(true)
    const hide = loading ? loadingStyles.hide : ''
    const clickable = onClick === undefined ? '' : loadingStyles.clickable
    return (
        <div className={loading ? styles.skeleton : ''}>
            <img className={`${className} ${hide} ${clickable}`}
                 width={showedImage.width}
                 height={showedImage.height}
                 src={showedImage.url} alt={alt}
                 onError={() => setShowedImage({url: NotFound, width: 512, height: 512})}
                 onLoad={() => setLoading(false)}
                 onClick={onClick}
            />
        </div>)
}