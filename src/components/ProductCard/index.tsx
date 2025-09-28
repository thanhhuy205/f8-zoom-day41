import type { Product } from "@/store/product/type";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  item: Product;
}

export const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Link key={item.id} to={`/products/${item.slug}`} className="block">
      <div className={styles.card}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className={styles.cardImage}
        />

        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{item.title}</h2>
          <p className={styles.cardDescription}>{item.description}</p>

          <div className={styles.priceRating}>
            <span className={styles.price}>${item.price}</span>
            <span className={styles.rating}>{item.rating}</span>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <button className={styles.viewButton}>View Details</button>
        </div>
      </div>
    </Link>
  );
};
