import React from 'react'
import ImageComponent from './imageComponent';
import briefcase from "../assets/icons/briefcase.svg";

const InfoBar = (props) => {
    return (
        <div className="w-full flex h-10 m-2">
            <div className='h-full w-1/12'>
                <ImageComponent
                    imgSrc={briefcase}
                    imgAlt="Profession"
                />
            </div>
            <h3 className='px-2 flex items-center text-center'>{props.infoText}</h3>
        </div>
    )
}

export default InfoBar
