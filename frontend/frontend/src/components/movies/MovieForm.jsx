import { useState, useEffect } from "react";

function MovieForm({ movie, onSave, onCancel }) {

    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        language: "",
        duration: "",
        release_date: "",
        rating: "",
        certificate: ""
    });

    useEffect(() => {

        if (movie) {

            setFormData({
                title: movie.title || "",
                genre: movie.genre || "",
                language: movie.language || "",
                duration: movie.duration || "",
                release_date: movie.release_date
                    ? String(movie.release_date).substring(0, 10)
                    : "",
                rating: movie.rating || "",
                certificate: movie.certificate || ""
            });

        }

    }, [movie]);


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(formData);

    };


    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="title"
                placeholder="Movie Title"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="genre"
                placeholder="Genre"
                value={formData.genre}
                onChange={handleChange}
            />

            <input
                type="text"
                name="language"
                placeholder="Language"
                value={formData.language}
                onChange={handleChange}
            />

            <input
                type="number"
                name="duration"
                placeholder="Duration"
                value={formData.duration}
                onChange={handleChange}
                required
            />

            <input
                type="date"
                name="release_date"
                value={formData.release_date}
                onChange={handleChange}
            />

            <input
                type="number"
                step="0.1"
                name="rating"
                placeholder="Rating"
                value={formData.rating}
                onChange={handleChange}
            />

            <input
                type="text"
                name="certificate"
                placeholder="Certificate"
                value={formData.certificate}
                onChange={handleChange}
            />

            <button type="submit">
                {movie ? "Update Movie" : "Save Movie"}
            </button>

            <button
                type="button"
                onClick={onCancel}
            >
                Cancel
            </button>

        </form>

    );

}

export default MovieForm;