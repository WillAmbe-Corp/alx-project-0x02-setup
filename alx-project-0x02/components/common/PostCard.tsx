import { PostProps } from "@/interfaces";


const PostCard: React.FC<PostProps> = ({userId, title, content}) => {
    return(
        <>
            <div className="mx-auto p-6 my-6 rounded-lg shadow-lg">
                <h1 className="mb-4">
                    <span className="text-3xl font-semibold text-gray-800">
                        Title: {title}
                    </span>
                </h1>
                <div className="flex justify-between items-center text-sm">
                    <span>
                        Content: {content}
                    </span>
                    <span>
                        PostID: {userId}
                    </span>
                </div>
            </div>
        </>
    )
}

export default PostCard;