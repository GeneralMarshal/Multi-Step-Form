import { capitalize } from "../../utils/myFunctions"
import { ChangeEvent } from "react"
interface Props{
    inputProps: InputProps
    name: keyof AddOns
    description: string
    pricePerMonth: number
    pricePerYear: number

}

export default function AddOns({inputProps, name, description, pricePerMonth, pricePerYear}:Props){
    const {totalFormData, setTotalFormData} = inputProps

    function handleCheck(e: ChangeEvent<HTMLInputElement>){
        const isChecked = e.target.checked
        const isName = e.target.name

        setTotalFormData((prev) => {
            return {...prev, addOns:{ ...prev.addOns, [isName]: isChecked}}
        })

        console.log(totalFormData)
    }
 
    return(
         <div className=" flex items-center border gap-4 border-blue-900 rounded-lg p-4 justify-start">
            <input 
                className=" w-4 h-4" 
                type="checkbox" 
                onChange={ (e)=>handleCheck(e)}
                name={name}
            />
            <span className=" flex flex-col">
                <span className=" text-[#000080] font-semibold">
                    { capitalize(name)}
                </span>
                <span className=" text-[#9699ab]">
                    {description}
                </span>
            </span>
            <span className=" absolute right-4 text-blue-800 ">
                ${
                  totalFormData.duration === "monthly" ?  pricePerMonth + '/mo' : pricePerYear + "/yr"
                }
            </span>
        </div>
    )
}