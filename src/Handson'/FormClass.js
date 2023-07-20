

import React, { Component } from "react";
import DisplayForm from "./DisplayForm";

class FormClass extends Component {
  state = {
    Name: "",
    Department: "",
    Rating: "",
    EmpData: [],
    clicked: false,
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleFunction = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  clickHandler = () => {
    let newobj = {
      name: this.state.Name,
      department: this.state.Department,
      rating: this.state.Rating,
    };
    this.setState((prevState) => ({
      EmpData: [...prevState.EmpData, newobj],
      Name: "",
      Department: "",
      Rating: "",
      clicked: true,
    }));
  };

  render() {
    const { EmpData, clicked } = this.state;
    return (
      <>
        <h1 style={{ textAlign: "center" }}>EMPLOYEE FEEDBACK FORM</h1>
        {clicked ? (
          <DisplayForm EmpData={EmpData} toggleFunc={this.toggleFunction} />
        ) : (
          <form className="form-container">
            <div className="main">
            <div className="inp">
        <label htmlFor='name'>Name :</label>
        <input id="name" className="field" type="text" name="Name" value={this.state.Name} onChange={this.changeHandler}required></input></div><br></br>
        <div className="inp"><label htmlFor='department'>Department :</label>
        <input id="department" className="field" type="text" name="Department" value={this.state.Department} onChange={this.changeHandler}required></input></div><br></br>
       <div className="inp"> <label htmlFor='rating'>Rating :</label>
        <input id="rating" className="field" type="text" name="Rating" value={this.state.Rating} onChange={this.changeHandler}required></input></div>
        <div className="inp"><button type="button" className="submit" onClick={this.clickHandler}>Submit</button></div></div>
              
          </form>
        )}
      </>
    );
  }
}

export default FormClass;
