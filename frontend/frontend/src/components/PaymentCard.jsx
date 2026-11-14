import "../assets/css/Card.css";


function PaymentCard({payment}){


    return(

        <div className="card">


            <h2>
                Payment ID : {payment.payment_id}
            </h2>


            <p>
                Booking ID : {payment.booking_id}
            </p>


            <p>
                Method : {payment.payment_method}
            </p>


            <p>
                Status : {payment.payment_status}
            </p>


        </div>

    )

}


export default PaymentCard;