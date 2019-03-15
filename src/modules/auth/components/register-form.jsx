import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../../../components/spinner';
import { attemptLogout, register } from '../auth.actions';
import { AuthStatus } from '../auth.constants';
import { selectAuthError, selectAuthStatus } from '../auth.selectors';

function RegisterFormContent({ status, error, register, logout }) {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');

  if (status === AuthStatus.Authenticated) {
    return (
      <div className="alert alert-success">
        You're already login!
        <div>
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    );
  }

  const onSubmit = ev => {
    ev.preventDefault();
    register({ name, email });
  };
  const isSubmitting = status === AuthStatus.Authenticating;

  return (
    <form onSubmit={onSubmit}>
      <legend>Signup</legend>
      {isSubmitting && <Spinner />}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label htmlFor="register-name">Name</label>
        <input
          className="form-control"
          id="name"
          value={name}
          onChange={ev => setName(ev.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        Signup
      </button>
    </form>
  );
}

const mapStates = state => ({
  status: selectAuthStatus(state),
  error: selectAuthError(state)
});

const mapDispatch = {
  register,
  logout: attemptLogout
};

export const RegisterForm = connect(
  mapStates,
  mapDispatch
)(RegisterFormContent);
