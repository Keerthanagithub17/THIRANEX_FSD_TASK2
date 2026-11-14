import { useNavigate } from "react-router-dom";

import "../assets/css/Admin.css";

function Admin() {

    const navigate = useNavigate();

    return (

        <div className="admin">

            <h1>🎬 Admin Dashboard</h1>

            <div className="admin-grid">

                <div
                    className="admin-card"
                    onClick={() => navigate("/admin/movies")}
                >

                    <h2>🎥 Movies</h2>

                    <p>
                        Add, Edit and Delete Movies
                    </p>

                </div>

                <div className="admin-card">

                    <h2>🏢 Theatres</h2>

                    <p>
                        Coming Soon
                    </p>

                </div>

                <div className="admin-card">

                    <h2>🖥 Screens</h2>

                    <p>
                        Coming Soon
                    </p>

                </div>

                <div className="admin-card">

                    <h2>🎭 Shows</h2>

                    <p>
                        Coming Soon
                    </p>

                </div>

                <div className="admin-card">

                    <h2>🎟 Bookings</h2>

                    <p>
                        Coming Soon
                    </p>

                </div>

                <div className="admin-card">

                    <h2>💳 Payments</h2>

                    <p>
                        Coming Soon
                    </p>

                </div>

            </div>

        </div>

    );

}

export default Admin;