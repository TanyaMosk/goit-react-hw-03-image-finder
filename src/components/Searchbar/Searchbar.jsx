import { SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from "components/Searchbar/Searchbar.styled";
import {GrSearch} from "react-icons/gr"

export const Searchbar = ({onSubmit}) => {
  return (
   <header className="searchbar">
      <SearchForm className="form" onSubmit={onSubmit}>
        <SearchFormBtn type="submit" className="button"  >         
          <SearchFormBtnLabel className="button-label">
            <GrSearch/>
          </SearchFormBtnLabel>
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
