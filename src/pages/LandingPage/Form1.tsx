import Input from "../../components/Input"
interface formDataProps{
    name: string
    email: string
    phone: string
    plan: string
    addOns: string
}

interface errorsProps{
    name: string
    email: string
    phone: string
    plan: string
    addOns: string
}
interface Props{
    errors: errorsProps
    formData: TotalFormData
    setFormData: React.Dispatch<React.SetStateAction<TotalFormData>>
}


export default function Form1({formData, setFormData, errors}:Props){
    return(
        <form className="relative w-full max-w-[500px]">
            <h1 className=" text-3xl font-bold mt-18">
                Personal Info
            </h1>
            <p className=" text-[#9699ab] mt-2 ">Please provide your name, email address, and phone number.</p>
                
            <span className="flex flex-col gap-1 mt-12 ">
                <span className=" flex justify-between ">
                    <label htmlFor="name" className=" text-sm">Name</label>
                    <span className=" text-red-500 text-xs font-semibold">{errors.name}</span>
                    
                </span>
                <Input 
                    name="name" 
                    type="text" 
                    styleClass="py-3 px-2.5" 
                    placeholder="Eren jeager" 
                    value={formData.name}
                    onChange={ (e)=>{
                        setFormData({...formData, name: e.target.value})
                    }}
                />
            </span>
            <span className="flex flex-col gap-1 mt-4 ">
                <span className="flex justify-between">
                    <label htmlFor="email" className=" text-sm">Email Address</label>
                    <span className=" text-red-500 text-xs font-semibold">{errors.email}</span>
                </span>
                <Input 
                    name="email" 
                    type="email" 
                    styleClass="py-3 px-2.5" 
                    placeholder="erenyeager@gmail.com" 
                    value={formData.email}
                    onChange={
                        (e)=>{
                            setFormData({...formData, email: e.target.value})
                        }
                    }
                />
            </span><span className="flex flex-col gap-1 mt-4 ">
                <span className=" flex justify-between">
                    <label htmlFor="phoneNumber" className=" text-sm">Phone Number</label>
                    <span className=" text-red-500 text-xs font-semibold">{errors.phone}</span>
                </span>
                <Input 
                    name="phoneNumber" 
                    type="text" 
                    styleClass="py-3 px-2.5" 
                    placeholder="08085590435" 
                    value={formData.phone}
                    onChange={(e) => {
                        setFormData({...formData, phone: e.target.value})
                    }}
                />
            </span>
           
        </form>
    )
}