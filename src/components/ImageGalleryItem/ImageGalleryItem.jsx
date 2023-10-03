import {StyledGalleryItem, StyledGalleryImg} from './ImageGalleryItem.styled'

export const GalleryItem =({smallImg, id, largeImg, onToggleModal}) => {
  
    return (
      <StyledGalleryItem>
        <StyledGalleryImg onClick={() => onToggleModal(largeImg)}  src={smallImg} alt={id} />
      </StyledGalleryItem>
    );
  
}
