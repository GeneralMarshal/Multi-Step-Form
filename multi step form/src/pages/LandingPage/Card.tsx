interface Props {
    icon: string
    name: string
    price: string
}

export default function Card( props: Props){
    const {icon, name, price} = props
    return(
         <div className=" flex flex-col justify-between w-[130px] h-[150px] p-4 border border-solid border-[#9699ab] rounded-lg bg-[#f0f5ff] ">
            <img className=" w-[40px]" src={icon} alt="" />
            <span className="flex flex-col">
                <span className=" text-[#000080] text-md font-semibold">
                    {name}
                </span>
                <span className=" text-sm  text-[#9699ab]">
                    {price}
                </span>
            </span>
        </div>
    )
}