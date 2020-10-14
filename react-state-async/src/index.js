import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    foo: 5,
    bar: 10
  };

  doStuff = () => {
    this.setState({ foo: this.state.foo + 1 });
    if (this.state.foo > 7) {
      this.setState({ bar: 20 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.doStuff}>Increment foo</button>
        <p>Foo = {this.state.foo}</p>
        <p>Bar = {this.state.bar}</p>
        <b>Bar should become 20 if Foo > 7</b>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
