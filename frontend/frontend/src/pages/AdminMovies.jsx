import { useEffect, useState } from "react";

import api from "../services/api";

import MovieForm from "../components/movies/MovieForm";
import MovieTable from "../components/movies/MovieTable";

import "../assets/css/AdminMovies.css";

function AdminMovies() {

    const [movies, setMovies] = useState([]);

    const [editingMovie, setEditingMovie] = useState(null);

    const [showForm, setShowForm] = useState(false);


    // =========================
    // READ - GET ALL MOVIES
    // =========================

    useEffect(() => {

        fetchMovies();

    }, []);


    const fetchMovies = () => {

        api.get("/movies")

            .then((res) => {

                setMovies(res.data);

            })

            .catch((err) => {

                console.error(
                    "Fetch Movies Error:",
                    err.response?.data || err.message
                );

            });

    };


    // =========================
    // CREATE / UPDATE
    // =========================

    const saveMovie = (movie) => {

        // UPDATE
        if (editingMovie) {

            api.put(
                `/movies/${editingMovie.movie_id}`,
                movie
            )

                .then((res) => {

                    console.log(
                        "Movie Updated:",
                        res.data
                    );

                    fetchMovies();

                    setEditingMovie(null);

                    setShowForm(false);

                })

                .catch((err) => {

                    console.error(
                        "Update Movie Error:",
                        err.response?.data || err.message
                    );

                });

        }

        // CREATE
        else {

            api.post("/movies", movie)

                .then((res) => {

                    console.log(
                        "Movie Added:",
                        res.data
                    );

                    fetchMovies();

                    setShowForm(false);

                })

                .catch((err) => {

                    console.error(
                        "Add Movie Error:",
                        err.response?.data || err.message
                    );

                });

        }

    };


    // =========================
    // EDIT
    // =========================

    const editMovie = (movie) => {

        setEditingMovie(movie);

        setShowForm(true);

    };


    // =========================
    // DELETE
    // =========================

    const deleteMovie = (id) => {

        if (!window.confirm("Are you sure you want to delete this movie?")) {

            return;

        }

        api.delete(`/movies/${id}`)

            .then((res) => {

                console.log(
                    "Movie Deleted:",
                    res.data
                );

                fetchMovies();

            })

            .catch((err) => {

                console.error(
                    "Delete Movie Error:",
                    err.response?.data || err.message
                );

            });

    };


    // =========================
    // CANCEL FORM
    // =========================

    const cancelForm = () => {

        setShowForm(false);

        setEditingMovie(null);

    };


    return (

        <div className="admin-movies">

            <h1>Manage Movies</h1>


            {/* ADD MOVIE */}

            <button

                className="add-btn"

                onClick={() => {

                    setEditingMovie(null);

                    setShowForm(true);

                }}

            >

                + Add Movie

            </button>


            {/* MOVIE FORM */}

            {showForm && (

                <MovieForm

                    movie={editingMovie}

                    onSave={saveMovie}

                    onCancel={cancelForm}

                />

            )}


            {/* MOVIE TABLE */}

            <MovieTable

                movies={movies}

                onEdit={editMovie}

                onDelete={deleteMovie}

            />

        </div>

    );

}

export default AdminMovies;