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
import videosData from '../../Json/Video/video.json';
import "./home.scss";

import {
  Link
} from "react-router-dom";


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

              <Button
                as={Link}
                to="/explore"
                className="explore-btn"
              >
                {heroData.button1}
              </Button>

              <Button
                as={Link}
                to="/upload"
                className="upload-btn"
              >
                {heroData.button2}
              </Button>

            </div>

          </div>

        </Container>

      </section>

      {/* TRENDING SECTION */}
      <section className="home-trending">

        <Container>

          <div className="section-title">

            <h2>
              🔥 Trending Now
            </h2>

            <p>
              Viral videos everyone is watching
            </p>

          </div>

          <Row>

            {videosData.slice(0, 3).map((item) => (

              <Col
                lg={4}
                key={item.id}
              >

                <Card className="trend-card">

                  <img
                    src={item.image}
                    alt=""
                  />

                  <Card.Body>

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

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

                <Card
                  as={Link}
                  to="/creator"
                  className="trending-card"
                >

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


      {/* Top Creators Section */}
      <section className="top-creators">

        <Container>

          <div className="section-title">

            <h2>
              👑 Top Creators
            </h2>

            <p>
              Most loved creators this week
            </p>

          </div>

          <Row>

            <Col lg={3} md={6}>

              <div className="creator-card">

                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />

                <h4>
                  Alex Gamer
                </h4>

                <span>
                  2.4M Followers
                </span>

              </div>

            </Col>

            <Col lg={3} md={6}>

              <div className="creator-card">

                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                />

                <h4>
                  Meme Queen
                </h4>

                <span>
                  1.8M Followers
                </span>

              </div>

            </Col>

            <Col lg={3} md={6}>

              <div className="creator-card">

                <img
                  src="https://randomuser.me/api/portraits/men/51.jpg"
                  alt=""
                />

                <h4>
                  Sports Dude
                </h4>

                <span>
                  3.1M Followers
                </span>

              </div>

            </Col>

            <Col lg={3} md={6}>

              <div className="creator-card">

                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt=""
                />

                <h4>
                  Funny Lily
                </h4>

                <span>
                  950K Followers
                </span>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* Top Challenges Section */}
      <section className="challenge-section">

        <Container>

          <div className="section-title">

            <h2>
              🏆 Live Challenges
            </h2>

            <p>
              Join viral community challenges
            </p>

          </div>

          <Row>

            <Col lg={4} md={6}>

              <div className="challenge-card">

                <span className="challenge-badge">
                  TRENDING
                </span>

                <h3>
                  😂 Try Not To Laugh
                </h3>

                <p>
                  Upload your funniest blooper
                  and win rewards.
                </p>

                <Button>
                  Join Challenge
                </Button>

              </div>

            </Col>

            <Col lg={4} md={6}>

              <div className="challenge-card">

                <span className="challenge-badge">
                  HOT
                </span>

                <h3>
                  🎮 Gaming Rage
                </h3>

                <p>
                  Share your funniest gaming
                  fail moments.
                </p>

                <Button>
                  Join Challenge
                </Button>

              </div>

            </Col>

            <Col lg={4} md={6}>

              <div className="challenge-card">

                <span className="challenge-badge">
                  NEW
                </span>

                <h3>
                  ⚽ Sports Fails
                </h3>

                <p>
                  Show epic sports bloopers
                  and crazy moments.
                </p>

                <Button>
                  Join Challenge
                </Button>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* STATS SECTION */}
      <section className="stats-section">

        <Container>

          <Row>

            <Col lg={3} md={6}>

              <div className="stats-box">

                <h2>
                  10M+
                </h2>

                <p>
                  Daily Views
                </p>

              </div>

            </Col>

            <Col lg={3} md={6}>

              <div className="stats-box">

                <h2>
                  250K+
                </h2>

                <p>
                  Creators
                </p>

              </div>

            </Col>

            <Col lg={3} md={6}>

              <div className="stats-box">

                <h2>
                  50K+
                </h2>

                <p>
                  Videos Uploaded
                </p>

              </div>

            </Col>

            <Col lg={3} md={6}>

              <div className="stats-box">

                <h2>
                  120+
                </h2>

                <p>
                  Countries
                </p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* FEATURED VIDEO SECTION */}
      <section className="featured-video">

        <Container>

          <div className="featured-overlay">

            <span className="featured-tag">
              🔥 Featured Video
            </span>

            <h1>
              Ultimate Gaming Rage Compilation
            </h1>

            <p>
              Watch the funniest gaming fails,
              crazy reactions and viral moments
              from top creators worldwide.
            </p>

            <div className="featured-buttons">

              <Button className="watch-btn">

                ▶ Watch Now

              </Button>

              <Button className="info-btn">

                More Info

              </Button>

            </div>

          </div>

        </Container>

      </section>

      {/* MEME SECTION */}
      <section className="meme-section">

        <Container>

          <div className="meme-box">

            <div className="meme-image">

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                alt=""
              />

            </div>

            <div className="meme-content">

              <span className="meme-tag">

                😂 Meme Of The Day

              </span>

              <h2>

                When You Say “One Last Game”
                At 2AM 🎮

              </h2>

              <p>

                Every gamer knows this feeling 😂
                The funniest gaming meme chosen
                by the BLOOPERS community today.

              </p>

              <Button>

                View More Memes

              </Button>

            </div>

          </div>

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

      {/* MARQUEE SECTION */}
      <section className="marquee-section">

        <div className="marquee-track">

          {videosData.map((item) => (

            <div
              className="marquee-card"
              key={item.id}
            >

              <div className="marquee-image">

                <img
                  src={item.image}
                  alt=""
                />

                <span className="video-category">

                  {item.category}

                </span>

              </div>

              <div className="marquee-content">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.creator}
                </p>

              </div>

            </div>

          ))}

          {videosData.map((item) => (

            <div
              className="marquee-card"
              key={`duplicate-${item.id}`}
            >

              <div className="marquee-image">

                <img
                  src={item.image}
                  alt=""
                />

                <span className="video-category">

                  {item.category}

                </span>

              </div>

              <div className="marquee-content">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.creator}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Review SECTION */}
      <section className="reviews-section">

        <Container>

          <div className="section-title">

            <h2>
              ⭐ What Our Users Say
            </h2>

            <p>
              Real reactions from the BLOOPERS community
            </p>

          </div>

          <Row>

            <Col lg={4} md={6}>

              <div className="review-card">

                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt=""
                />

                <h4>Alex Gamer</h4>

                <p>
                  "I can't stop watching! This app keeps me laughing all day."
                </p>

              </div>

            </Col>

            <Col lg={4} md={6}>

              <div className="review-card">

                <img
                  src="https://randomuser.me/api/portraits/women/25.jpg"
                  alt=""
                />

                <h4>Meme Queen</h4>

                <p>
                  "The memes are so good and the challenges are super fun!"
                </p>

              </div>

            </Col>

            <Col lg={4} md={6}>

              <div className="review-card">

                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  alt=""
                />

                <h4>Sports Dude</h4>

                <p>
                  "Finally an app that has both gaming and sports fails!"
                </p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* LIVE STREAM SECTION */}

      <section className="live-stream-section">

        <Container>

          <div className="section-title">

            <h2>
              🔴 Live Right Now
            </h2>

            <p>
              Watch creators streaming live
            </p>

          </div>

          <Row>

            <Col lg={6}>

              <div className="live-stream-card">

                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                />

                <div className="live-overlay">

                  <span className="live-badge">

                    LIVE

                  </span>

                  <h3>

                    Alex Gamer Live Stream

                  </h3>

                  <p>

                    12.4K Watching

                  </p>

                </div>

              </div>

            </Col>

            <Col lg={6}>

              <div className="live-stream-card">

                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                />

                <div className="live-overlay">

                  <span className="live-badge">

                    LIVE

                  </span>

                  <h3>

                    Sports Fail Reactions

                  </h3>

                  <p>

                    8.1K Watching

                  </p>

                </div>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* PREMIUM CTA SECTION */}

      <section className="premium-cta">

        <Container>

          <div className="premium-box">

            <div className="premium-content">

              <span className="premium-tag">

                🚀 PREMIUM ACCESS

              </span>

              <h2>

                Become A Verified Creator

              </h2>

              <p>

                Unlock AI editing tools, unlimited uploads,
                premium analytics, creator badges,
                exclusive livestream access and more.

              </p>

              <div className="premium-buttons">

                <Button
                  as={Link}
                  to="/premium"
                  className="premium-btn"
                >

                  Upgrade Now

                </Button>

                <Button
                  className="learn-btn"
                >

                  Learn More

                </Button>

              </div>

            </div>

            <div className="premium-image">

              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
                alt=""
              />

            </div>

          </div>

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