import React, { Component } from "react";
import Image from "next/image";
import logo from "../public/vs.png";

function LoadingMessage() {
  return (
    <>
      <div
        style={{
          background: "rgb(15,18,24)",
          background:
            "linear-gradient(158deg, rgba(15,18,24,1) 0%, rgba(36,41,46,1) 40%, rgba(249,129,108,1) 97%)",
          position: "fixed",
          display: "flex",
          top: 0,
          left: 0,
          "z-index": 9999,
          "justify-content": "center",
          "align-items": "center",
          "flex-direction": "column",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={logo}
          style={{ display: "flex", width: "20vw", height: "20vw" }}
          alt="logo"
          priority
        />
        <br />
      </div>
    </>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1500);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
