import {StyledModalOverlay, StyledModalContent} from './Modal.styled'

export const Modal = ({modalImg, onCloseModal}) => {


   
        return (
            <StyledModalOverlay>
                <StyledModalContent>
<img onClick={onCloseModal} src={modalImg} alt={modalImg} />
               </StyledModalContent>
            </StyledModalOverlay>
        )

}