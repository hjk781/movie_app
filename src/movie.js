import React from "react";
import PropTypes from "prop-types";
import "./movie.css";
import LinesEllipsis from "react-lines-ellipsis";
// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string
//   };
//   render() {
//     return (
//       <div>
//         <MoviePosrter poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

// class MoviePosrter extends Component {
//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   };
//   render() {
//     return <img src={this.props.poster} />;
//   }
// }

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Column">
        <MoviePosrter poster={poster} alt={title} />
      </div>
      <div className="Movie_Column">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
}

function MoviePosrter({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}

export default Movie;

function MovieGenre({ genre }) {
  return <span className="Movie_Genre">{genre}</span>;
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
};
MoviePosrter.prototype = {
  poster: PropTypes.String,
  alt: PropTypes.String
};
MovieGenre.prototype = {
  genre: PropTypes.String
};
