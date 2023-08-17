import { Component } from 'react';
import { ModalImg } from "components/Modal/Modal"
import { GalleryItem, ImageGalleryItemImage } from "./ImageGalleryItem.styled"


export class ImageGalleryItem extends Component {
  state = {
  isModalOpen: false,
}

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const  {imgUrl,imgLarge,tags} = this.props;

     return (   
    <GalleryItem className="gallery-item">
      <ImageGalleryItemImage onClick={this.openModal} src={imgUrl} alt={tags} width="320" />
         <ModalImg
           largeUrl={imgLarge}
           isModalOpen={this.state.isModalOpen}
           onClose={this.closeModal} />
    </GalleryItem>        
    )
  } 
}
