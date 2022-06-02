import React from "react";
import styles from "./CartItem.module.css";

function CartItem(props) {
  let productPrice = props.item.qty * props.item.price;

  return (
    <div className={styles.productDiv}>
      <div className={styles.productImg}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.productName}>
        <p>{props.brand}</p>
        <p>{props.name}</p>
      </div>
      <div className={styles.productQty}>
        <button
          className={styles.productBtn}
          onClick={() => props.increaseQty(props.item)}
        >
          +
        </button>
        <p>{props.qty}st </p>
        <button className={styles.productBtn}>-</button>
      </div>
      <div className={styles.productPrice}>
        <p>{productPrice} kr </p>
      </div>
    </div>
  );
}

export default CartItem;
