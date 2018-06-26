import React, { Component } from 'react'
import { Button, Modal,Form,FormGroup,Label, Col,Input, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import config from '../../config.json'

import Auth from '../../Auth/Auth';
import '../../App.css';


class LogIn extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            username: "",
            password: "",
            isAuthenticated: false, 
            user: null, 
            token: ''
        };

        this.toggle = this.toggle.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit(event) {
        this.props.confirm({
            name: this.state.username,
            password: this.state.passsword
        });
    }
    submitAndClose = () => {
        this.handleSubmit();
        this.toggle()
    };

    // logout = () => {
    //     this.setState({isAuthenticated: false, token: '', user: null})
    // };

    onFailure = (error) => {
        alert(error);
    };

    googleResponse = (response) => {
        //Store accessToken and profileObj for now. 

        // const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken, profile: response.profileObj}, null, 2)], {type : 'application/json'});
        // const options = {
        //     method: 'POST',
        //     body: tokenBlob,
        //     mode: 'cors',
        //     cache: 'default'
        // };
        // fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
        //     const token = r.headers.get('x-auth-token');
        //     r.json().then(user => {
        //         if (token) {
        //             this.setState({isAuthenticated: true, user, token})
        //         }
        //     });
        // })
        console.log(response.accessToken, response.profileObj)
    };

    render() {

            return (
                <div>
                    <Button className="login-button" color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
                        <ModalBody className="login modal-body">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Col sm={8}>
                                        <Input className="login-rounded" type="text" name="username" placeholder="Username" onChange={this.handleUsernameChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={8}>
                                        <Input className="login-rounded" type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
                                    </Col>
                                </FormGroup>
                                <Button className="login-btn" color="primary" onClick={this.submitAndClose}>Sign In</Button>{' '}
                            </Form>
                            <p>Forgot Password?</p>
                            <hr />
                            <GoogleLogin
                              clientId={config.GOOGLE_CLIENT_ID}
                              onSuccess={this.googleResponse}
                              onFailure={this.onFailure}
                              className="google-img"
                            />
                            <hr />
                            <p>Not a member yet?</p>
                            <Button className="login-btn" color="primary" onClick={this.submitAndClose}>Sign Up</Button>{' '}
                        </ModalBody>
                        <ModalFooter>                        
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            );       
        }
}

export default LogIn;