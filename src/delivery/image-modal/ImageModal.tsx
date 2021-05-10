import {Modal} from 'react-bootstrap'
import React from 'react'
import {Image} from '../Image'
import styles from './ImageModal.module.css'

interface ImageModalProps {
    image: Image
    show: boolean
    onHide: () => void
}

export const ImageModal: React.FC<ImageModalProps> = ({image, show, onHide}) =>
    <Modal show={show} onHide={onHide} dialogClassName={styles.dialog}>
        <Modal.Header closeButton/>
        <Modal.Body>
            <img className={styles.image}
                 width={image.width}
                 height={image.height}
                 src={image.url}/>
        </Modal.Body>
    </Modal>
