import styles from './product-list.module.css';

import { Title } from '@react-monorepo/shared-ui';
/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <Title text="Welcome to products list!" />
    </div>
  );
}

export default ProductList;
