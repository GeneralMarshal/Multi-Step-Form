export const cardData = [
    {
        name: "Arcade",
        icon: "/icons/icon-arcade.svg",
        pricePerMonth: "$9/mo",
        pricePerYear: "$90/yr"
    },
    {
        name: "Advanced",
        icon: "/icons/icon-advanced.svg",
        pricePerMonth: "$12/mo",
        pricePerYear: "$120/yr"
    },{
        name: "Pro",
        icon: "/icons/icon-pro.svg",
        pricePerMonth: "$15/mo",
        pricePerYear: "$150/yr"
    },
]

export const addOnsData = [
    {
        label: "onlineService",
        name: "Online Service",
        feature: "Access to multiplayer games",
        price: "+$1/mo"
    },
    {   
        label: "largerStorage",
        name: "Larger Storage",
        feature: "Extra 1TB of cloud save",
        price: "+$2/mo"
    },
    {
        label: "customizableProfile",
        name: "Customizable Profile",
        feature: "Custom theme on your profile",
        price: "+$3/mo"
    },
] as const