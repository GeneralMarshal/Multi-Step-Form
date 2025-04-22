import Input from "../../components/Input"
import { Button } from "../../components/Button"

export default function Form1(){
    return(
        <form className="relative w-full max-w-[500px]">
            <h1 className=" text-3xl font-bold mt-18">
                Personal Info
            </h1>
            <p className=" text-[#9699ab] mt-2 ">Please provide your name, email address, and phone number.</p>
                
            <span className="flex flex-col gap-1 mt-12 ">
                <label htmlFor="name" className=" text-sm">Name</label>
                <Input type="text" styleClass="py-3 px-2.5" placeholder="Eren jeager" />
            </span>
            <span className="flex flex-col gap-1 mt-4 ">
                <label htmlFor="email" className=" text-sm">Email Address</label>
                <Input type="email" styleClass="py-3 px-2.5" placeholder="erenyeager@gmail.com" />
            </span><span className="flex flex-col gap-1 mt-4 ">
                <label htmlFor="phoneNumber" className=" text-sm">Phone Number</label>
                <Input type="text" styleClass="py-3 px-2.5" placeholder="08085590435" />
            </span>
            <span className="absolute bottom-0 flex w-full justify-end">
                <Button stylesClass="py-4 px-6  bg-blue-800 text-[#000080] rounded-md cursor-pointer" >
                    Next Step
                </Button>
            </span>
           
        </form>
    )
}