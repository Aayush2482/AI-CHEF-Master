import { Link } from "react-router-dom";
import image1 from "../assets/perf1.jpeg"
import image2 from "../assets/perf2.jpeg";
import image3 from "../assets/perf3.jpeg"

const products = [
  { id: 1, name: "Product 1", price: "$40", image: image1 },
  { id: 2, name: "Product 2", price: "$40", image: image2 },
  { id: 3, name: "Product 3", price: "$50", image: image3 }
];

function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <Link to={`/product/${product.id}`} className="block bg-blue-600 text-white px-4 py-2 mt-2 text-center rounded">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

