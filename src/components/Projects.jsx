import React from 'react'
import { Container, Row, Tab, Col, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/Befikre.png";
import projImg2 from "../assets/img/Nike.png";
import projImg3 from "../assets/img/Jhoom.png";
import projImg4 from "../assets/img/Locale-linkup.png";
import projImg5 from "../assets/img/Landing-page.png";
import projImg6 from "../assets/img/Wander-mate.png";
import projImg7 from "../assets/img/Portfolio.png";
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
            github:"https://github.com/sushantsingal/Befikre",
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
            link: "https://jhoom.netlify.app/",
            github:"https://github.com/sushantsingal/Jhoom",
          }
    ];

    const projectsTabTwo = [
          {
            title: "Nike Prototype",
            description: "This is a prototype for the Nike app that streamlines and personalizes the buying and product tracking processes. Its sleek, user-friendly design makes it easy for customers to browse products.This prototype was designed to operate at peak efficiency across many platforms.",
            imgUrl: projImg2,
            link: "https://www.figma.com/proto/Dbk4nbVpJdx3anQ6kYSRyF/Nike-App?page-id=0%3A1&node-id=19-9&p=f&viewport=82%2C462%2C0.11&t=x2stpvOaCt1VuDos-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A222",
          },
          {
            title: "Portfolio Prototype",
            description: "This is a prototype for a portfolio website designed to showcase skills, projects, and achievements with a sleek, user-friendly interface. It features smooth navigation, interactive flows, and supports both light and dark themes for an engaging user experience.",
            imgUrl: projImg7,
            link: "https://www.figma.com/proto/g3PWU5znbYS4pyzlURZtEc?node-id=0-1&t=F1yEFLljBNMWtALU-6",
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
            github: "https://github.com/sushantsingal/Locale-Linkup",
          },
          {
            title: "Wander-Mate",
            description: "Wander Mate is a user-friendly platform designed to simplify and streamline your entire travel planning experience. Whether you’re a solo traveler, a group planner, or a travel enthusiast, Wander Mate ensures your journey is as organized and effortless as possible.",
            imgUrl: projImg6,
            github: "https://github.com/sushantsingal/travel-buddy",
          },
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
                    <Nav.Link eventKey="first">Frontend Design</Nav.Link>
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

