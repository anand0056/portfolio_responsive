const SkillInfoBar = (props) => {
    return (
        <div>
            <h3 className="font-bold text-lg mb-2">{props.skillName}</h3>
            <div className="bg-[#bec7e6] rounded-lg w-[100%] h-5">
                <div className="bg-[#5d76c7] flex items-center justify-center rounded-lg h-full w-11/12">
                    {props.skillPercentage}
                </div>
            </div>
        </div>
    )
}

export default SkillInfoBar