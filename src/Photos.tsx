import React, { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

import photos from "./output.json";

const Photos = () => {
  const [currentPhoto, setCurrentPhoto] = useState<number>(-1);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const handleImageClick = (index: number) => {
    setCurrentPhoto(index);
    setLightboxOpen(true);
  }

  const handleCloseLightbox = () => {
    setCurrentPhoto(-1);
    setLightboxOpen(false);
  }

  return (
    <>
    <RowsPhotoAlbum 
      photos={photos} 
      onClick={({ index }) => handleImageClick(index)} 
    />

    <Lightbox
      slides={photos}
      open={lightboxOpen}
      index={currentPhoto}
      close={handleCloseLightbox}
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
    />
    </>
  )
}

export default Photos