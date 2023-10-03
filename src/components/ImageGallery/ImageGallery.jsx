import {StyledList} from './ImageGallery.styled'
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images, onToggleModal}) => {
  
    return (
      <StyledList>
        {images.map(({id, webformatURL, largeImageURL}) => {
          return (
            <GalleryItem onToggleModal={onToggleModal} key={id} id ={id} smallImg={webformatURL} largeImg={largeImageURL}/>
          )
        })}
        <li></li>
      </StyledList>
    );
  
}
