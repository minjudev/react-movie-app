import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// React className 컴포넌트
// react는 자동적으로 className component의 render method를 실행
class App extends React.Component {
  // react component는 render 메소드를 가짐
  state = {
    isLoading: true,
  };
  // 비동기 방식
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by");
    // this.setState({movies: movies});
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              ></Movie>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
