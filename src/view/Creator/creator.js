import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

import creatorData from '../../Json/Creator/creator.json';
import creatorVideos from '../../Json/Creator/creatorVideos.json';

import {
  FaInstagram,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";

import "./creator.scss";

function Creator() {

  return (

    <section className="creator-page">

      {/* BANNER */}

      <div
        className="creator-banner"
        style={{
          backgroundImage:
            `url(${creatorData.banner})`
        }}
      />

      <Container>

        {/* PROFILE */}

        <div className="creator-profile">

          <img
            src={creatorData.avatar}
            alt=""
            className="creator-avatar"
          />

          <h1>
            {creatorData.name}
          </h1>

          <span className="username">
            {creatorData.username}
          </span>

          <p className="followers">
            {creatorData.followers}
          </p>

          <p className="bio">
            {creatorData.bio}
          </p>

          <div className="social-icons">

            <FaInstagram />

            <FaYoutube />

            <FaTwitter />

          </div>

          <Button>
            Follow Creator
          </Button>

        </div>

        {/* VIDEOS */}

        <div className="creator-videos">

          <h2>
            Uploaded Bloopers
          </h2>

          <Row>

            {creatorVideos.map((item, index) => (

              <Col
                lg={4}
                md={6}
                className="mb-4"
                key={index}
              >

                <Card className="video-card">

                  <Card.Img
                    variant="top"
                    src={item.image}
                  />

                  <Card.Body>

                    <Card.Title>
                      {item.title}
                    </Card.Title>

                    <p>
                      {item.views}
                    </p>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        </div>

      </Container>

    </section>
  );
}

export default Creator;