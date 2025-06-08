import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";
import { CardProps } from "@/interfaces";
const HomePage: React.FC = () => {

    const [modal, setModal] = useState(false)
    const handleClick = () => {
        setModal(prevModal => !prevModal)
    };
    const [newPost, setNewPost] = useState<CardProps[]>([]);
    const handleNewPost = (addPost: CardProps) => {
        setNewPost (prevPost => ([...prevPost, addPost]))
    }
    return (
        <>
        <div>
            <div>
                <button onClick={handleClick}>Show Modal</button>
            </div>
            {
                modal && 
                <PostModal  
                    onSubmit={handleNewPost}
                    onClose={handleClick}    
                /> 
            }
        </div>
            <div className="flex justify-center gap-2 items-center">
                <Card title="Villa" content="lorem isjbcuyg hbqgyxcybhkx "/>
                <Card title="Duplex" content="lorem ipsum jarif sddeofedcujbuj jbyusshb" />
                <Card title="Appartment" content="guyga7sgc vxyugx qsvuyf jgvutyfx" />
                <Card title="Villa" content="lorem isjbcuyg hbqgyxcybhkx "/>
                <Card title="Duplex" content="lorem ipsum jarif sddeofedcujbuj jbyusshb" />
            </div>
        </>
    )
}

export default HomePage;