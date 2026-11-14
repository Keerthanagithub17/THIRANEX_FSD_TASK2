import {useEffect,useState} from "react";

import api from "../services/api";

import Loader from "../components/Loader";



function BookingSeats(){


const [seats,setSeats]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{


api.get("/booking-seats")

.then(res=>{

setSeats(res.data);

setLoading(false);

})


},[]);



if(loading)
return <Loader/>



return(

<div className="booking-page">


<h1>
Booked Seats
</h1>



{

seats.map(seat=>(


<div className="card" key={seat.booking_seat_id}>


<h3>
Booking ID : {seat.booking_id}
</h3>


<p>
Seat ID : {seat.seat_id}
</p>


</div>


))


}


</div>

)

}


export default BookingSeats;