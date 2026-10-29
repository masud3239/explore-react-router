import { useLoaderData, useNavigate } from "react-router";


const PostDetails = () => {
    const post =useLoaderData();
    const {title, body} = post;

const navigate = useNavigate();
// const handleNavigate = () => {
//     navigate('/');
// }

    return (
        <div>
            <h1>These are posts Details</h1>
            <h2><strong>Title:-</strong> {title}</h2>
            <p> <b>Description:-</b> <small>{body}</small></p>
            <button onClick={() => navigate(-1)} className="border border-amber-600 p-2 rounded-2xl mb-4" > Go Back </button>
        </div>
    );
};

export default PostDetails;