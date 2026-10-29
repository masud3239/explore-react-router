import { use } from "react";


const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log('users 2 suspense data load', users)
    return (
        <div>
            <h1>This is users2 {users.length}</h1>
        </div>
    );
};

export default Users2;