import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: '6 Pack Donuts',
    description: '6 x mini cinnamon donuts',
  },
  {
    id: 'p2',
    price: 3.5,
    title: 'Arnotts biscuits',
    description: 'Arnotts Scotch Finger Plain Biscuits 375g',
  },
  {
    id: 'p3',
    price: 2.2,
    title: 'Coca-cola Classic',
    description: 'Coca-cola Classic Soft Drink Bottle 1.25l',
  },
  {
    id: 'p4',
    price: 2.33,
    title: 'Red Capsicum Each',
    description: 'Australian Grown Red Capsicum',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
