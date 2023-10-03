import { Component } from 'react';

import {
  StyledHeader,
  StyledSearchForm,
  StyledStyledSearchFormBtn,
  StyledStyledSearchFormInput,
} from './Searchbar.styled.jsx';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onInputChange = (evt) => {
    this.setState({query: evt.target.value})


  };

  onHandleSubmit = (evt) =>{
    evt.preventDefault();
    this.props.onFormSubmit(this.state.query)
    this.setState({query: ''})
  }
  render() {
  
    return (
      <StyledHeader>
        <StyledSearchForm onSubmit={this.onHandleSubmit}>
          <StyledStyledSearchFormBtn type="submit">
            <span>Search</span>
          </StyledStyledSearchFormBtn>

          <StyledStyledSearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.onInputChange}
          />
        </StyledSearchForm>
      </StyledHeader>
    );
  }
}
