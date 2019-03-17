import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../components/button';
import { FormGroup } from '../../../components/form-group';
import { Spinner } from '../../../components/spinner';
import { attemptLogin, attemptLogout } from '../auth.actions';
import { AuthStatus } from '../auth.constants';
import { selectAuthError, selectAuthStatus } from '../auth.selectors';

function LoginFormContent({ status, error, login, logout }) {
  const [email, setEmail] = React.useState('');

  if (status === AuthStatus.Authenticated) {
    return (
      <div className="alert alert-success">
        You're already login!
        <div>
          <Button color="danger" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    );
  }

  const onSubmit = ev => {
    ev.preventDefault();
    login(email);
  };
  const isSubmitting = status === AuthStatus.Authenticating;

  return (
    <form onSubmit={onSubmit}>
      <legend>Login</legend>
      {isSubmitting && <Spinner />}
      {error && <div className="alert alert-danger">{error}</div>}
      <FormGroup validationStatus="error">
        <label htmlFor="login-email">Email</label>
        <input
          className="form-control"
          type="email"
          id="login-email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
          required
          disabled={isSubmitting}
        />
      </FormGroup>
      <Button
        className="login-btn"
        color="primary"
        type="submit"
        disabled={isSubmitting}
      >
        Login
      </Button>
    </form>
  );
}

const mapStates = state => ({
  status: selectAuthStatus(state),
  error: selectAuthError(state)
});

const mapDispatch = {
  login: attemptLogin,
  logout: attemptLogout
};

export const LoginForm = connect(
  mapStates,
  mapDispatch
)(LoginFormContent);
