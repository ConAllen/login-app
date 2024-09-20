import React from "react";
import styles from "./index.module.css";

/**
 * ExpandButton component toggles between expanded and collapsed states.
 * It displays either a "+" or "-" icon depending on the state.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isExpanded - Whether the item is currently expanded.
 * @param {function} props.toggleExpand - Function to toggle the expand/collapse state.
 *
 * @returns {JSX.Element} The rendered button element with either "+" or "-" icon.
 */

const ExpandButton = ({ isExpanded, toggleExpand }) => {
  return (
    <button className={styles.toggleButton} onClick={toggleExpand}>
      {isExpanded ? (
        <span className="material-symbols-outlined">remove</span>
      ) : (
        <span className="material-symbols-outlined">add</span>
      )}
    </button>
  );
};

export default ExpandButton;
