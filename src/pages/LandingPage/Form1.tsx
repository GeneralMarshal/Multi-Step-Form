import Input from "../../components/Input"

interface Props{
    inputProps: InputProps
    errorProps: ErrorProps
}

export default function Form1 ({inputProps, errorProps}:Props){
    const {totalFormData, setTotalFormData} = inputProps
    const {totalErrors, setTotalErrors} = errorProps
    return(
        <form className="relative flex flex-col w-full max-w-[500px] lg:max-w-[500px]">
            <h1 className=" text-3xl font-bold md:mt-18">
                Personal Info
            </h1>
            <p className=" text-[#9699ab] mt-2 ">Please provide your name, email address, and phone number.</p>
                
            <span className="flex flex-col gap-1 mt-12 ">

                <span className=" flex justify-between ">
                    <label htmlFor="name" className=" text-sm">Name</label>       
                    {totalErrors.name && <span className=" text-xs font-semibold text-red-500">{totalErrors.name}</span>  }       
                       
                </span>
                <Input 
                    id="name" 
                    type="text" 
                    styleClass="py-3 px-2.5" 
                    placeholder="Eren jeager" 
                    value={totalFormData.name}
                    onChange={
                        (e)=>{
                            setTotalFormData({...totalFormData, name: e.target.value})
                        }
                    }
                />
            </span>
            <span className="flex flex-col gap-1 mt-4 ">
                <span className="flex justify-between">
                    <label htmlFor="email" className=" text-sm">Email Address</label>
                    {totalErrors.email && <span className=" text-xs font-semibold text-red-500">{totalErrors.email}</span>  }  
                </span>
                <Input 
                    id="email" 
                    type="email" 
                    styleClass="py-3 px-2.5" 
                    placeholder="erenyeager@gmail.com"
                    value={totalFormData.email}
                    onChange={
                        (e) => {
                            setTotalFormData({...totalFormData, email: e.target.value})
                        }
                    }
                />
            </span><span className="flex flex-col gap-1 mt-4 ">
                <span className=" flex justify-between">
                    <label htmlFor="phoneNumber" className=" text-sm">Phone Number</label>
                     {totalErrors.phone && <span className=" text-xs font-semibold text-red-500">{totalErrors.phone}</span>  }  
                </span>
                <Input 
                    id="phoneNumber" 
                    type="text" 
                    styleClass="py-3 px-2.5" 
                    placeholder="08085590435" 
                    value={totalFormData.phone}
                    onChange={(e) => { setTotalFormData({...totalFormData, phone: e.target.value})}}
                />
            </span>
           
        </form>
    )
}