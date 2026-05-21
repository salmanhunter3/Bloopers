import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

import challengesData from "../../Json/Challenges/challenges.json";

import {
  BsTrophyFill,
  BsClockFill
} from "react-icons/bs";

import "./challenges.scss";

function Challenges() {

  return (

    <section className="challenges-page">

      <Container>

        {/* HEADER */}

        <div className="challenge-header">

          <h1>
            Viral Challenges
          </h1>

          <p>
            Participate, compete and win
            exciting rewards.
          </p>

        </div>

        {/* CHALLENGE CARDS */}

        <Row>

          {challengesData.map((item, index) => (

            <Col
              lg={4}
              md={6}
              className="mb-4"
              key={index}
            >

              <Card className="challenge-card">

                <Card.Img
                  variant="top"
                  src={item.image}
                />

                <Card.Body>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="challenge-info">

                    <span>

                      <BsTrophyFill />

                      {item.prize}

                    </span>

                    <span>

                      <BsClockFill />

                      {item.daysLeft}

                    </span>

                  </div>

                  <Button>

                    Join Challenge

                  </Button>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}

export default Challenges;