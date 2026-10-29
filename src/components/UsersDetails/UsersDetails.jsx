import { useLoaderData, useNavigate, useParams } from "react-router";


const UsersDetails = () => {

    const user = useLoaderData();
    
    const {name, phone } = user;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

// const params = useParams();
// console.log(params.userId);

const {userId} = useParams();
console.log(userId);


    return (
        <div>
            <h1>This is UsersDetails</h1>
            <div className="border border-amber-400 rounded-2xl p-2 space-y-4 text-center">
            <h3>{name}</h3>
            <p><small> Phone: {phone}</small></p>
            <button className="border border-amber-600 p-2 rounded-2xl mb-4">Show Details</button>
            <button onClick={handleNavigate} className="border border-amber-600 p-2 rounded-2xl mb-4">Go Back</button>
            </div>
             
            
        </div>
    );
};

export default UsersDetails;