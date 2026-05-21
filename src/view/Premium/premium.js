import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

import premiumData from "../../Json/Premium/premium.json";

import {
  BsCheckCircleFill
} from "react-icons/bs";

import "./premium.scss";

function Premium() {

  return (

    <section className="premium-page">

      <Container>

        {/* HEADER */}

        <div className="premium-header">

          <h1>
            Upgrade To Premium
          </h1>

          <p>
            Unlock powerful creator tools
            and premium features.
          </p>

        </div>

        {/* PRICING */}

        <Row>

          {premiumData.map((item, index) => (

            <Col
              lg={4}
              md={6}
              className="mb-4"
              key={index}
            >

              <Card className="pricing-card">

                <Card.Body>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="price">

                    {item.price}

                    <span>
                      {item.duration}
                    </span>

                  </div>

                  <ul>

                    {item.features.map((feature, i) => (

                      <li key={i}>

                        <BsCheckCircleFill />

                        {feature}

                      </li>

                    ))}

                  </ul>

                  <Button>
                    Get Started
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

export default Premium;