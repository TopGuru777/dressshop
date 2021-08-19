import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { WishlistButton } from '@/components/wishlist';
import { Product } from '@/types';
import formatPrice from '@/utils/formatPrice';

import styles from './ProductCard.module.css';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`}>
      <a>
        <div>
          <div className={styles.productImgWrapper}>
            <Image src={product.imageURL} alt={product.name} width={500} height={500} />
            <div className={styles.wishlistButtonContainer}>
              <WishlistButton productId={product._id} />
            </div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productPrice}>{formatPrice(product.price)}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
