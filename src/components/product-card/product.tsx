import { Product } from "../../models/product";
import "./product-card.css";
function ProductCard({ product, index }: { product: Product; index: number }) {
    return (
        <div className={`parent-${index + 1}`}>
            <div className="content">
                <span className="card-title">
                    <p>{product.category}</p>
                    <img className="icon" src={"./details-icon.png"} />
                </span>
                <div className="details">
                    <div className="price">{product.price + "$"}</div>
                    <span className="description">
                        <p className="item-description">{product.title}</p>
                        <div className="count">
                            <p>inStore</p>
                            <p>{product.rating.count}</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
