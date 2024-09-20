import { useState } from "react";
/**
 * Custom hook to manage the expanded/collapsed state of a component.
 * It provides a boolean state (`isExpanded`) and a function (`toggleExpand`) to toggle the state.
 *
 * @param {boolean} [initialState=false] - The initial expanded state (default is `false`).
 *
 * @returns {Object} An object containing:
 *   - `isExpanded` (boolean): Whether the component is currently expanded or not.
 *   - `toggleExpand` (Function): A function to toggle the expanded/collapsed state.
 */

const useExpand = (initialState = false) => {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return { isExpanded, toggleExpand };
};

export default useExpand;
