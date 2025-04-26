import { Switch } from '@headlessui/react'
import { useState } from "react"
import Card from "./Card"
import { cardData } from '../../data'

interface formDataProps{
    name: string
    email: string
    phone: string
    plan: string
    addOns: string
}

interface errorsProps{
    name: string
    email: string
    phone: string
    plan: string
    addOns: string
}
interface Props{
    errors: errorsProps
    formData: formDataProps
    isYearly: boolean
    setIsYearly: (data: boolean) => void
    setFormData: (data: formDataProps) => void
}

export default function Form2({formData,setFormData,errors, isYearly, setIsYearly}:Props){
    
    return(
        <div className="relative w-full max-w-[500px]">
            <h1 className=" text-3xl font-bold mt-18">
                Select your plan
            </h1>
            <p className=" text-[#9699ab] mt-2 ">You have the option of monthly or yearly billing.</p>
            <div className="flex flex-wrap justify-between mt-12 mb-8">
                <p className=' w-full text-end text-xs text-red-500 font-semibold mb-1'>{errors.plan}</p>
                {
                    cardData.map((card, index)=>{
                        return <Card 
                            key={index}
                	        name={card.name} 
                	        icon={card.icon}
                	        pricePerMonth={card.pricePerMonth}
                	        pricePerYear={card.pricePerYear}
                	        setFormData={setFormData} 
                	        formData={formData}
                            isYearly={isYearly}
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