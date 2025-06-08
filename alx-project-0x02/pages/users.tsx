import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";


const Users: React.FC<UserProps> = ({info}) => {
    return(
        <>
            <Header />
            <div className="bg-white text-black">
                {
                    info.map(({name, email, address}: UserProps) => {
                        <UserCard name={name} email={email} address={address} />
                    })
                }
            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const info = await res.json();

    return{
        props: {info}
    }
}

export default Users;