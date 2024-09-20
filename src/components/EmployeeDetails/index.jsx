import React from "react";
import EmployeePhotoOrInitials from "../EmployeePhotoOrInitials";
import ExpandButton from "../ExpandButton";
import EmployeeNameEmail from "../EmployeeNameEmail";
import styles from "./index.module.css";
/**
 * EmployeeDetails component displays employee information.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.employee - The employee object.
 * @param {string} props.employee.firstName - The first name of the employee.
 * @param {string} props.employee.lastName - The last name of the employee.
 * @param {boolean} props.isManager - Whether the employee is a manager.
 * @param {boolean} props.isExpanded - Whether the employee node is expanded.
 * @param {function} props.toggleExpand - Function to toggle expand/collapse state.
 * @returns {JSX.Element} The rendered component.
 */

const EmployeeDetails = ({ employee, isManager, isExpanded, toggleExpand }) => {
  return (
    <div className={styles.employee}>
      {isManager && (
        <ExpandButton isExpanded={isExpanded} toggleExpand={toggleExpand} />
      )}
      <EmployeePhotoOrInitials employee={employee} isManager={isManager} />
      <EmployeeNameEmail
        firstName={employee.firstName}
        lastName={employee.lastName}
        email={employee.email}
      />
    </div>
  );
};

export default EmployeeDetails;
