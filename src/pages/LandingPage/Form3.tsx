import AddOns from "./AddOns"
import {addOnsData} from "../../data"

interface formDataProps{
    name: string
    email: string
    phone: string
    plan: string
    addOns: string
    checkOns: checkOnProps

}

interface checkOnProps{
    onlineService: boolean
    largerStorage: boolean
    customizableProfile: boolean
}


interface Props{
    formData: TotalFormData
    setFormData: React.Dispatch<React.SetStateAction<TotalFormData>>
}

export default function Form3({formData, setFormData}: Props){
    return(
        <div className="relative w-full  max-w-[500px] cursor-pointer">
            <h1 className=" text-3xl text-[#000080] font-bold mt-18">
                Pick add-ons
            </h1>
            <p className=" text-[#9699ab] mt-2 ">Add-ons help enhance your gaming experience.</p>
            <div className="flex flex-col gap-4 mt-12 mb-8">
                {
                    addOnsData.map((addOn, index) => {
                        return <AddOns 
                            key={index}
                            name={addOn.name} 
                            feature={addOn.feature}
                            price={addOn.price}
                            label={addOn.label}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    } )
                }
               
            </div> 
        </div>
    )
} 