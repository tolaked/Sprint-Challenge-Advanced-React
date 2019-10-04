import React, { Component } from "react";

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

  fetchData() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(body => {
        // console.log("this", body);
        this.setState({ data: body });
        console.log(this.state.data);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
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
