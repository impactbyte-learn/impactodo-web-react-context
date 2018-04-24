import React from "react";

import PageTitle from "../small/PageTitle";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <PageTitle>About App</PageTitle>

        <p>Hello, this is a simple todo app.</p>
      </div>
    );
  }
}

export default About;
