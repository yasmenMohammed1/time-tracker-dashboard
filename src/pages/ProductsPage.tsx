import { Product } from "../models/product";
import ProductCard from "../components/product-card/product";
import "./dashboard.css";
import Header from "../components/header/Header";

function ProductsPage({ products }: { products: Product[] }) {
    return (
        <div className="dashboard-container">
            <Header />
            {products?.map((product: Product, index) => (
                <ProductCard product={product} index={index} />
            ))}
        </div>
    );
}

export default ProductsPage;
