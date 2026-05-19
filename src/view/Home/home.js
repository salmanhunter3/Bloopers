import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

import heroData from '../../Json/Home/hero.json';
import trendingData from '../../Json/Home/trending.json';
import categoriesData from '../../Json/Home/categories.json';
import "./home.scss";


function Home() {

  return (

    <>

      {/* HERO SECTION */}

      <section className="hero-section">

        <Container>

          <div className="hero-content">

            <h1>
              {heroData.title}
            </h1>

            <p>
              {heroData.description}
            </p>

            <div className="hero-buttons">

              <Button className="explore-btn">

                {heroData.button1}

              </Button>

              <Button className="upload-btn">

                {heroData.button2}

              </Button>

            </div>

          </div>

        </Container>

      </section>

      {/* TRENDING SECTION */}

      <section className="trending-section">

        <Container>

          <h2 className="section-title">
            Trending Bloopers
          </h2>

          <Row>

            {trendingData.map((item, index) => (

              <Col
                lg={4}
                md={6}
                className="mb-4"
                key={index}
              >

                <Card className="trending-card">

                  <Card.Img
                    variant="top"
                    src={item.image}
                  />

                  <Card.Body>

                    <Card.Title>
                      {item.title}
                    </Card.Title>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

      {/* CATEGORIES SECTION */}

      <section className="categories-section">

        <Container>

          <h2 className="section-title">
            Explore Categories
          </h2>

          <Row>

            {categoriesData.map((item, index) => (

              <Col
                lg={3}
                md={6}
                className="mb-4"
                key={index}
              >

                <div className="category-card">

                  <img
                    src={item.image}
                    alt=""
                  />

                  <h4>
                    {item.name}
                  </h4>

                </div>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

      {/* CTA SECTION */}

      <section className="cta-section">

        <Container>

          <Row className="align-items-center">

            <Col lg={6}>

              <h2>
                Never Miss Viral Moments
              </h2>

              <p>
                Subscribe and get the funniest clips
                directly in your inbox.
              </p>

            </Col>

            <Col lg={6}>

              <div className="cta-form">

                <input
                  type="email"
                  placeholder="Enter your email"
                />

                <Button>
                  Subscribe
                </Button>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

    </>

  );
}

export default Home;