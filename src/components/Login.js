import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import loginUser from "../components/actions/loginAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import history from "../utils/history"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: ''
    }
  }

  handleOnClickSubmit = () => {
    this.props.loginUser(this.state.emailId, this.state.password)
    this.forceUpdate()
  }

  handleOnClickReset =()=>{
    history.push("/");
  }

  render() {

    let error
    if (this.props.loginErrMsg) {
      error = <p className="text-danger">{this.props.loginErrMsg}</p>
    }
    const checkLogin = this.props.isLoggedIn
    if (checkLogin) {
      history.push("/");
    }
    return (
      <div className="row text-center margin">
        <div className="col-sm-4"></div>
        <div className="col-sm-5">
          <div className="card">
            <div>
              <i className="fa fa-mobile fa-4x"></i>
            </div>
            <h1 className="h3 mb-5 font-weight-normal">Sign In</h1>
            <div className="card-body">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control type="email" onChange={event => this.setState({ emailId: event.target.value })} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={event => this.setState({ password: event.target.value })} />
                </Form.Group>
                <Button className="margin" variant="primary" onClick={() => this.handleOnClickSubmit()}>
                  Login
                  </Button>
                  {error}
              </Form>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    user: state.loginReducer.user,
    loginErrMsg: state.loginReducer.loginErrMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (emailId, password) => {
      dispatch(loginUser(emailId, password))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));