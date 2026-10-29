import { use } from "react";


const UserDetail2 = ({userPromise}) => {
    const {name, username } = use(userPromise);
   
    return (
        <div>
            <h1> Name: {name}</h1>
            <p>username:{username}</p>
        </div>
    );
};

export default UserDetail2;