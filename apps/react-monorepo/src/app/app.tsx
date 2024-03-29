// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import { ProductList } from '@react-monorepo/products';
import { OrderList } from '@react-monorepo/orders';


function Home() {
  return <h1>Welcome react-monorepo!</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/orders" element={<OrderList />}></Route>
    </Routes>
  );
}

export default App;
