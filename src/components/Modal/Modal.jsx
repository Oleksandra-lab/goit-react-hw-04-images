import { useEffect } from 'react'
import {StyledModalOverlay, StyledModalContent} from './Modal.styled'

export function Modal ({modalImg, onCloseModal}) {

useEffect(() => { 
    const handleEscapeKey = evt => {
        if (evt.code === 'Escape') {
            onCloseModal()
        }
    }
     window.addEventListener('keydown', handleEscapeKey);
     return () => {
        window.removeEventListener('keydown', handleEscapeKey)
     }
}, [onCloseModal])
   
        return (
            <StyledModalOverlay>
                <StyledModalContent>
<img onClick={onCloseModal} src={modalImg} alt={modalImg} />
               </StyledModalContent>
            </StyledModalOverlay>
        )

}