import { useParams } from "react-router-dom";
import image1 from "../assets/perf1.jpeg"
import image2 from "../assets/perf2.jpeg";
import image3 from "../assets/perf3.jpeg"


const products = {
  1: { name: "Product 1", price: "$40", description: "High-quality product.", image: image1  },
  2: { name: "Product 2", price: "$40", description: "Premium and durable.", image: image2 },
  3: { name: "Product 3", price: "$50", description: "Best-selling item.", image: image3 }
};

function ProductDetails() {
  const { id } = useParams();
  const product = products[id];

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mt-4" />
      <p className="text-gray-600 mt-2">{product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
