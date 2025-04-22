import AddOns from "./AddOns"
import { Button } from "../../components/Button"


export default function Form3(){
    return(
        <div className="relative w-full max-w-[500px]">
            <h1 className=" text-3xl font-bold mt-18">
                Pick add-ons
            </h1>
            <p className=" text-[#9699ab] mt-2 ">Add-ons help enhance your gaming experience.</p>
            <div className="flex flex-col gap-4 mt-12 mb-8">
               <AddOns name="Online Service" feature="Access to multiplayer games" price="+$1/mo"/>
               <AddOns name="Larger Storage" feature="Extra 1TB of cloud save" price="+$2/mo"/>
               <AddOns name="Customizable Profile" feature="Custom theme on your profile" price="+$2/mo"/>
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