import Button from "@/components/common/Button";

const About: React.FC = () => {
    return(
        <div className="flex justify-center align-center">
            <h1 className="text-2x font-light">About Page</h1>
            
                <Button className="bg-white text-black text-center mx-auto rounded-sm w-sm" size="small" shape="rounded-sm" title="Small" />
                    <br />
                <Button className="bg-white text-black text-center mx-auto rounded-md w-md" size="medium" shape="rounded-md" title="Medium" />
                    <br />
                <Button className="bg-white text-black text-center mx-auto rounded-full w-lg" size="large" shape="rounded-full" title="Large" />
        </div>
    )
}

export default About;