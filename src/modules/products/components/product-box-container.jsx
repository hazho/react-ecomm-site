import React from 'react';
import { connect } from 'react-redux';
import { loadProductDetail } from '../product.actions';
import { selectProduct } from '../product.selectors';
import { ProductBox } from './product-box';

function ProductBoxContainerContent({
  productId,
  productDetails,
  loadDetails
}) {
  React.useEffect(() => {
    if (!productDetails) {
      loadDetails();
    }
  }, [productId, productDetails]);

  return productDetails ? <ProductBox {...productDetails} /> : null;
}

const mapStates = (state, ownProps) => ({
  productDetails: selectProduct(state, ownProps.productId)
});

const mapDispatch = (dispatch, ownProps) => ({
  loadDetails: () => dispatch(loadProductDetail(ownProps.productId))
});

export const ProductBoxContainer = connect(
  mapStates,
  mapDispatch
)(ProductBoxContainerContent);
