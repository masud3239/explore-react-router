import { Link, useNavigate } from "react-router";


const Post = ({post}) => {
const {id, title, body } = post;

const navigate = useNavigate();

const handleNavigate = () => {
    navigate(`/posts/${id}`);
}

    return (
        <div className=" border border-yellow-400 rounded-2xl p-5 mb-4 space-y-4">
            <h1> <b>Title:</b> {title}</h1>
            <p> <b>Descriptin:</b>  {body}</p>

           <div className="flex gap-4">
             <Link className="border border-amber-600 p-2 rounded-2xl mb-4"  to={`/posts/${id}`}>Show Details</Link>
            
            <button className="border border-amber-600 p-2 rounded-2xl mb-4"  onClick={handleNavigate}>Details of: {id}</button>
           </div>

        </div>
    );
};

export default Post;