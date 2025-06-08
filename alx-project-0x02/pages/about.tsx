import Button from "@/components/common/Button";

const About: React.FC = () => {
    return(
        <div className="flex justify-center align-center">
            <h1 className="text-2x font-light">About Page</h1>
            
                <Button className="bg-white text-black text-center mx-auto rounded-sm w-sm" title="Small" />

                <Button className="bg-white text-black text-center mx-auto rounded-md w-md" title="Medium" />

                <Button className="bg-white text-black text-center mx-auto rounded-full w-lg" title="Large" />
        </div>
    )
}

export default About;