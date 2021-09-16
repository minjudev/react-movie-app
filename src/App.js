import React from "react";

// React class 컴포넌트
// react는 자동적으로 class component의 render method를 실행
class App extends React.Component {
  // render 실행 전 먼저 실행됨
  constructor(props) {
    super(props);
    console.log('hello');
  }
  // state -> object, component의 data를 넣을 공간이 있고 그 data는 변함
  // 바꿀 데이터를 state 안에 넣기
  state = {
    count: 0
  }
  add = () => {
    // setState 호출 시 react는 state를 refresh하고 render를 재호출함
    // setState는 새로운 state(obj)를 받아야함
    // this.setState({count: this.state.count + 1});
    // current를 이용해 현재 state 얻기
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount() {
    console.log('component rendered');
  }
  componentDidUpdate() {
    console.log('component updated');
  }
  // react component는 render 메소드를 가짐
  render() {
    console.log('render');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;