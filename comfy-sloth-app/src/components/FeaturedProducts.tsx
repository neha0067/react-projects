import { Newsletter, ProductsGrid } from ".";

function FeaturedProducts() {
  return (
    <div className="align-element">
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl text-center font-medium tracking-wider capitalize">
          Featured Products
        </h2>
      </div>
      <ProductsGrid />
      <Newsletter />
    </div>
  );
}

export default FeaturedProducts;
