import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionContent1,
  SectionContent2,
  SectionTestimoni,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "designschool.canva.com | Adam Widmanski";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
        </Header>
        <Main>
          <SectionContent1 />
          <SectionContent2 />
          <SectionTestimoni />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
