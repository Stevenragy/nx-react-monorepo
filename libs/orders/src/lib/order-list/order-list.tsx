import styles from './order-list.module.css';
import { Title } from '@react-monorepo/shared-ui';

/* eslint-disable-next-line */
export interface OrderListProps {}

export function OrderList(props: OrderListProps) {
  return (
    <div className={styles['container']}>
      <Title text="Welcome to orders list!" />
    </div>
  );
}

export default OrderList;
