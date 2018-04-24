import React from "react";

import Page from "../container/Page";
import PageTitle from "../small/PageTitle";

class About extends React.Component {
  render() {
    return (
      <Page title="About">
        <p>Hello, this is a simple todo app</p>
      </Page>
    );
  }
}

export default About;
