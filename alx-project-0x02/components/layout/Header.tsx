import Link from "next/link";

const Header: React.FC = () => {
    return(
        <>
        <div className="flex justify-end flex-end gap-3">
            <Link href="../about">About</Link>
            <Link href="../home">Home</Link>
            <Link href="../posts">Posts</Link>
        </div>
            <div className="flex my-10 justify-center items-center">
                <p>Here we can find a simple header</p>
            </div>
        </>
    )
}

export default Header;