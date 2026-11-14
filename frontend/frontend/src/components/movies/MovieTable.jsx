import MovieRow from "./MovieRow";

function MovieTable({ movies, onEdit, onDelete }) {

    return (

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Language</th>
                    <th>Duration</th>
                    <th>Release Date</th>
                    <th>Rating</th>
                    <th>Certificate</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    movies.map((movie) => (

                        <MovieRow

                            key={movie.movie_id}

                            movie={movie}

                            onEdit={onEdit}

                            onDelete={onDelete}

                        />

                    ))

                }

            </tbody>

        </table>

    );

}

export default MovieTable;