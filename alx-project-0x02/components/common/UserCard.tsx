import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({name, email, address}) => {
    return(
        <>
            <div>
                <h1 className="text-3xl font-bold mb-4">User Informations</h1>
            </div>
            <div className="flex flex-col gap-4">
                <span>
                    Name: {name}
                </span>
                <span>
                    Email: {email}
                </span>
                <span>
                    Address: {address}
                </span>
            </div>
        </>
    )
}

export default UserCard;