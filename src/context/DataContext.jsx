// Import necessary dependencies from React
import { createContext, useState, useEffect } from 'react';

// Create a context for managing data
const DataContext = createContext({});

// Define a provider component that will wrap the application and manage data
export const DataProvider = ({ children }) => {
  // State to manage the selected team, initializing with the value from localStorage or default value "TeamB"
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  // State to manage the list of employees, initializing with the value from localStorage or a default list
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    },
    
    
  ]);

  // Save employees to localStorage whenever the employees state changes
  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  // Save selectedTeam to localStorage whenever the selectedTeam state changes
  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  // Handle changes in the selected team
  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  // Handle clicks on employee cards to toggle team assignment
  function handleEmployeeCardClick(event) {
    // Map over employees and update the teamName of the clicked employee
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    // Update the employees state with the modified list
    setEmployees(transformedEmployees);
  }

  // Provide the data and functions to the components using this context
  return (
    <DataContext.Provider
      value={{
        employees,
        selectedTeam,
        handleTeamSelectionChange,
        handleEmployeeCardClick,
        setTeam,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Export the DataContext for use in other components
export default DataContext;
