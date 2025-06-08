import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({title, className}) => {
    return(
        <div>
            <button className={`${className}`}>{title}</button>
        </div>
    )
}

export default Button;