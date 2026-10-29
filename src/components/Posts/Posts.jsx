import { useLoaderData } from "react-router";
import Post from "./Post/Post";


const Posts = () => {
    const posts = useLoaderData();

    return (
        <div>
            <h1>These are my Posts: {posts.length} </h1>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post> )
                }
            </div>
        </div>
    );
};

export default Posts;