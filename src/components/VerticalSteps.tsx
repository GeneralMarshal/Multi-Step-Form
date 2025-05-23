interface Props{
    stepArray: string[]
}

export default function VerticalSteps({stepArray}:Props){
    

    return(
        <div className="flex flex-col gap-8 p-12">
            {
                stepArray.map((step,index) => {
                    return(
                        <div key={index} className="relative flex gap-4">
                            <span className=" w-10 h-10 flex items-center justify-center rounded-[50%] border border-[#ffffff] bg-transparent text-lg font-semibold text-[#ffffff]">
                                {index + 1}
                            </span>
                            <span className="flex flex-col h-full justify-center ">
                                <span className="text-[#bbb8b8] text-xs font-extralight">
                                    STEP {index + 1}
                                </span>
                                <span className="text-[#ffffff] font-semibold tracking-widest uppercase" >
                                    {step}
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        
        </div>
       
    )
}