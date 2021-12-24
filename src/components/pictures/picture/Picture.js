import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Picture = ({ picture, deleteBtn }) => {
    return (
        <div>
            <div>
            <img src={picture.img_url} alt="" height="500rem" width="500rem"/><FaTimes style={{cursor: 'pointer'}} onClick={() => deleteBtn(picture.id)}/>
            </div>
        </div>
    )
}

export default Picture
