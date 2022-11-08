const products = [
  {
    id: "1",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "2",
    title: "Malt Liquor",
    price: 4.0,
  },
  {
    id: "3",
    title: "Milk",
    price: 3.99,
  },
];
function getProductData(id) {
  let productData = products.find((product) => product.id === id);
  //   CHECK LINE BELOW IF IT'S STRICT EQUALITY OR NORMAL
  if (productData == undefined) {
    console.log("Product data does not exist for ID" + id);
    return undefined;
  }

  return productData;
}
export { products, getProductData };
