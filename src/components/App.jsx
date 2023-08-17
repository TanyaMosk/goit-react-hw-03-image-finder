
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "api";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./App.styled";
import { Button } from "./Button/Button";

export class App extends Component{
  state = {
    query:'',
    images: [],
    page: 1,
  }   
  
  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery || prevState.page !== this.state.page) {
      // const images = await fetchImages(nextQuery, this.state.page);
     
      const {hits} = await fetchImages(nextQuery, this.state.page);
      const images = hits.map(
        ({ id, webformatURL, tags, largeImageURL }) => ({
          id,
          webformatURL,
          tags,
          largeImageURL,
        })
      );      
      this.setState(prevState => ({
        images: [...prevState.images, ...images]
      }))      
    };     
  }

  changeQuery = (newQuery) => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
   };

  setImage = () => { };

  handleLoadMore = () => { 
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };  

  render() {    
   
    return (
    <Container>
      <Searchbar onSubmit={(evt) => {
        evt.preventDefault()
        this.changeQuery(evt.target.elements.query.value) 
        evt.target.reset()    
        }} />         
        <ImageGallery images={this.state.images} />  
        <Button onClick={this.handleLoadMore}/>      
      <GlobalStyle/>  
    </Container>
    )
  }
}  
  
  
  
  // indexOf , slice
// query: `${Date.now()} /${newQuery}`

// eslint-disable-next-line
{/* <header className="searchbar">
      <form className="form" onSubmit={(evt) => {
        evt.preventDefault()
        this.changeQuery(evt.target.elements.query.value) 
        evt.target.reset()    
          }}>
            <button type="submit" className="button"  >
          <span className="button-label">Search</span>
        </button>
        <input   
          name="query"      
          className="input"
          type="text"
          // autocomplete="off"
          // autofocus          
          placeholder="Search images and photos"
        />         
      </form>
      </header> */}