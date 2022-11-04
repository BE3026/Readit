import React, { Component, createRef } from "react";
import Axios from "axios";
import rainy from "./images/rainy.jpg";
import sunny from "./images/sunny.jpg";
import cloudy from "./images/cloudy.jpg";
import haze from "./images/haze.jpg";
export class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: sunny,
      city: "Loading...",
      description: "Sunny",
      temp: 25,
      latitude: 0,
      longitude: 0
    };
  }
  refresh() {
    const getWeather = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        console.log(this.state.latitude);
        console.log(this.state.longitude);
      });
    };
    const calcWeather = async () => {
      let apikey = `0f8da4520efdc679c27b3d8b64ea40e9`;
      let api = `https://api.openweathermap.org/data/2.5/weather?`;
      let finalapi = `${api}lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${apikey}`;
      const res = await Axios.get(finalapi);
      console.log(res);
      console.log(res.data.weather[0].main);
      this.setState({
        city: res.data.name,
        temp: Math.round(res.data.main.temp - 274.15),
        description: res.data.weather[0].main
      });
      if (this.state.description === "Clouds") {
        this.setState({
          src: cloudy
        });
      }
      if (this.state.description === "Rain") {
        this.setState({
          src: rainy
        });
      }
      if (this.state.description === "Drizzle") {
        this.setState({
          src: rainy
        });
      }
      if (this.state.description === "Haze") {
        this.setState({
          src: haze
        });
      }
    };
    getWeather();
    calcWeather();
  }
  render() {
    return (
      <div
        className="weatherbg"
        style={{ backgroundImage: `url(${this.state.src})` }}
      >
        <h2>
          Weather{" "}
          <button onClick={() => this.refresh()}>
            <i className="fa fa-refresh" style={{ marginRight: "0px" }}></i>
          </button>
        </h2>
        <center></center>
        <h1 style={{ textAlign: "right" }}>{this.state.temp} C</h1>
        <h2 style={{ textAlign: "center" }}>{this.state.city}</h2>
        <h2 style={{ textAlign: "center" }}>{this.state.description}</h2>
      </div>
    );
  }
}

export default Weather;
