interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    stylesClass: string 
}

export function Button(props: Props){
    const { children, stylesClass, onClick } = props

    return(
        <button className={`${stylesClass} w-auto py-1.5 md:py-2 px-4 text-sm`} onClick={onClick}>
            {children}
        </button>
    )
}