import "../assets/css/Card.css";


function ShowCard({show}){


    return(

        <div className="card">


            <h2>
                {show.title}
            </h2>


            <p>
                Date : {show.show_date}
            </p>


            <p>
                Time : {show.show_time}
            </p>


            <p>
                Price : ₹{show.ticket_price}
            </p>


        </div>

    )

}


export default ShowCard;