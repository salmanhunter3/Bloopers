import React, {
  useState
} from "react";

import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

import {
  BsCloudUpload,
  BsImage
} from "react-icons/bs";

import "./upload.scss";

function Upload() {

  const [fileName, setFileName] =
    useState("");

  const handleFileChange = (e) => {

    if (e.target.files[0]) {

      setFileName(
        e.target.files[0].name
      );

    }
  };

  return (

    <section className="upload-page">

      <Container>

        <div className="upload-header">

          <h1>
            Upload Your Blooper
          </h1>

          <p>
            Share your funniest moments
            with the community.
          </p>

        </div>

        <Row className="justify-content-center">

          <Col lg={8}>

            <div className="upload-card">

              {/* DRAG AREA */}

              <label className="upload-box">

                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />

                <BsCloudUpload className="upload-icon" />

                <h4>
                  Drag & Drop Video
                </h4>

                <p>
                  or click to browse files
                </p>

                {fileName && (

                  <div className="file-name">

                    <BsImage />

                    {fileName}

                  </div>

                )}

              </label>

              {/* FORM */}

              <Form>

                <Form.Group className="mb-4">

                  <Form.Label>
                    Video Title
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter video title"
                  />

                </Form.Group>

                <Form.Group className="mb-4">

                  <Form.Label>
                    Category
                  </Form.Label>

                  <Form.Select>

                    <option>
                      Select Category
                    </option>

                    <option>
                      Gaming
                    </option>

                    <option>
                      Sports
                    </option>

                    <option>
                      Memes
                    </option>

                    <option>
                      Animals
                    </option>

                  </Form.Select>

                </Form.Group>

                <Form.Group className="mb-4">

                  <Form.Label>
                    Description
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write something funny..."
                  />

                </Form.Group>

                <Button className="upload-btn">

                  Upload Blooper

                </Button>

              </Form>

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  );
}

export default Upload;