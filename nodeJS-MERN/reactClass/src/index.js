import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
CampSite.defaultProps = { name: "Tom" };

// change code below this line
const Camper = props => {
  return <p>{props.name}</p>;
};
const rootElement = document.getElementById("root");
ReactDOM.render(<CampSite />, rootElement);
