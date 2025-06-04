import Link from "next/link";

const Header: React.FC = () => {
    return(
        <>
        <div className="flex justify-between flex-end gap-3">
            <Link href="../about">About</Link>
            <Link href="../home">Home</Link>
        </div>
            <div className="flex my-10 justify-center items-center">
                <h1 className="text-xl font-bolder">Header</h1>
                <p>Here we can find a simple header</p>
            </div>
        </>
    )
}

export default Header;