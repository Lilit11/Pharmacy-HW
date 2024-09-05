import { useState } from "react";
import styles from "./items.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getStarImage } from "../../app/helpers";
import { handleRating } from "./items.slice";

export const Items = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [query, setQuery]= useState('')
  const filtered = items.filter(i => i.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <h1 className={styles.h1}>Choose your healthy path </h1>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Find medicine you want..."
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
        />
        {
            filtered.map(drug=> <div key={drug.id} className={styles.product}>
                <img src={drug.image} alt="" />
                <div className={styles.details}>
                <p className={styles.title}>{drug.name}</p>
                <small>{drug.details}</small>
                <div>
                {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={styles.star} 
                    onClick={() => dispatch(handleRating({itemId:drug.id, newRating:star}))}
                >
                    <img src={getStarImage(star, drug.rating)} alt=""/>
                </span>
            ))}
                </div>
                </div>
            </div>)
        }
      </div>
    </>
  );
};


