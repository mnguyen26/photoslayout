import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import './photos.css';

import images from './output.json';

const Photos = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleImageClick = (index: number) => {
        setCurrentImage(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setCurrentImage(0);
        setModalOpen(false);
    }

    return (
        <div className="scroll-container">
          <Gallery photos={images} onClick={(event, { photo, index }) => handleImageClick(index)} />
          <ModalGateway>
            {modalOpen ? (
              <Modal onClose={closeModal}>
                <Carousel
                  currentIndex={currentImage}
                  views={images}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
    )
};

export default Photos