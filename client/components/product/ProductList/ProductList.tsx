import { Products } from 'types';

import ProductCard from '../ProductCard';

import styles from './ProductList.module.css';

interface Props {
  products: Products;
}

const ProductList = ({ products }: Props) => {
  return (
    <div className={styles.productGrid} aria-label="Product list">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductList;
