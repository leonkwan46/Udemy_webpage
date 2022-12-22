import React from "react"
import UserList from "../components/user_list"

const Users = () => {
    const USERS = [{
        id: "1", 
        name: "Niii",
        image: "https://images.unsplash.com/photo-1650928800498-034549200857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        places: 3
    }];

    return(
        <UserList items={USERS} />
    )
}

export default Users