import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Designer.", "Full Stack Developer." , "UI/UX Designer."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const period = 1000;

  const connect = () => {
      window.location.href = 'https://drive.google.com/file/d/1OkvD8JBEAqjcq8DJ7Jo06v6cuzpU6VBQ/view?usp=drive_link'; 
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period / 5);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline">Welcome to my portfolio</span>
              <h1>
                {`Hi I'm Sushant Singal `}
              </h1>
              <span className="wrap">And I am a {text}<span className="blinking-cursor"></span></span>
              <p>
              A creative, goal-oriented, and well-organized undergraduate with excellent design, leadership, and communication abilities. devoted to finding chances in computer science engineering and completing projects that are effective and of excellent quality.
              </p>
              <button onClick={connect}>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="headerImg" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
