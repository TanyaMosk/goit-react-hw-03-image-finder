import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({images}) => {
  return (
    <Gallery className="gallery">    
      {images.map(({id, webformatURL, tags, largeImageURL}) => (
        <ImageGalleryItem
          key={id}
          imgUrl={webformatURL}
          imgLarge={largeImageURL}
          tags={tags}
        />
      ))}      
    </Gallery>
  )
};

  //  {images.map(({ id, webformatURL, tags, largeImageURL }) => (
  //       <ImageGalleryItem
  //         key={id}
  //         imgUrl={webformatURL}
  //         description={tags}
  //         largeImgUrl={largeImageURL}
  //       />
  //      ))}