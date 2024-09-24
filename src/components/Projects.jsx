import React from 'react'
import { Container, Row, Tab, Col, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/Befikre.png";
import projImg2 from "../assets/img/Nike.png";
import projImg3 from "../assets/img/Jhoom.png";
import projImg4 from "../assets/img/Locale-linkup.png";
import projImg5 from "../assets/img/Landing-page.png";
import projImg6 from "../assets/img/Portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projectsTabOne = [
        {
            title: "Befikre",
            description: "This basic blogging webpage, built with HTML, CSS, and JavaScript, offers a clean, user-friendly platform for sharing content. It features a homepage with recent posts, individual post pages, and a simple navigation menu.",
            imgUrl: projImg1,
            link: "https://befikre.netlify.app/",
          },
          {
            title: "Landing Page",
            description: "This landing page, built with HTML, CSS, and JavaScript, provides a clean, modern design that effectively introduces your product or service and engages users.",
            imgUrl: projImg5,
          },
          {
            title: "Jhoom",
            description: "This music webpage, built with HTML, CSS, and JavaScript, offers a clean, responsive design for exploring and playing tracks, providing a user-friendly experience across all devices.",
            imgUrl: projImg3,
            link: "https://jhoom.netlify.app/"
          }
    ];

    const projectsTabTwo = [
          {
            title: "Nike Prototype",
            description: "This is a prototype for the Nike app that streamlines and personalizes the buying and product tracking processes. Its sleek, user-friendly design makes it easy for customers to browse products.This prototype was designed to operate at peak efficiency across many platforms.",
            imgUrl: projImg2,
          },
          {
            title: "Portfolio",
            description: "In this project, I focused on creating a seamless and visually appealing user experience for a personal portfolio. The design emphasizes clarity, simplicity, and interactivity, ensuring that visitors can easily navigate through sections and gain a comprehensive understanding of the showcased work.",
            imgUrl: projImg6,
          },
          // {
          //   title: "Business Startup",
          //   description: "Design & Development",
          //   imgUrl: projImg3,
          // },
    ];
    
    const projectsTabThree = [
          {
            title: "Locale Linkup",
            description: "E-commerce has transformed shopping but challenged local businesses. Our project addresses this by creating a platform for small entrepreneurs to showcase their products and reach a broader community audience.",
            imgUrl: projImg4,
          },
          // {
          //   title: "Landing Page",
          //   description: "Web Design",
          //   imgUrl: projImg5,
          // },
          // {
          //   title: "Business Startup",
          //   description: "Design & Development",
          //   imgUrl: projImg3,
          // },
    ];

    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project</h2>
                <p>
                Projects are how you put your knowledge and abilities into practice and demonstrate how you can solve problems in the real world. They exhibit your inventiveness, commitment, and problem-solving skills. Important projects that demonstrate your proficiency and the value of your work are highlighted on this page.
                </p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design & Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Full Stack</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                      <Tab.Pane eventKey="first">
                          <Row>
                              {
                                  projectsTabOne.map((project, index) => {
                                      return(
                                          <ProjectCard
                                              key={index}
                                              {...project}
                                              />
                                      )
                                  })
                              }
                          </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second"><Row>
                              {
                                  projectsTabTwo.map((project, index) => {
                                      return(
                                          <ProjectCard
                                              key={index}
                                              {...project}
                                              />
                                      )
                                  })
                              }
                          </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third"><Row>
                              {
                                  projectsTabThree.map((project, index) => {
                                      return(
                                          <ProjectCard
                                              key={index}
                                              {...project}
                                              />
                                      )
                                  })
                              }
                          </Row>
                      </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    );
}

