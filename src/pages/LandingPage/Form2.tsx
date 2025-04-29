import { Switch } from '@headlessui/react'
import Card from "./Card"
import { cardData } from '../../data'

interface Props{
    inputProps: InputProps
}

export default function Form2({inputProps}:Props){
    const {totalFormData, setTotalFormData} = inputProps


    // these two const are used as parameters for the icon component
    const isYearly = totalFormData.duration === "monthly" ? false : true
    const setIsYearly = () => {
        setTotalFormData((prev) => {return {
            ...prev, duration: (prev.duration === "monthly" ? "yearly" : "monthly")
        }})
    }
    return(
        <div className="relative w-full max-w-[500px]">
            <h1 className=" text-3xl font-bold mt-18">
                Select your plan
            </h1>
            <p className=" text-[#9699ab] mt-2 ">You have the option of monthly or yearly billing.</p>
            <div className="flex flex-wrap justify-between mt-12 mb-8">
                
                {
                    cardData.map((card, index)=>{
                        return <Card 
                            key={index}
                	        name={card.name}
                	        icon={card.icon}
                	        pricePerMonth={card.pricePerMonth}
                	        pricePerYear={card.pricePerYear}
                            inputProps={inputProps}
                        />
                    })
                }
            </div>
            <div className="flex justify-center items-center font-semibold gap-2 text-md w-full bg-[#f0f5ff] text-[#9699ab] h-12 rounded-lg">
                <span>
                    Monthly
                </span>
                <Switch
                    checked={isYearly}
                    onChange={setIsYearly}
                    className="group inline-flex h-5 w-9 items-center rounded-full bg-[#000080] transition data-[checked]:bg-gray-200"
                    >
                    <span className="size-3 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
                <span>
                    Yearly
                </span>
            </div>
        </div>
    )
}