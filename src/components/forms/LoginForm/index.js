import React, { useState, useEffect } from 'react';
import {
  FacebookButton, GoogleButton, Button
} from 'components/blocks';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';
import { SOCIAL_PROVIDERS } from 'libs/constants/PepperestWebServices/Auth'

const LoginForm = (props) => {
  const [state, setState] = useState({
    loading: false,
    loginForm: {
      email: {
        elementConfig: {
          name: 'email',
          type: 'text',
          placeholder: 'Enter Email Address',
          label: 'Email Address',
          id: 'email',
        },
        value: '',
        validation: {
          rules: {
            required: 'Email is required',
            RegExp: {
              value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: 'Invalid email address',
            },
          },
          errorMessage: null,
        },
      },
      password: {
        elementConfig: {
          name: 'password',
          type: 'password',
          placeholder: 'Enter Password',
          label: 'Password',
          id: 'password',
        },
        value: '',
        validation: {
          rules: {
            required: 'Password is required',
          },
          errorMessage: null,
        },
        hasForgotPasswordLabel: true,
      },
    },
  });

  const { register, handleSubmit, errors } = useForm();

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedloginForm = {
      ...state.loginForm,
    };
    const updatedFormElement = {
      ...updatedloginForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedloginForm[inputIdentifier] = updatedFormElement;
    setState({ ...state, loginForm: updatedloginForm });
  };
  const loginHandler = () => {
    props.onLogin(state.loginForm.email.value, state.loginForm.password.value);
  };

  useEffect(() => {
    const code = getParamFromUrl('code');
    if(code) {
      const provider = JSON.parse(getParamFromUrl('state')).provider;
      attemptSocialLogin(provider, code);
    }
  });
  const getParamFromUrl = (param) => {
    const urlParams = (new URL(document.location)).searchParams;
    return urlParams.get(param);
  }

  const loginWithFacebook = () => {
    const client_id = SOCIAL_PROVIDERS.facebook.client_id;
    const redirectURL = SOCIAL_PROVIDERS.facebook.redirectURL;
    const baseURL = SOCIAL_PROVIDERS.facebook.baseURL;
    const facebookAuthURL = `${baseURL}?client_id=${client_id}&redirect_uri=${redirectURL}&state={"provider":"facebook"}`;
    window.location.replace(facebookAuthURL);
  }

  const loginWithGoogle = () => {
    const client_id = SOCIAL_PROVIDERS.google.client_id
    const redirectURL = SOCIAL_PROVIDERS.google.redirectURL
    const baseURL = SOCIAL_PROVIDERS.google.baseURL;
    const googleAuthURL = `${baseURL}?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=code&redirect_uri=${redirectURL}&client_id=${client_id}&state={"provider":"google"}`
    window.location.replace(googleAuthURL);
  }

  const attemptSocialLogin = (provider, code) => {
    // console.log(code);
    const payLoad = {
      provider : provider,
      code : code
    }
    props.onSocialLogin(payLoad);
  }

  return (
    <>
      <form className="nsForm auth-panel-form" onSubmit={handleSubmit(loginHandler)}>
        {Object.values(state.loginForm).map((formInput) => (
          <AbstractInput
            key={formInput.elementConfig.name}
            value={formInput.value}
            elementConfig={formInput.elementConfig}
            onChange={(event) => inputChangedHandler(event, formInput.elementConfig.id)}
            validation={register(formInput.validation.rules)}
            errorMessage={(errors[formInput.elementConfig.name] && errors[formInput.elementConfig.name].message) || formInput.validation.errorMessage}
            hasForgotPasswordLabel={formInput.hasForgotPasswordLabel}
          />
        ))}
        {
          props.loading ? <SpinnerIcon />
          : <>
            <Button
              type="submit"
              value="SIGN IN"
              name="sign_in"
              handleClick={() => {}}
            />
            <div className="auth-panel-divider">
                <div className="auth-panel-divider__line" />
                <div className="auth-panel-divider__circle">
                  <span className="auth-panel-divider-text">OR</span>
                </div>
                <div className="auth-panel-divider__line" />
            </div>
            <FacebookButton onClick = {loginWithFacebook}/>
            <GoogleButton onClick = {loginWithGoogle}/>
          </>
        }
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => dispatch(actions.login(email, password)),
  onSocialLogin: (payLoad) => dispatch(actions.socialLogin(payLoad)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
