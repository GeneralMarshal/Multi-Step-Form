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
    const [currentStep, setCurrentStep] = useState(3)
    const [errors, setErrors] = useState({
        name:"",
        email:"",
        phone:"",
        plan: "",
        addOns:"",
        
    })
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        plan: "",
        addOns:"",
        checkOns:{
            onlineService: false,
            largerStorage: false,
            customizableProfile: false,
        }

    })
    const [isYearly, setIsYearly] = useState(false)
    const stepArray = ["your info", "select plan", "add-ons", "summary"]
    const handleNext = () => {
        validate()
    
    }
    const validate = () => {
        let errorObject = {...errors}
        !formData.name ? errorObject.name = "This field is required" : errorObject.name = "";
        !formData.email ? errorObject.email = "This field is required" : errorObject.email = "";
        !formData.phone ? errorObject.phone = "This field is required" : errorObject.phone = "";
        !formData.plan ? errorObject.plan = "Please select a plan" : errorObject.plan = "";
        
        setErrors(errorObject)

        if (currentStep === 1){
        setErrors(errorObject);
            !errorObject.name && !errorObject.email && !errorObject.phone ? setCurrentStep(currentStep + 1) : setErrors(errorObject);
        };
        if (currentStep === 2){
            !errorObject.plan ? setCurrentStep(currentStep + 1) : setErrors(errorObject)
        }
        

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
                {currentStep === 1 && <Form1 formData={formData} setFormData={setFormData} errors={errors}/>}
                {currentStep === 2 && <Form2 formData={formData} setFormData={setFormData} errors={errors} isYearly={isYearly} setIsYearly={setIsYearly}/>}
                {currentStep === 3 && <Form3  formData={formData} setFormData={setFormData}/>}
                {currentStep === 4 && <Final/>}
                {currentStep === 5 && <Modal/>}

                <span className={`absolute ${currentStep === stepArray.length + 1? "hidden" : ""} max-w-[500px] bottom-0 flex justify-end w-full`} >
                    { currentStep === 1 ? "" :
                        <Button stylesClass="absolute left-0 py-4 px-6 font-semibold  text-[#000080] rounded-md cursor-pointer" >
                            go Back
                        </Button>
                    }
                    
                    <Button 
                        stylesClass="py-4 px-6 font-semibold  bg-[#000080] text-[#ffffff] rounded-md cursor-pointer"    
                        onClick={()=>handleNext()}
                    >
                        {currentStep === stepArray.length ? "Confirm" : "Next Step"}
                    </Button>
                </span>

            </div>
        </div>
    )
}