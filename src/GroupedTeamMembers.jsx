// Import necessary dependencies from React
import { useState, useContext } from 'react';
import DataContext from './context/DataContext';

// Functional component for rendering grouped team members
const GroupedTeamMembers = () => {
  // Destructure data from the context
  const { employees, selectedTeam, setTeam } = useContext(DataContext);

  // State to manage the grouped team members
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  // Function to group team members based on their team name
  function groupTeamMembers() {
    // Array to store teams with their members
    var teams = [];

    // Filter employees for each team and create a team object
    var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
    teams.push(teamA);

    var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
    teams.push(teamB);

    var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
    teams.push(teamC);

    var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
    teams.push(teamD);

    return teams;
  }

  // Function to handle clicks on team names, updating the collapsed state and selected team
  function handleTeamClick(event) {
    var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);
  }

  // Return the main content structure for the GroupedTeamMembers component
  return (
    // Main container for the GroupedTeamMembers section
    <main className="container">
      {/* Map through groupedEmployees and render team cards */}
      {groupedEmployees.map((item) => {
        return (
          // Team card with header and member details
          <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              Team Name: {item.team}
            </h4>
            {/* Collapsible content for team members */}
            <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
              <hr />
              {/* Map through team members and render details */}
              {item.members.map((member) => {
                return (
                  <div key={member.id} className="mt-2">
                    <h5 className="card-title mt-2">
                      {/* Display member's full name */}
                      <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                    </h5>
                    <p className="card-text text-dark mt-2">
                      {/* Display member's designation */}
                      <b>Designation:</b> {member.designation}
                    </p>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </main>
  );
}

export default GroupedTeamMembers;
