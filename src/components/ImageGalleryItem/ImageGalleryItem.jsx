import { Modal } from "components/Modal/Modal"
import { GalleryItem, ImageGalleryItemImage } from "./ImageGalleryItem.styled"


export const ImageGalleryItem = ({imgUrl,imgLarge,tags}) => {
  return (   
    <GalleryItem className="gallery-item">
      <ImageGalleryItemImage src={imgUrl} alt={tags} width="320" />
      <Modal largeUrl={imgLarge} />
    </GalleryItem>        
    )
}
