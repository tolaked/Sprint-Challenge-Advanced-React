import React, { Component } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Local = val => {
  console.log(val);
  const [value, setValue] = useLocalStorage("data", {});
  setValue(value);

  return <div>Local</div>;
};

class DataComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  //   componentWillUnmount(val) {
  //     this.Local(val);
  //   }
  fetchData() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(body => {
        // console.log("this", body);
        this.setState({ data: body });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Local val={this.state.data} />
        {data.map(el => (
          <div key={el.id}>
            <h1>{el.name}</h1>
            <p>{el.searches}</p>
            <p>{el.country}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DataComponent;
