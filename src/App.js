import React from "react";
import axios from "axios";
import Movie from "./Movie";

// React class 컴포넌트
// react는 자동적으로 class component의 render method를 실행
class App extends React.Component {
  // react component는 render 메소드를 가짐
  state = {
    isLoading: true
  }
  // 비동기 방식
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by');
    // this.setState({movies: movies});
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}>
              </Movie>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;