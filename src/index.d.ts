interface TotalFormData {
    name:string,
    email:string,
    phone:string,
    plan: Plan,
    planTime: Period,
    addOns: AddOns[],
    addOnsTime: Period,
    checkOns:{
        onlineService: boolean,
        largerStorage: boolean,
        customizableProfile: boolean,
    }
}

type Plan = 'arcade' | 'advanced' | 'pro';
type Period = 'monthly' | 'yearly';
type AddOns = 'online service'| 'larger storage' | 'customizable profile'

