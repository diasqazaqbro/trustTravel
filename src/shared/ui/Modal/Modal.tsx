import React, { FC, ReactNode } from 'react'
import './Modal.scss'

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
    return (
        <div className={`${active ? 'active__modal' : 'modal'}`} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}