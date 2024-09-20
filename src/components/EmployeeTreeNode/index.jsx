import React from "react";
import EmployeeDetails from "../EmployeeDetails";
import useExpand from "../../hooks/useExpand";
import styles from "./index.module.css";

/**
 * Renders a single node of the employee tree, showing the employee's details and their subordinates.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.employee - The employee object.
 * @param {boolean} props.isManager - Whether the employee is a manager.
 * @param {Array<Object>} props.subordinates - List of subordinates under the employee.
 * @returns {JSX.Element} - The rendered employee tree node.
 */

const EmployeeTreeNode = ({ employee, isManager }) => {
  const { isExpanded, toggleExpand } = useExpand(isManager);
  return (
    <div className={styles.node}>
      <EmployeeDetails
        employee={employee}
        isManager={isManager}
        isExpanded={isExpanded}
        toggleExpand={toggleExpand}
      />

      {/* Conditionally render subordinates based on isExpanded */}
      {isExpanded && isManager && employee.subordinates.length > 0 && (
        <div className={styles.subordinates}>
          {employee.subordinates.map((subordinate) => (
            <EmployeeTreeNode
              key={subordinate.id}
              employee={subordinate}
              isManager={subordinate.subordinates.length > 0}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeTreeNode;
