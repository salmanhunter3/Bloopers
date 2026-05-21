import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

import videosData from '../../Json/Video/video.json';

import relatedVideos from '../../Json/RelatedVideos/relatedvideos.json';

import commentsData from '../../Json/Comments/comments.json';

import { useParams } from "react-router-dom";

import {
  BsHeartFill,
  BsShareFill
} from "react-icons/bs";

import "./video.scss";

function Video() {

  const { id } = useParams();

  const videoData = videosData.find(
    (item) => item.id === Number(id)
  );


  return (

    <section className="video-page">

      <Container>

        <Row>

          {/* LEFT SIDE */}

          <Col lg={8}>

            {/* VIDEO */}

            <div className="video-banner">

              <video
                controls
                autoPlay
                muted
                className="main-video-player"
              >

                <source
                  src={videoData.video}
                  type="video/mp4"
                />

              </video>

            </div>

            {/* VIDEO INFO */}

            <div className="video-info">

              <h1>
                {videoData.title}
              </h1>

              <div className="video-stats">

                <span>
                  {videoData.views}
                </span>

                <span>
                  {videoData.likes}
                </span>

              </div>

              <div className="video-actions">

                <Button>

                  <BsHeartFill />

                  Like

                </Button>

                <Button>

                  <BsShareFill />

                  Share

                </Button>

              </div>

              <div className="creator-box">

                <h4>
                  {videoData.creator}
                </h4>

                <p>
                  Top gaming creator on BLOOPERS
                </p>

              </div>

              <p className="video-description">

                {videoData.description}

              </p>

            </div>

            {/* COMMENTS */}

            <div className="comments-section">

              <h2>
                Comments
              </h2>

              {commentsData.map((item, index) => (

                <div
                  className="comment-box"
                  key={index}
                >

                  <h5>
                    {item.name}
                  </h5>

                  <p>
                    {item.comment}
                  </p>

                </div>

              ))}

            </div>

          </Col>

          {/* RIGHT SIDE */}

          <Col lg={4}>

            <div className="related-videos">

              <h3>
                Related Videos
              </h3>

              {relatedVideos.map((item, index) => (

                <Card
                  className="related-card"
                  key={index}
                >

                  <Row className="g-0">

                    <Col xs={5}>

                      <img
                        src={item.image}
                        alt=""
                      />

                    </Col>

                    <Col xs={7}>

                      <Card.Body>

                        <Card.Title>
                          {item.title}
                        </Card.Title>

                      </Card.Body>

                    </Col>

                  </Row>

                </Card>

              ))}

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  );
}

export default Video;