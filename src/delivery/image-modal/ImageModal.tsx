import {Modal} from 'react-bootstrap'
import React, {useState} from 'react'
import {Image} from '../Image'
import styles from './ImageModal.module.css'
import {LoadingImage} from '../loading-image/LoadingImage'

interface ImageModalProps {
    image: Image
    show: boolean
    onHide: () => void
}

export const ImageModal: React.FC<ImageModalProps> = ({image, show, onHide}) =>
    <Modal show={show} onHide={onHide} dialogClassName={styles.dialog}>
        <Modal.Header closeButton/>
        <Modal.Body>
            <LoadingImage className={styles.image} image={image}/>
        </Modal.Body>
    </Modal>

type ImageModalHook = { showImage: (image: Image) => void, BoundedImageModal: () => JSX.Element }

export function useImageModal(): ImageModalHook {
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
