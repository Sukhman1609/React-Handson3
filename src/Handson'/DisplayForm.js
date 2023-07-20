import React, { Component } from "react";
class DisplayForm extends Component {
  render() {
    const { EmpData, toggleFunc } = this.props;
    return (
      <>
        <div className="abc">
          {EmpData.map((item, index) => (
            <div key={index} className="inner-box">
              <span className="display">
                Name: {item.name} || Department: {item.department} || Rating: {item.rating}
              </span>
            </div>
          ))}
        </div>
        <div className="go">
        <button className="back" onClick={toggleFunc}>Go Back</button></div>
      </>
    );
  }
}

export default DisplayForm;
