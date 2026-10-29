import { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetail2 from "../../UserDetail2/UserDetail2";



const User = ({user}) => {

const { id, name, email, username, website} = user;

const [showInfo, setShowInfo] = useState(false);

const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

// const userStyle = {
//     border: '2px solid yellow',
//     borderRadius: '2px',
//     padding: '10px',
//     marging: '10px'
// }

    return (
        <div className=" border border-yellow-400 rounded-2xl p-5 mb-4 text-center space-y-4">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>username: {username}</p>
            <p>website: {website}</p>
            <Link className="border border-amber-600 p-2 rounded-2xl mb-4" to={`/users/${id}`}>Show Details</Link>
            <button className="border border-amber-600 p-2 rounded-2xl mb-4"  onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>

            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetail2 userPromise={userPromise}></UserDetail2>
                </Suspense>
            }
        </div>
    );
};

export default User;