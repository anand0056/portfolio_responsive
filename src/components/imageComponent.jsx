const ImageComponent = (props) => {
    return (
        <div className='bg-slate-100 dark:bg-black dark:text-white w-full h-full justify-center'>
            <img src={props.imgSrc} alt={props.imgAlt} className='bg-transparent w-full h-full' />
        </div>
    )
}

export default ImageComponent