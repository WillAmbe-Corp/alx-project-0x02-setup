import { useState } from "react";

interface PostModalProps {
    onSubmit: (data: { title: string; content: string }) => void;
    onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ onSubmit, onClose }) => {
    const [post, setPost] = useState({ 
        title: "", 
        content: "" 
    });

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost(prevPost => ({ ...prevPost, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(post);
        setPost({ title: "", content: "" });
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Create New Post</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-2 font-medium">Title: </label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title"
                            value={post.title}
                            placeholder="Enter Title"
                            className="bg-white/90 text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleForm}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block mb-2 font-medium">Content: </label>
                        <textarea
                            name="content"
                            id="content"
                            value={post.content}
                            className="bg-white text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleForm}
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModal;