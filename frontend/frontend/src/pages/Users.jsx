import {useEffect,useState} from "react";

import api from "../services/api";

import Loader from "../components/Loader";

import "../assets/css/Admin.css";


function Users(){


const [users,setUsers]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{


api.get("/users")

.then(res=>{

setUsers(res.data);

setLoading(false);

})


},[]);



if(loading)
{
return <Loader/>
}



return(

<div className="admin-page">


<h1>
Users
</h1>


<table>


<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Email</th>

<th>Phone</th>

</tr>

</thead>



<tbody>


{

users.map(user=>(

<tr key={user.user_id}>

<td>{user.user_id}</td>

<td>{user.name}</td>

<td>{user.email}</td>

<td>{user.phone}</td>

</tr>

))

}


</tbody>


</table>


</div>

)

}


export default Users;