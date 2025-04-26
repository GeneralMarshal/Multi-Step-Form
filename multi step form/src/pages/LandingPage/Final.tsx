import { Button } from "../../components/Button"

export default function Final(){
    return(
        <div className="relative w-full max-w-[500px]">
            <h1 className=" text-3xl text-[#02075D] font-bold mt-18">
                Finishing  up
            </h1>
            <p className=" text-[#9699ab] mt-2 ">Double-check everything looks OK before confirming.</p>
                <div className="flex flex-col bg-[#f8f8fa] mt-12 rounded-lg p-6">
                <div className="flex justify-between">
                    <span className=" flex flex-col">
                        <span className="text-[#02075D] text-md font-semibold">Arcade (Monthly)</span>
                        <span className=" text-sm underline text-[#9699ab] font-semibold cursor-pointer">Change</span>
                    </span>
                    <span className=" text-[#02075D] text-md font-bold">
                        $9/mo
                    </span>
                </div>
                {/* this is the divider line */}
                <span className=" h-[1px] w-full bg-[#caccda] my-6" ></span>
                <div className=" flex flex-col gap-2">
                    <span className=" flex justify-between">
                        <span className="text-sm  text-[#9699ab] " >Online Service</span>
                        <span className=" text-sm text-[#02075D] font-semibold">+$1/mo</span>
                    </span>
                    <span className=" flex justify-between">
                        <span className="text-sm text-[#9699ab] ">Larger Storage</span>
                        <span className=" text-sm text-[#02075D] font-semibold">+$1/mo</span>
                    </span>
                </div>
            </div>
            <span className=" flex justify-between p-6">
                <span className="text-sm text-[#9699ab]" >Total (per month)</span>
                <span className=" text-lg font-bold text-blue-800">+$12/mo</span>
            </span>
            
        </div>
    )
}