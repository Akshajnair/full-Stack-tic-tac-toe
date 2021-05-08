import { Component } from "react";
import axios from 'axios'

export class Dbcon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      baseurl: 'http://localhost:5000'
      // baseurl: window.location.origin
    }
  }
  transdata(data) {
    const options = {
      url: this.state.baseurl + "/gameplay/add",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        arr:data.arr,
        play: data.play,
        result: data.result
      },
    };
    axios(options)
      .then((res) => {
        if (res.data === "exist") console.log("exist");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  nextmove(data,callback)
  {
    const options = {
      url: this.state.baseurl + "/gameplay/next",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        arr:data.arr,
        play: data.play,
        result: data.result
      },
    };
    axios(options)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
const db = new Dbcon();
export default db;
