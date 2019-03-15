import React from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { Field } from '../../../components/field';
import { Spinner } from '../../../components/spinner';
import { selectUser } from '../../auth/auth.selectors';
import { submitAddProductComment } from '../product.actions';

function ProductCommentFormContent({ productId, submitForm, user }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [userName, setUserName] = React.useState(user ? user.name : '');
  const [content, setContent] = React.useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    setSubmitting(true);
    submitForm({
      userName,
      content,
      productId,
      createdOn: Date.now()
    }).then(() => {
      setSubmitting(false);
      setContent('');
      setUserName('');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend>Add Your Review</legend>
      <Field>
        <label>Your Name</label>
        <input
          value={userName}
          onChange={ev => setUserName(ev.target.value)}
          disabled={submitting}
          required
          className="form-control"
        />
      </Field>
      <Field>
        <label>Your Review</label>
        <Textarea
          id="product-comment-form-content"
          value={content}
          onChange={ev => setContent(ev.target.value)}
          minRows={3}
          disabled={submitting}
          required
          className="form-control"
        />
      </Field>
      <div>
        {submitting ? (
          <Spinner />
        ) : (
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        )}
      </div>
    </form>
  );
}

const mapStates = state => ({
  user: selectUser(state)
});

const mapDispatch = {
  submitForm: submitAddProductComment
};

export const ProductCommentForm = connect(
  mapStates,
  mapDispatch
)(ProductCommentFormContent);
