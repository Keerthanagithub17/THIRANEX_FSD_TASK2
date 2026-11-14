function MovieRow({ movie, onEdit, onDelete }) {

    return (

        <tr>

            <td>{movie.movie_id}</td>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.language}</td>
            <td>{movie.duration}</td>
            <td>{movie.release_date?.split("T")[0]}</td>
            <td>{movie.rating}</td>
            <td>{movie.certificate}</td>

            <td>

                <button
                    onClick={() => onEdit(movie)}
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(movie.movie_id)}
                >
                    Delete
                </button>

            </td>

        </tr>

    );

}

export default MovieRow;