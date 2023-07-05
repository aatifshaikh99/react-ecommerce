import React, { useState } from "react";
import styles from "./Footer.module.scss";
import rupay from "../../assets/rupay.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import maestro from "../../assets/maestro.png";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useDispatch } from "react-redux";
import { FILTER_BY_CATEGORY } from "../../redux/slice/filterSlice";
import { Link } from "react-router-dom";
import useFetchCollection from "../../customHooks/useFetchCollection";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  const [category, setCategory] = useState("All");
  const { data } = useFetchCollection("products");

  const allCategories = [...new Set(data.map((product) => product.category))];
  const dispatch = useDispatch();

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products: data, category: cat }));
  };

  return (
    <footer>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles["col-1"]}>
              <h3>Categories</h3>
              <ul>
                {allCategories.map((cat, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => filterProducts(cat)}
                      value={category}
                    >
                      <Link to="/#products">{cat}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles["col-1"]}>
              <div className={styles.logo}>
                <h3>
                  e<span>Shop</span>.
                </h3>
              </div>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+91 123 456 7899</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>support@eshop.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Jalgaon, MH India</p>
                </span>
              </div>
            </div>
            <div className={styles["col-2"]}>
              <div>
                <h3>Payment Method</h3>
                <ul>
                  <li>
                    <img src={visa} alt="visa" />
                  </li>
                  <li>
                    <img src={mastercard} alt="mastercard" />
                  </li>
                  <li>
                    <img src={maestro} alt="maestro" />
                  </li>
                  <li>
                    <img src={rupay} alt="rupay" />
                  </li>
                </ul>
              </div>
              <h3>Follow us</h3>
              <p>Follow us on social media and stay updated about eShop.</p>
              <ul>
                <li className={styles.social}>
                  <FaLinkedinIn size={24} />
                </li>
                <li className={styles.social}>
                  <FaTwitter size={24} />
                </li>
                <li className={styles.social}>
                  <FaInstagram size={24} />
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ width: "100%" }} />
          <p className={styles.copyright}>&copy;{year} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
