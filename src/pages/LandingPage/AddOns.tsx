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
    name: string
    label:keyof checkOnProps
    feature: string
    price: string
    formData: formDataProps
    setFormData: (data: formDataProps) => void
}


export default function AddOns(props:Props){
    const{name,feature,price, label, formData} = props

    const handleCheck = () =>{
        const newFormData = {...formData}
    }
 
    return(
         <div className=" flex items-center border gap-4 border-blue-900 rounded-lg p-4 justify-start">
            <input 
                className=" w-4 h-4" 
                type="checkbox" 
                onChange={(e)=>{handleCheck()}}
            />
            <span className=" flex flex-col">
                <span className=" text-[#000080] font-semibold">
                    {name}
                </span>
                <span className=" text-[#9699ab]">
                    {feature}
                </span>
            </span>
            <span className=" absolute right-4 text-blue-800">
                {price}
            </span>
        </div>
    )
}