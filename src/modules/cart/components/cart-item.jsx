import { Link } from '@reach/router';
import { formatMoney } from 'accounting';
import React from 'react';
import { ProductImage } from '../../products/components/product-image';

export function CartItem({ index, item, onDecrement, onIncrement, onDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="col-xs-2 col-lg-1">
        {item.product.images && (
          <ProductImage
            url={item.product.images.thumbStandard}
            webpUrl={item.product.images.thumbWebp}
            alt={item.product.name}
            width={188}
            height={188}
          />
        )}
      </td>
      <td>
        <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
      </td>
      <td className="text-right">{item.product.price}</td>
      <td>
        <button
          onClick={onDecrement}
          className="btn btn-primary btn-sm"
          disabled={item.qty === 1}
        >
          -
        </button>{' '}
        {item.qty}{' '}
        <button onClick={onIncrement} className="btn btn-primary btn-sm">
          +
        </button>
      </td>
      <td className="text-right">
        {item.product.price &&
          formatMoney(Number(item.product.price) * item.qty, '')}
      </td>
      <td>
        <button onClick={onDelete} className="btn btn-danger btn-sm">
          Remove
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
