import { ButtonProps } from "@/interfaces"
import { styleText } from "util";

const Button: React.FC<ButtonProps> = ({title, className}) => {
    return(
        <div>
            <button className={`${className}`}>{title}</button>
        </div>
    )
}

export default Button;