interface Props{
    name: string
    feature: string
    price: string
}


export default function AddOns(props:Props){
    const{name,feature,price} = props
    return(
         <div className=" flex items-center border gap-4 border-blue-900 rounded-lg p-4 justify-start">
            <input className=" w-4 h-4" type="checkbox" />
            <span className=" flex flex-col">
                <span className=" text-[#000080] font-semibold">
                    {name}
                </span>
                <span className=" text-[#9699ab]">
                    {feature}
                </span>
            </span>
            <span className=" absolute right-4 text-blue-800">
                {price}
            </span>
        </div>
    )
}