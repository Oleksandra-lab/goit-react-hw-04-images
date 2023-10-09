import { useState } from 'react';

import {
  StyledHeader,
  StyledSearchForm,
  StyledStyledSearchFormBtn,
  StyledStyledSearchFormInput,
} from './Searchbar.styled.jsx';

export function Searchbar ({onFormSubmit}) {
 const [query, setQuery] = useState('')

  const onInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const onHandleSubmit = (evt) =>{
    evt.preventDefault();
    onFormSubmit(query);
    setQuery('');
  }

  return (
      <StyledHeader>
        <StyledSearchForm onSubmit={onHandleSubmit}>
          <StyledStyledSearchFormBtn type="submit">
            <span>Search</span>
          </StyledStyledSearchFormBtn>

          <StyledStyledSearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={onInputChange}
          />
        </StyledSearchForm>
      </StyledHeader>
    );
}
