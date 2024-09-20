import React, { useMemo } from "react";

/**
 * Custom hook to transform a flat list of employees into a hierarchical tree structure based on manager-subordinate relationships.
 * It uses memoization to prevent unnecessary recomputation unless the `users` array changes.
 * 
 * @param {Array} users - The list of users (employees) with potential manager relationships.
 * 
 * @returns {Array} A hierarchical tree structure of employees, where each manager has a `subordinates` array.
 */
export const useEmployeeTree = (users) => {
  return useMemo(() => {
    if (!users) return [];

    const employeeMap = {};

    // Create a map of employee IDs to employee objects
    users.forEach((employee) => {
      employeeMap[employee.id] = { ...employee, subordinates: [] };
    });

    const employeeTree = [];

    // Build the hierarchical tree by assigning subordinates to their respective managers
    users.forEach((employee) => {
      if (employee.managerId) {
        employeeMap[employee.managerId].subordinates.push(
          employeeMap[employee.id]
        );
      } else {
        employeeTree.push(employeeMap[employee.id]); // Top-level managers
      }
    });

    return employeeTree;
  }, [users]); // Memoize based on the users array to avoid recomputation
};
