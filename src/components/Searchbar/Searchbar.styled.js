import styled from 'styled-components'

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 0;
  padding: 0;
  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
  /* background-size: 40%; */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover{
    opacity: 1;
  }
`;

export const SearchFormBtnLabel = styled.span`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;;
  /* width: 50px; */
  /* height: 50px; */
  color: black;
  padding: 0;
  overflow: hidden;
  /* clip: rect(0, 0, 0, 0); */
  white-space: nowrap;
  /* clip-path: inset(50%); */
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  padding: 5px;
  /* border: none; */
  /* outline: none; */
  padding-left: 4px;
  padding-right: 4px;
`;