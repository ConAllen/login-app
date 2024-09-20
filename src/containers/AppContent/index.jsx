import EmployeeTree from "../../components/EmployeeTree";
import styles from "./index.module.css";
import Header from "../../components/Header";

/**
 * AppContent component renders the main content of the application, including the header
 * and the employee hierarchy tree.
 *
 * @returns {JSX.Element} The rendered application content, including the header and employee tree.
 */

const AppContent = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.employeeTreeWrapper}>
        <EmployeeTree />
      </div>
    </div>
  );
};
export default AppContent;
