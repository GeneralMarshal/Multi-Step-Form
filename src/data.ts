
export const cardData = [
    {
        name: "arcade",
        icon: "/icons/icon-arcade.svg",
        pricePerMonth: 9,
        pricePerYear: 90
    },
    {
        name: "advanced",
        icon: "/icons/icon-advanced.svg",
        pricePerMonth: 12,
        pricePerYear: 120
    },{
        name: "pro",
        icon: "/icons/icon-pro.svg",
        pricePerMonth: 15,
        pricePerYear: 150
    },
]

export const addOnsData = [
    {
        name: "online service",
        description: "Access to multiplayer games",
        pricePerMonth: 1,
        pricePerYear: 10
    },
    {   
        name: "larger storage",
        description: "Extra 1TB of cloud save",
        pricePerMonth: 2,
        pricePerYear: 20
    },
    {
        name: "customizable profile",
        description: "Custom theme on your profile",
        pricePerMonth: 3,
        pricePerYear: 30
    },
] as const