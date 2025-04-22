import VerticalSteps from "../../components/VerticalSteps"
import { Button } from "../../components/Button"
import Form1 from "./Form1"
import Form2 from "./Form2"
import Form3 from "./Form3"
import Final from "./Final"


// import { useState } from "react"

export default function LandingPage(){
    // const [currentStep. setCurrentStep] = useState(1)
    return(
        <div className="flex w-full h-full p-6">
            <div className="relative flex-[35] w-full h-full rounded-3xl overflow-hidden ">

                <img 
                    src="/bg/bg-sidebar-desktop.svg" 
                    alt="" 
                    className="absolute object-cover object-bottom min-w-full min-h-full"
                />

                <VerticalSteps/>
            </div>
            <div className=" relative flex  justify-center flex-[65%] w-full h-full ">
                <Final/>
            </div>
        </div>
    )
}