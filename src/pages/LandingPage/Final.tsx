import { useEffect } from "react"
import { addOnsData } from "../../data"
import { cardData } from "../../data"
import { capitalize } from "../../utils/myFunctions"
interface Props {
    inputProps: InputProps
}

export default function Final({inputProps }:Props){
    const {totalFormData, setTotalFormData} = inputProps

    const totalAddOns = totalFormData.addOns
    const userAddOns =  Object.entries(totalAddOns).filter(([key, value]) => value === true)

    const locatePLanObject = cardData.find((element) => element.name === totalFormData.plan)
    const priceForPlanPerMonth = locatePLanObject?.pricePerMonth
    const priceForPlanPerYear = locatePLanObject?.pricePerYear

    const capitalizedPlan = capitalize(totalFormData.plan)
    const capitalizedDuration = capitalize(totalFormData.duration)
    const suffix =  totalFormData.duration === "monthly" ? "/mo" : "/yr"



    useEffect(() =>{
        function calcTotalBill(){
        var totalBill = 0

        const userAddOnNames = userAddOns.map((object)=> object[0])
        const userAddOnObject = addOnsData.filter((object) => userAddOnNames.includes(object.name) )

        // this for each sums up all the addOn prices
        userAddOnObject.forEach((object) => {
            if(totalFormData.duration === "monthly"){
                totalBill = totalBill + object.pricePerMonth 
            }else{
                totalBill = totalBill + object.pricePerYear 
            }
        })

        // this sums the price for the plan 
        if (totalFormData.duration === "monthly"){
            // this if just to make sure priceForPlanPerMonth is defined
            if (priceForPlanPerMonth){
                totalBill += priceForPlanPerMonth
            } 
        }else{
            // this if just to make sure priceForPlanPerYear is defined
            if (priceForPlanPerYear){
                totalBill += priceForPlanPerYear
            } 
        }

    setTotalFormData((prev) => {return {...prev, totalCost: totalBill}}) 
        
    }
    calcTotalBill()
    }, [])
    
    


    return(
        <div className="relative w-full max-w-[500px]">
            <h1 className=" text-3xl text-[#02075D] font-bold md:mt-18">
                Finishing  up
            </h1>
            <p className=" text-[#9699ab] mt-2 ">Double-check everything looks OK before confirming.</p>
                <div className="flex flex-col bg-[#f8f8fa] mt-12 rounded-lg p-6">
                <div className="flex justify-between">
                    <span className=" flex flex-col">
                        <span className="text-[#02075D] text-md font-semibold">
                            {capitalizedPlan + " "}
                            ({capitalizedDuration})
                        </span>
                        <span className=" text-sm underline text-[#9699ab] font-semibold cursor-pointer">Change</span>
                    </span>
                    <span className=" text-[#02075D] text-md font-bold">
                        ${
                            totalFormData.duration === "monthly" ? priceForPlanPerMonth : priceForPlanPerYear
                        }
                        
                    </span>
                </div>
                {/* this is the divider line */}
                <span className=" h-[1px] w-full bg-[#caccda] my-6" ></span>
                <div className=" flex flex-col gap-2">
                    {
                        userAddOns.map((added)=>{          
                            const userAddOnObject = addOnsData.find((object) => object.name === added[0])
                            const perMonth = userAddOnObject?.pricePerMonth
                            const perYear = userAddOnObject?.pricePerYear

                            return <span className=" flex justify-between">
                                        <span className="text-sm  text-[#9699ab] " >{added[0]}</span>
                                        <span className=" text-sm text-[#02075D] font-semibold">
                                           ${
                                              (totalFormData.duration === "monthly" ? perMonth : perYear) + suffix 
                                           }     
                                        </span>
                                    </span>
                                            
                        })
                    }
                </div>
            </div>
            <span className=" flex justify-between p-6">
                <span className="text-sm text-[#9699ab]" >
                   Total (per {
                        totalFormData.duration === "monthly" ? "month"  : "year"
                    })
                </span>
                <span className=" text-lg font-bold text-blue-800">
                    +${totalFormData.totalCost + suffix}
                </span>
            </span>
            
        </div>
    )
}