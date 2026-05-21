import React, {
    useState
} from "react";

import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Modal
} from "react-bootstrap";

import exploreData from "../../Json/Explore/explore.json";

import { useNavigate } from "react-router-dom";


import {
    BsFillPlayFill,
    BsHeart,
    BsHeartFill
} from "react-icons/bs";

import "./explore.scss";


function Explore({ darkMode }) {


    const [search, setSearch] = useState("");

    const navigate = useNavigate();

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

    const [show, setShow] = useState(false);

    const [selectedVideo, setSelectedVideo] = useState(null);

    const [savedVideos, setSavedVideos] =
        useState([]);

    const handleShow = (item) => {

        setSelectedVideo(item);

        setShow(true);
    };

    const handleClose = () => {

        setShow(false);
    };

    const handleSaveVideo = (title) => {

        if (savedVideos.includes(title)) {

            setSavedVideos(

                savedVideos.filter(
                    (item) => item !== title
                )
            );

        } else {

            setSavedVideos([
                ...savedVideos,
                title
            ]);
        }
    };

    const handleRandomVideo = () => {

        const randomIndex = Math.floor(
            Math.random() * filteredData.length
        );

        const randomVideo =
            filteredData[randomIndex];

        setSelectedVideo(randomVideo);

        setShow(true);
    };

    return (
        <React.Fragment>
            <section
                className={
                    darkMode
                        ?
                        "explore-page dark"
                        :
                        "explore-page light"
                }
            >

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

                    <div className="explore-actions">





                        {/* RANDOM BUTTON */}

                        <Button
                            className="random-btn"
                            onClick={handleRandomVideo}
                        >

                            🎲 Surprise Me

                        </Button>

                    </div>



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

                                <Card
                                    onClick={() =>
                                        navigate(`/video/${item.id}`)
                                    }
                                    className="explore-card"
                                >

                                    <div className="video-thumbnail">

                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                        />

                                        {/* PLAY BUTTON */}

                                        <div className="play-button">

                                            <BsFillPlayFill />

                                        </div>

                                        {/* DURATION */}

                                        <span className="duration">

                                            {item.duration}

                                        </span>

                                    </div>

                                    <Card.Body>

                                        <div className="save-btn">

                                            <Button
                                                onClick={(e) => {

                                                    e.stopPropagation();

                                                    handleSaveVideo(item.title);
                                                }}
                                            >

                                                {savedVideos.includes(item.title)

                                                    ?

                                                    <BsHeartFill />

                                                    :

                                                    <BsHeart />

                                                }

                                            </Button>

                                        </div>

                                        <span className="category-tag">

                                            {item.category}

                                        </span>

                                        <Card.Title>

                                            {item.title}

                                        </Card.Title>

                                        <div className="video-info">

                                            <span>
                                                {item.creator}
                                            </span>

                                            <span>
                                                {item.views}
                                            </span>

                                        </div>

                                    </Card.Body>

                                </Card>

                            </Col>

                        ))}

                    </Row>

                </Container>

            </section>

            <Modal
                show={show}
                onHide={handleClose}
                centered
            >

                <Modal.Body className="video-modal">

                    {selectedVideo && (

                        <>

                            <img
                                src={selectedVideo.image}
                                alt=""
                                className="modal-video w-100"
                            />

                            <h2>
                                {selectedVideo.title}
                            </h2>

                            <p>
                                Funny viral blooper moment 😂
                            </p>

                        </>

                    )}

                </Modal.Body>

            </Modal>
        </React.Fragment>
    );
}

export default Explore;