import React, { Component } from "react";
import { Button, FormGroup, Label, Col } from "reactstrap";
import { Form, Control, Errors, actions } from "react-redux-form";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    resetFeedbackForm: () => {
      dispatch(actions.reset("feedback"));
    },
  };
};

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(val);

class Contact extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstname: "",
  //     lastname: "",
  //     telnum: "",
  //     email: "",
  //     agree: false,
  //     contactType: "tel.",
  //     message: "",
  //   };
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleInputChange = (event) => {
  //   const value =
  //     event.target.type === "checkbox"
  //        event.target.checked
  //       : event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  handleSubmit = (values) => {
    console.log(values);
    this.props.resetFeedbackForm();
    // values.preventDefault();
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
                <Form
                  model="feedback"
                  onSubmit={(values) => this.handleSubmit(values)}
                >
                  <FormGroup row>
                    <Label htmlFor="firstname" md={3}>
                      First Name:
                    </Label>
                    <Col md={9}>
                      <Control.text
                        model=".firstname"
                        name="firstname"
                        placeholder="First Name"
                        className="form-control"
                        validators={{ required }}
                      />
                      <Errors
                        className="text-danger"
                        model=".firstname"
                        show="touched"
                        messages={{
                          required: "Required",
                        }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="lastname" md={3}>
                      Last Name:
                    </Label>
                    <Col md={9}>
                      <Control.text
                        model=".lastname"
                        name="lastname"
                        placeholder="Last Name"
                        className="form-control"
                        validators={{ required }}
                      />
                      <Errors
                        className="text-danger"
                        model=".lastname"
                        show="touched"
                        messages={{
                          required: "Required",
                        }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="telnum" md={3}>
                      Teliphone Num:
                    </Label>
                    <Col md={9}>
                      <Control.text
                        model=".telnum"
                        name="telnum"
                        placeholder="Tel. Number"
                        className="form-control"
                        validators={{ required, isNumber }}
                      />
                      <Errors
                        className="text-danger"
                        model=".telnum"
                        show="touched"
                        messages={{
                          required: "Required, ",
                          isNumber: "Invalid Number",
                        }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="email" md={3}>
                      Email:
                    </Label>
                    <Col md={9}>
                      <Control.text
                        model=".email"
                        name="email"
                        placeholder="Email Address"
                        className="form-control"
                        validators={{ required, validEmail }}
                      />
                      <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages={{
                          required: "Required, ",
                          validEmail: "Invalid Email",
                        }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 6, offset: 3 }}>
                      <FormGroup check>
                        <Label check>
                          <Control.checkbox
                            model=".agree"
                            name="agree"
                            className="form-check-input"
                          />
                          <strong className="ms-2"> May we contact You?</strong>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={{ size: 3, offset: 0 }}>
                      <Control.select
                        model=".contactType"
                        name="contactType"
                        className="form-control"
                      >
                        <option>Tel.</option>
                        <option>Email</option>
                      </Control.select>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="message" md={3}>
                      Your Feedback
                    </Label>
                    <Col md={9}>
                      <Control.textarea
                        model=".message"
                        name="message"
                        rows="2"
                        className="form-control"
                        validators={{ required }}
                      />
                      <Errors
                        className="text-danger"
                        model=".message"
                        show="touched"
                        messages={{
                          required: "Required Messages",
                        }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md={{ size: 9, offset: 3 }}>
                      <Button type="submit" color="primary">
                        Send Feedback
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Contact);
