import { Button } from "../../components/Button"
import { Switch } from '@headlessui/react'
import { useState } from "react"
import Card from "./Card"

export default function Form2(){
    const [enabled, setEnabled] = useState(false)
    return(
        <div className="relative w-full max-w-[500px]">
            <h1 className=" text-3xl font-bold mt-18">
                Select your plan
            </h1>
            <p className=" text-[#9699ab] mt-2 ">You have the option of monthly or yearly billing.</p>
            <div className="flex justify-between mt-12 mb-8">
               <Card name="Arcade" icon="/icons/icon-arcade.svg" price="$9/mo"/>
               <Card name="Advanced" icon="/icons/icon-advanced.svg" price="$12/mo"/>
               <Card name="Pro" icon="/icons/icon-pro.svg" price="$15/mo"/>

            </div>
            <div className="flex justify-center items-center font-semibold gap-2 text-md w-full bg-[#f0f5ff] text-[#9699ab] h-12 rounded-lg">
                <span>
                    Monthly
                </span>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className="group inline-flex h-5 w-9 items-center rounded-full bg-[#000080] transition data-[checked]:bg-gray-200"
                    >
                    <span className="size-3 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
                <span>
                    Yearly
                </span>
            </div>

             <span className="absolute bottom-0 flex w-full justify-between">
                <Button stylesClass="py-4 px-6 font-semibold  text-[#000080] rounded-md cursor-pointer" >
                    Go Back
                </Button>
                <Button stylesClass="py-4 px-6 font-semibold bg-[#000080] text-[#ffffff] rounded-md cursor-pointer" >
                    Next Step
                </Button>
            </span>
        </div>
    )
}