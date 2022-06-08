import React, { useState } from 'react'
import './linkinput.css'
export default function LinkInput({ img, baseUri, updateLink }) {
    return (
        <div className='linkinput'>
            <img src={require(`../../assets/${img}_logo.png`)} alt="" />
            <p>{baseUri}</p>
            <input type="text" placeholder='username' maxLength="30"
                 onChange={event => updateLink({
                    user : event.target.value,
                    baseUri,
                    img
                })} />
        </div>
    )
}
