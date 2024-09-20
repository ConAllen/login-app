import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEmployeeTree } from "../../hooks/useEmployeeTree";
import EmployeeTreeNode from "../EmployeeTreeNode";
import styles from "./index.module.css";

/**
 * EmployeeTree component renders a hierarchical tree of employees.
 * It fetches the employee data from AuthContext, builds the tree structure
 * using the useEmployeeTree hook, and renders the EmployeeTreeNode components recursively.
 *
 * @returns {JSX.Element} The rendered EmployeeTree component.
 */

const EmployeeTree = () => {
  const { userList, isUsersLoading, usersError } = useContext(AuthContext); // Added usersError for handling error
  const employeeTree = useEmployeeTree(userList);

  return (
    <div>
      {isUsersLoading ? (
        <div className={styles.loadingWrapper}>
          <span className={styles.loading}>Loading...</span>
        </div>
      ) : usersError ? (
        <div className={styles.errorWrapper}>
          <span className={styles.error}>
            Error loading users: {usersError}
          </span>
        </div>
      ) : (
        <>
          <div className={styles.heroTextWrapper}>
            <h1>Hierarchy Tree</h1>
          </div>
          {employeeTree.map((manager) => (
            <EmployeeTreeNode
              key={manager.id}
              employee={manager}
              isManager={true}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default EmployeeTree;
