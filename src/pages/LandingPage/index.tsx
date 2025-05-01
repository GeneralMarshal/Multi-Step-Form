import VerticalSteps from "../../components/VerticalSteps"
import { Button } from "../../components/Button"
import Form1 from "./Form1"
import Form2 from "./Form2"
import Form3 from "./Form3"
import Final from "./Final"
import Modal from "./Modal"

import { useEffect, useState } from "react"


// import { useState } from "react"

export default function LandingPage(){
    // An array containing the names of the pages

    const stepArray = ["your info", "select plan", "add-ons", "summary"]

    const [currentStep, setCurrentStep] = useState(1 )
    const [totalFormData, setTotalFormData] = useState<TotalFormData>({
        name: "",
        email: "",
        phone: "",
        plan: "arcade",
        duration:"yearly",
        addOns:{
            "online service": false,
            "larger storage": false,
            "customizable profile": false
        },
        totalCost:0
    })
    

    const [totalErrors, setTotalErrors] = useState<TotalErrors>({
        name: "",
        email: "",
        phone: ""
    })

    useEffect(()=>{
        const savedFormData = localStorage.getItem("totalFormData")
        if(savedFormData){
            setTotalFormData(JSON.parse(savedFormData))
        }
    }, [])


    const inputProps = {totalFormData, setTotalFormData}
    const errorProps = {totalErrors, setTotalErrors}
    
    function errorValidation(){
        let newErrors={...totalErrors}
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

        // form 1 error validation

        if (currentStep === 1){
            // name validation
            totalFormData.name ? newErrors.name = "" : newErrors.name = "name is required"
            // email validation
            totalFormData.email && totalFormData.email.match(pattern)  ? newErrors.email = "" : newErrors.email = "this email is invalid"
            // phone number validation
            totalFormData.phone ? newErrors.phone = "" : newErrors.phone = "phone number is required"
            
            if( !newErrors.name && !newErrors.email && !newErrors.phone){
                setCurrentStep(2)
            } else{
                setTotalErrors((prev)=>{ return {...prev, ...newErrors}})
            }
        }
            
        
        
    }

    function handlePrev(){
        if(currentStep > 1){
            setCurrentStep( prev => prev - 1 )
        }
        
    }

    function handleSubmit(){
        errorValidation()
        if (currentStep === 2){
            setCurrentStep(3)
        }
        if (currentStep === 3){
            setCurrentStep(4)
        }
        if(currentStep === 4 ){
            setCurrentStep(5)
            localStorage.setItem("totalFormData", JSON.stringify(totalFormData))
        }
        

    }

    return(
        <div className="relative flex bg-blue-100 md:bg-white flex-col md:flex-row w-full h-full md:p-6">
            <div className="relative  md:flex-[35] w-full h-[200px]  md:h-full md:rounded-3xl overflow-hidden ">

                <picture>
                    <source srcSet="/bg/bg-sidebar-mobile.svg" media="(max-width: 1024px)" />
                    <img 
                    src="/bg/bg-sidebar-desktop.svg" 
                    alt="" 
                    className="absolute object-cover min-w-full min-h-full"
                />
                </picture>
                

                <VerticalSteps stepArray={stepArray} currentStep={currentStep}/>
            </div>
            <div className="absolute md:relative flex  justify-center md:flex-[65%] w-[350px] sm:w-[400px] md:w-full h-auto md:h-full bg-white left-[50%] md:left-0 top-[15%] md:top-0 translate-x-[-50%] md:translate-x-0 rounded-xl md:rounded-0 p-6">
                {
                    currentStep === 1 && <Form1 inputProps={inputProps} errorProps={errorProps} />
                }
                {
                    currentStep === 2 && <Form2 inputProps={inputProps} />
                }
                {
                    currentStep === 3 && <Form3 inputProps={inputProps} />
                }
                {
                    currentStep === 4 && <Final inputProps={inputProps} />
                }
                {
                    currentStep === 5 && <Modal />
                }
                

            </div>
            <span className={`flex justify-center  absolute ${currentStep === stepArray.length + 1? "hidden" : ""} bottom-0  p-6  w-full md:w-[65%] md:right-0`} >
                <span className="flex justify-between w-[350px] sm:w-[400px] md:w-[500px] md:right-0">
                    
                    <Button stylesClass=" left-0   py-4 px-6 font-semibold  text-[#000080] rounded-md cursor-pointer" 
                        onClick={
                            () => handlePrev()
                        }
                        >
                            { currentStep === 1 ? "" : "go back"
                            
                            }
                    </Button>
                                        
                    <Button 
                        stylesClass=" py-4 px-6 font-semibold  bg-[#000080] text-[#ffffff] rounded-md cursor-pointer" 
                        onClick={
                            () => handleSubmit()
                        }   
                    >
                        {currentStep === stepArray.length ? "Confirm" : "Next Step"}
                    </Button>
                </span>    
            </span>
        </div>
    )
}