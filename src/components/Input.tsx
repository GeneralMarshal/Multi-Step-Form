interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    styleClass: string
}

export default function Input(props: Props){
    const {type, placeholder, styleClass, onChange, id} = props
    return(
        <input type={type} className={`${styleClass} w-full border border-[#B8C0CC] bg-[#ffffff] rounded-md` } placeholder={placeholder} onChange={onChange} id={id}/>
    )
}