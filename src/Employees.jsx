
import Teams from './Teams'
import TeamMembers from './TeamMembers'

const Employees = () => {

  return (
    // Main container for the Employees section
    <main className="container">

      <div className="row justify-content-center">
        <div className="col-6">
          
          <Teams />
        </div>
      </div>

      
      <hr />

      
      <div className="row justify-content-center">
        <div className="col-8">
          
          <div className="card-collection">
           
            <TeamMembers />
          </div>
        </div>
      </div>

    </main>
  )
}

export default Employees
