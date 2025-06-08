import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Posts: React.FC<PostProps[]> = ({posts}) => {
    return(
        <>
            <Header />
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-4">
                    {
                        posts.map(({userId, title, content}: PostProps) => {
                            <PostCard title={title} content={content} userId={userId}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https//jsonplaceholder.typicode.com/users:")
    const posts = await res.json();

    return{
        Props: (posts)
    }
}

export default Posts;