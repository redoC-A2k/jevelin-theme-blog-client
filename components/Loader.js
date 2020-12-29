import { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <>
        <div className="loader">
        <div style={{display:"flex", width:"120px",alignItems:"center",justifyContent:"space-around"}}>
          <div className="dot dot_first"></div>
          <div className="dot dot_second"></div>
          <div className="dot dot_third"></div>
          </div>
        </div>
      </>
    );
  }
}
