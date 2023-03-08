
import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/g')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>sno</th>
          <th>playername</th>
          <th>ranking</th>
          <th>rating</th>
          <th>teamname</th>
        </tr>
        
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.sno}>
            <td>{user.sno}</td>
            <td>{user.playername}</td>
            <td>{user.ranking}</td>
            <td>{user.rating}</td>
            <td>{user.teamname}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;