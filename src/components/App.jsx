import { Component } from 'react';

import { StyledApp } from './App.styled';
import {Blocks} from 'react-loader-spinner'
import { getImages } from 'Services/getImages';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    totalResults: 0,
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    isOpenModal: false,
    modalImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchAllImages();
    }
  }

  fetchAllImages = async () => {
    const { query, page } = this.state;
    try {
      const { hits, totalHits } = await getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalResults: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  onHandleSubmit = value => {
    this.setState({
      query: value,
      images: [],
      totalResults: 0,
      page: 1,
      isLoading: false,
      error: null,
    });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onToggleModal = largeImage => {
    this.setState({ isOpenModal: true, modalImg: largeImage });
  };

  onCloseModal = () => {
    this.setState({ isOpenModal: false, modalImg: '' });
  };
  render() {
    const { images, totalResults, isOpenModal, modalImg } = this.state;
    return (
      <StyledApp>
        <Searchbar onFormSubmit={this.onHandleSubmit} />
        <ImageGallery images={images} onToggleModal={this.onToggleModal} />
        {images.length < totalResults && (
          <Button onClick={this.onLoadMoreClick}>Load more</Button>
        )}
        {isOpenModal && (
          <Modal modalImg={modalImg} onCloseModal={this.onCloseModal} />
        )}
        {this.state.isLoading && (
          <div>
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          </div>
        )}
      </StyledApp>
    );
  }
}
