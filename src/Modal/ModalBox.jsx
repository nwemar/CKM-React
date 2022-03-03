import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../style/Modal.scss'


const ModalBox = (props) => {
    const { DetailModalopen, handleClose } = props;

    return (
        <>
            <Modal
                open={DetailModalopen}
                onClose={handleClose}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                {props.children}
            </Modal>

        </>
    )
}

export default ModalBox