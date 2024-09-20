import React, { useState } from "react";
import styles from "./index.module.css";

/**
 * EmployeePhotoOrInitials component displays either the employee's photo or their initials
 * if the photo is unavailable or broken. It also styles the element based on whether the
 * employee is a manager or not.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.employee - The employee object.
 * @param {string} props.employee.firstName - The first name of the employee.
 * @param {string} props.employee.lastName - The last name of the employee.
 * @param {string} [props.employee.photo] - The URL of the employee's photo (optional).
 * @param {boolean} props.isManager - Whether the employee is a manager or not.
 *
 * @returns {JSX.Element} The rendered component, showing either a photo or initials.
 */

const EmployeePhotoOrInitials = ({ employee, isManager }) => {
  const [isImageBroken, setIsImageBroken] = useState(false); // Track image load failure
  const circleClass = isManager ? styles.managerCircle : styles.employeeCircle;

  const handleImageError = () => {
    setIsImageBroken(true); // Mark image as broken when error occurs
  };

  const initials = employee.firstName[0] + employee.lastName[0];

  return isImageBroken || !employee.photo ? (
    <div className={`${styles.initialsCircle} ${circleClass}`}>{initials}</div>
  ) : (
    <img
      src={employee.photo}
      alt={`${employee.firstName} ${employee.lastName}`}
      className={`${styles.photo} ${circleClass}`}
      onError={handleImageError} // Handle broken images
    />
  );
};

export default EmployeePhotoOrInitials;
