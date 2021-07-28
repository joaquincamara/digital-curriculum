import React  from 'react'
import theodenGif from '../../../assets/tenor.gif'

import './modal.scss'

export const Modal = ({onHandlerModal}) => {

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span onClick={() => onHandlerModal()} className="close">&times;</span>
                <img src={theodenGif} alt="Theoden Gif"/>
            </div>
        </div>)
}