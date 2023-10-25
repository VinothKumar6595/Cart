import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Bat"
          price={6}
          description="This is a first product - amazing!"
          id="i1"
        />
        <ProductItem
          title="Book"
          price={10}
          description="A Book to Learn"
          id="i2"
        />
      </ul>
    </section>
  );
};

export default Products;
