interface TotalFormData{
    name:string
    email: string
    phone: string
    plan: Plan
    duration: Duration
    addOns: AddOns

}

interface TotalErrors{
    name: string
    email: string
    phone: string
}



type Plan = "arcade" | "advanced" | "pro"
type Duration = "monthly" | "yearly"
type AddOns = {
    "online service": boolean
    "larger storage": boolean
    "customizable profile": boolean
}

interface InputProps{
    totalFormData: TotalFormData
    setTotalFormData: React.Dispatch<React.SetStateAction<TotalFormData>>
}
interface ErrorProps{
    totalErrors: TotalErrors
    setTotalErrors: React.Dispatch<React.SetStateAction<TotalErrors>>
}

