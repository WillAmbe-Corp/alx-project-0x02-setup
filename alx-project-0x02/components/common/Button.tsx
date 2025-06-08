import { type ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({title, className, shape, size}) => {
 
    return(
        <div>
            <button className={`${className} ${shape}${size}`}>{title}</button>
        </div>
    )
}

export default Button;