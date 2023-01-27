import { Component } from "react";

class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
      position: "",
    };
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  thic = () => {
    console.log(this);
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <div>
        <button onClick={this.thic}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {years}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность: {position}</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="app">
      <WhoAmi name="John" surname="Smith" link="facebook.com" />
      <WhoAmi name="Alex" surname="Shepard" link="facebook.com" />
    </div>
  );
}

export default App;
