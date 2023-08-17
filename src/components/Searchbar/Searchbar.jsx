import { SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from "components/Searchbar/Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
  return (
   <header className="searchbar">
      <SearchForm className="form" onSubmit={onSubmit}>
        <SearchFormBtn type="submit" className="button"  >
          <SearchFormBtnLabel className="button-label">Search</SearchFormBtnLabel>
        </SearchFormBtn>
        <SearchFormInput   
          name="query"      
          className="input"
          type="text"
          // autocomplete="off"
          // autofocus          
          placeholder="Search images and photos"
        />         
      </SearchForm>
    </header> 
  )
};
