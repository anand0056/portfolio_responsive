import briefcase from '../assets/icons/briefcase.svg'
const Experience = (props) => {
    return (
        <div className='pb-4'>
            <h3 className='font-extrabold text-xl pt-4 '>{props.workTitle}</h3>
            <div className='flex h-8'>
                <img src={briefcase} alt='calender' />
                <div className='pl-5 flex font-semibold text-lg content-center'>
                    <time className='text-blue-500'>March 2014</time>
                    <span>-</span>
                    <time className='text-blue-500'>June 2020</time>
                </div>
            </div>
            <p className='pt-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti provident modi animi voluptates, voluptatibus sed voluptatum vel nemo error tempora enim dolorem laudantium quidem totam.</p>
            <hr className='pt-4 text-black text-xl' />
        </div>
    )
}

export default Experience