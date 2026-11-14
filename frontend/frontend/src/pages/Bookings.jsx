import {useEffect,useState} from "react";

import api from "../services/api";

import BookingCard from "../components/BookingCard";

import Loader from "../components/Loader";

import "../assets/css/Booking.css";



function Bookings(){


const [bookings,setBookings]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{


api.get("/bookings")

.then(res=>{

setBookings(res.data);

setLoading(false);

})


},[]);



if(loading)
{
return <Loader/>
}



return(

<div className="booking-page">


<h1>
Bookings
</h1>


<div className="booking-container">


{

bookings.map(booking=>(

<BookingCard

key={booking.booking_id}

booking={booking}

/>

))

}


</div>


</div>

)

}



export default Bookings;