import { Component } from "react";

export class Dbcon extends Component {
  transdata(data, callback) {
    console.log(data);
    console.log("yo");
    callback("yolo");
  }
}
const db = new Dbcon();
export default db;
