import React, {
  useState
} from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button
} from "react-bootstrap";

import exploreData from "../../Json/Explore/explore.json";

import "./explore.scss";

function Explore() {

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const categories = [
    "All",
    "Gaming",
    "Sports",
    "Memes",
    "Animals"
  ];

  const filteredData = exploreData.filter((item) => {

    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All"
      ||
      item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (

    <section className="explore-page">

      <Container>

        {/* PAGE TITLE */}

        <div className="explore-header">

          <h1>
            Explore Viral Bloopers
          </h1>

          <p>
            Discover trending funny moments
            from creators worldwide.
          </p>

        </div>

        {/* SEARCH BAR */}

        <Form className="search-form">

          <Form.Control
            type="text"
            placeholder="Search bloopers..."
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </Form>

        {/* FILTER BUTTONS */}

        <div className="filter-buttons">

          {categories.map((item, index) => (

            <Button
              key={index}
              className={
                activeCategory === item
                  ? "active-btn"
                  : ""
              }
              onClick={() =>
                setActiveCategory(item)
              }
            >
              {item}
            </Button>

          ))}

        </div>

        {/* VIDEO CARDS */}

        <Row>

          {filteredData.map((item, index) => (

            <Col
              lg={4}
              md={6}
              className="mb-4"
              key={index}
            >

              <Card className="explore-card">

                <Card.Img
                  variant="top"
                  src={item.image}
                />

                <Card.Body>

                  <span className="category-tag">
                    {item.category}
                  </span>

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
  );
}

export default Explore;