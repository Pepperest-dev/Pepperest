import React from 'react';
import { withAuthLayout } from 'components/layouts';
import {
  AuthFooter, Alert,
} from 'components/blocks';
import { LoginForm } from 'components/forms'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = (props) => {
  if(props.token){
    return <Redirect to="/payments"/>;
  }
  return(
    <>
      <div className="auth-panel">
        <div className="auth-panel__head">
          <h4 className="auth-panel__head-header">Login</h4>
          <p className="auth-panel__head-help">Sign into your account</p>
        </div>
        <div className="auth-panel-main">
          <LoginForm />
        </div>
      </div>
      <AuthFooter
        value="SIGN UP"
        url="/register"
        label="I DON'T HAVE AN ACCOUNT ?"
        isAlternate
      />{
        <Alert
          message= {props.error}
          isError = {true}
        />
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
      token: state.auth.token,
      error: state.auth.error
  };
};

export default withAuthLayout(connect(mapStateToProps, null )(Login), {});
