import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "tel.",
      message: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    document.title = "Contact";
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 offset-2">
            <div
              className="card"
              style={{ textAlign: "left", marginTop: "20px" }}
            >
              <div className="card-header">
                <h3>Send Us Your Feedback</h3>
              </div>
              <div className="card-body">
                <LocalForm onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label htmlFor="fristName" md={3}>
                      First Name:
                    </Label>
                    <Col md={9}>
                      <Input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="lastname" md={3}>
                      Last Name:
                    </Label>
                    <Col md={9}>
                      <Input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="telnum" md={3}>
                      Teliphone Num:
                    </Label>
                    <Col md={9}>
                      <Input
                        type="tel"
                        name="telnum"
                        placeholder="Tel. Number"
                        value={this.state.telnum}
                        onChange={this.handleInputChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="email" md={3}>
                      Email:
                    </Label>
                    <Col md={9}>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 6, offset: 3 }}>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="agree"
                            checked={this.state.agree}
                            onChange={this.handleInputChange}
                          />
                          <strong>May we contact You?</strong>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={{ size: 3, offset: 0 }}>
                      <Input
                        type="select"
                        name="contactType"
                        value={this.state.contactType}
                        onChange={this.handleInputChange}
                      >
                        <option>Tel.</option>
                        <option>Email</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="message" md={3}>
                      Your Feedback
                    </Label>
                    <Col md={9}>
                      <Input
                        type="textarea"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                        rows="6"
                      ></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md={{ size: 9, offset: 3 }}>
                      <Button type="submit" color="primary">
                        Send Feedback
                      </Button>
                    </Col>
                  </FormGroup>
                </LocalForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
