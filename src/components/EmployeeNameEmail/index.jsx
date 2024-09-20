import React from "react";
import styles from "./index.module.css";

/**
 * EmployeeNameEmail component displays the full name and email of an employee.
 *
 * @param {Object} props - Component props.
 * @param {string} props.firstName - The first name of the employee.
 * @param {string} props.lastName - The last name of the employee.
 * @param {string} props.email - The email address of the employee.
 *
 * @returns {JSX.Element} The rendered component displaying the employee's full name and email.
 */

const EmployeeNameEmail = ({ firstName, lastName, email }) => {
  return (
    <span className={styles.nameEmail}>
      {firstName} {lastName} - {email}
    </span>
  );
};

export default EmployeeNameEmail;
