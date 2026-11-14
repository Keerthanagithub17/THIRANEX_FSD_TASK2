import {useEffect,useState} from "react";

import api from "../services/api";

import PaymentCard from "../components/PaymentCard";

import Loader from "../components/Loader";

import "../assets/css/Payment.css";



function Payments(){


const [payments,setPayments]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{


api.get("/payments")

.then(res=>{

setPayments(res.data);

setLoading(false);

})


},[]);



if(loading)
return <Loader/>



return(

<div className="payment-page">


<h1>
Payments
</h1>


<div className="payment-container">


{

payments.map(payment=>(

<PaymentCard

key={payment.payment_id}

payment={payment}

/>

))

}


</div>


</div>

)

}


export default Payments;