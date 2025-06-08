import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
const About: React.FC = () => {
    return(
        <>
            <Header/>
            <div className="flex justify-center my-32">
                <h1 className="text-2x font-light">About Page</h1>
            </div>
            
            
                <Button className="bg-white text-black text-center mx-auto rounded-sm w-sm" size="small" shape="rounded-sm" title="Small" />
                    <br />
                <Button className="bg-white text-black text-center mx-auto rounded-md w-md" size="medium" shape="rounded-md" title="Medium" />
                    <br />
                <Button className="bg-white text-black text-center mx-auto rounded-full w-lg" size="large" shape="rounded-full" title="Large" />
        </>
    )
}

export default About;