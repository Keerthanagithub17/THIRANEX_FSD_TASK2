import "../assets/css/Card.css";


function BookingCard({booking}){


    return(

        <div className="card">

            <h2>
                Booking ID : {booking.booking_id}
            </h2>


            <p>
                User ID : {booking.user_id}
            </p>


            <p>
                Show ID : {booking.show_id}
            </p>


            <p>
                Amount : ₹{booking.total_amount}
            </p>


            <p>
                Status : {booking.booking_status}
            </p>


        </div>

    )

}


export default BookingCard;