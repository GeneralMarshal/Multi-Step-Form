interface formDataProps{
    name: string
    email: string
    phone: string
    plan: string
    addOns: string
}

interface Props {
    icon: string
    name: string
    pricePerMonth: string
    pricePerYear: string
    setFormData: (data:formDataProps)=>void
    formData: formDataProps
    isYearly: boolean
}

export default function Card( props: Props){
    const {icon, name, pricePerMonth, pricePerYear, setFormData, formData, isYearly} = props
    return(
         <div 
            className={`flex flex-col justify-between w-[130px] h-[150px] p-4 border border-solid rounded-lg cursor-pointer ${formData.plan === name ? "border-blue-800 bg-[#f0f0f3]":"border-[#9699ab] bg-[#ffffff]"} `} 
            onClick={()=>{
                setFormData({...formData, plan:name})
                console.log(formData)
            }}
        >
            <img className=" w-[40px]" src={icon} alt="" />
            <span className="flex flex-col">
                <span className=" text-[#000080] text-md font-semibold">
                    {name}
                </span>
                {
                    !isYearly ?   
                    <span className=" text-xs  text-[#9699ab]">
                        {pricePerMonth}
                    </span> :
                    <span className=" flex flex-col text-xs  text-[#9699ab]">
                        {pricePerYear}
                        <span className=" text-xs text-[#000080]">
                            2 months free
                        </span>
                    </span>
                }
               
                
            </span>
        </div>
    )
}