import { capitalize } from "../../utils/myFunctions"
interface Props{
    inputProps: InputProps
    name: string
    icon: string
    pricePerMonth: number
    pricePerYear: number
}

export default function Card({inputProps, name, icon, pricePerMonth, pricePerYear}:Props){
    const {totalFormData, setTotalFormData} = inputProps
    
    
    return(
         <div 
            className={`flex md:flex-col md:justify-between w-full md:w-[130px] md:h-[150px] p-4 gap-3 border border-solid rounded-lg cursor-pointer ${totalFormData.plan === name ? "border-blue-800 bg-[#f0f0f3]":"border-[#9699ab] bg-[#ffffff]"} `} 
            onClick={()=>{
                setTotalFormData((prevData) => {
                    return{...prevData, plan: name as Plan }
                })
                console.log(totalFormData)
               
            }}
        >
            <img className=" w-[40px]" src={icon} alt="" />
            <span className="flex flex-col">
                <span className=" text-[#000080] text-md font-semibold">
                    {capitalize(name)}
                </span>
                {/* teneray operator for if the suscription is monthly or yearly */}
                {
                    totalFormData.duration === "monthly" ?   
                    <span className=" text-xs  text-[#9699ab]">
                        ${pricePerMonth}/mo
                    </span> :
                    <span className=" flex flex-col text-xs  text-[#9699ab]">
                        ${pricePerYear}/yr
                        <span className=" text-xs text-[#000080]">
                            2 months free
                        </span>
                    </span>
                }
               
                
            </span>
        </div>
    )
}