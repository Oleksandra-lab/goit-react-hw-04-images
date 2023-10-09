import { useState, useEffect } from 'react';

import { StyledApp } from './App.styled';
import {Blocks} from 'react-loader-spinner'
import { getImages } from 'Services/getImages';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Alert } from './Alert/Alert.styled';

 export function App () {
  
    const [images, setImages] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalImg, setModalImg] = useState('');

    useEffect(()=> {
      if(!query) {
          return
          }
          const fetchAllImages = async () => {
            try {
              const { hits, totalHits } = await getImages(query, page);
              
                setImages(prevImages => [...prevImages, ...hits]);
                setTotalResults(totalHits);              
            } catch (error) {
              setError(error.message);
            }
          };

          fetchAllImages();
    },[query, page])
  
  const onHandleSubmit = value => {
      setQuery(value);
      setImages([]);
      setTotalResults(0);
      setPage(1);
      setIsLoading(false);
      setError(null);
  };

  const onLoadMoreClick = () => {
   setPage (page + 1);
  };

  const onToggleModal = largeImage => {
    setIsOpenModal(true);
     setModalImg(largeImage);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
     setModalImg('');
  };

    return (
      <StyledApp>
        <Searchbar onFormSubmit={onHandleSubmit} />
        {error && (
          <Alert textAlign="center">Sorry. There are some error {error} ... 😭</Alert>
        )}
        <ImageGallery images={images} onToggleModal={onToggleModal} />
        {images.length < totalResults && (
          <Button onClick={onLoadMoreClick}>Load more</Button>
        )}
        {isOpenModal && (
          <Modal modalImg={modalImg} onCloseModal={onCloseModal} />
        )}
        {isLoading && (
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
