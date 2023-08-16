
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { fetchSearchesImages } from "api";

export class App extends Component{
  state = {
    query:'',
    images: [],
    page: 1,
  }   
  
  async componentDidMount() {
    const data = await fetchSearchesImages(this.state.query, this.state.page);
    console.log(data);
  }


  onSubmit = (newQuery) => {
    // evt.preventDefault();
    this.setState({
      query: newQuery
    })
    console.log(this.query);
    
  }


  render() {
    return (
      <>
        <Searchbar  />
        <ImageGallery>
         <ImageGalleryItem/>
         </ImageGallery>
      </>
    )
  }
}


