import { Row, Col } from "react-bootstrap";
import { products } from "../productsStore";
import ProductCard from "../components/ProductCard";

function Store() {
  return (
    <>
      <h1 align="center" className="p-5">
        Welcome to the store
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Store;
