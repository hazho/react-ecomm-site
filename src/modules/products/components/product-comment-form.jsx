import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../components/button';
import { TextareaField } from '../../../components/textarea-field';
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
      <div className="form-group">
        <label>Your Name</label>
        <input
          value={userName}
          onChange={ev => setUserName(ev.target.value)}
          disabled={submitting}
          required
          className="form-control"
        />
      </div>
      <TextareaField
        label="Your Review"
        value={content}
        onChangeValue={setContent}
        disabled={submitting}
        required
      />
      <div>
        {submitting ? (
          <Spinner />
        ) : (
          <Button color="primary" type="submit">
            Add
          </Button>
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
