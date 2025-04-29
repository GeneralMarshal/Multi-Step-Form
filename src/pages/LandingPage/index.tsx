import VerticalSteps from "../../components/VerticalSteps"
import { Button } from "../../components/Button"
import Form1 from "./Form1"
import Form2 from "./Form2"
import Form3 from "./Form3"
import Final from "./Final"
import Modal from "./Modal"

import { useState } from "react"


// import { useState } from "react"

export default function LandingPage(){
    // An array containing the names of the pages

    const stepArray = ["your info", "select plan", "add-ons", "summary"]

    const [currentStep, setCurrentStep] = useState(2)
    const [totalFormData, setTotalFormData] = useState<TotalFormData>({
        name: "",
        email: "",
        phone: "",
        plan: "arcade",
        duration:"monthly",
        addOns:{
            "online service": false,
            "larger storage": false,
            "customizable profile": false
        }
    })
    

    const [totalErrors, setTotalErrors] = useState<TotalErrors>({
        name: "",
        email: "",
        phone: ""
    })

    const inputProps = {totalFormData, setTotalFormData}
    const errorProps = {totalErrors, setTotalErrors}
    
    function errorValidation(){
        let newErrors={...totalErrors}
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        // form 1 error validation
        if (currentStep === 1){
            totalFormData.name ? newErrors.name = "" : newErrors.name = "name is required"
            totalFormData.email && totalFormData.email.match(pattern)  ? newErrors.email = "" : newErrors.email = "this email is invalid"
            totalFormData.phone ? newErrors.phone = "" : newErrors.phone = "phone number is required"
            
            if( !newErrors.name && !newErrors.email && !newErrors.phone){
                setCurrentStep(2)
            } else{
                alert("Please complete the form")
                setTotalErrors((prev)=>{ return {...prev, ...newErrors}})
            }
        }
            
        
        // form 2 error validation
        if (currentStep === 2){
            setCurrentStep(3)
        }
    }
    function handlePrev(){
        if(currentStep === 2){
            setCurrentStep(1)
        }
    }
    function handleSubmit(){
        errorValidation()
        

    }

    return(
        <div className="flex w-full h-full p-6">
            <div className="relative flex-[35] w-full h-full rounded-3xl overflow-hidden ">

                <img 
                    src="/bg/bg-sidebar-desktop.svg" 
                    alt="" 
                    className="absolute object-cover object-bottom min-w-full min-h-full"
                />

                <VerticalSteps stepArray={stepArray}/>
            </div>
            <div className=" relative flex  justify-center flex-[65%] w-full h-full ">
                {
                    currentStep === 1 && <Form1 inputProps={inputProps} errorProps={errorProps} />
                }
                {
                    currentStep === 2 && <Form2 inputProps={inputProps} />
                }
                {
                    currentStep === 3 && <Form3 inputProps={inputProps} />
                }
                <span className={`absolute ${currentStep === stepArray.length + 1? "hidden" : ""} max-w-[500px] bottom-0 flex justify-end w-full`} >
                    { currentStep === 1 ? "" :
                        <Button stylesClass="absolute left-0 py-4 px-6 font-semibold  text-[#000080] rounded-md cursor-pointer" 
                        onClick={
                            () => handlePrev()
                        }
                        >
                            go Back
                        </Button>
                    }
                    
                    <Button 
                        stylesClass="py-4 px-6 font-semibold  bg-[#000080] text-[#ffffff] rounded-md cursor-pointer" 
                        onClick={
                            () => handleSubmit()
                        }   
                    >
                        {currentStep === stepArray.length ? "Confirm" : "Next Step"}
                    </Button>
                </span>

            </div>
        </div>
    )
}