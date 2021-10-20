const Manager = require("../lib/Manager");

//where the HTML is generated for the team.
const generateTeam = (team) => {
    //console.log("This in inside generateTeam", team);
    for( let i =0; i <= team.length; i++) {
        // For each of the object in the array, if you can filter by the getRole(), and then either use .map or switch/case to return that string you've made. 
        
        // Manager.getRole() returns a STRING of manager. 
        // Engineer.getRole() === 'engineer'
        // Intern.getRole() === 'intern'
        
        console.log(team[i]);
        switch(team[i]) {
            case 'manager':
                console.log( 'in manager', team);
                return `
                <div class="card style="max-width: 18rem;">
                    <div class="card-body">
                    <h1 class="card-title">${team[i].name}</h1>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${team[i].id}</li>
                        <li class="list-group-item">${team[i].email}</li>
                        <li class="list-group-item">${team[i].officeNumber}</li>
                    </ul>
                    </div>
                </div>`
            
            case 'Engineer':
                return `
                <div class="card style="max-width: 18rem;">
                    <div class="card-body">
                    <h1 class="card-title">${team[i].name}</h1>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${team[i].id}</li>
                        <li class="list-group-item">${team[i].email}</li>
                        <li class="list-group-item">${team[i].gitHub}</li>
                    </ul>
                    </div>
                </div>`

                case 'Intern':
                return `
                <div class="card style="max-width: 18rem;">
                    <div class="card-body">
                    <h1 class="card-title">${team[i].name}</h1>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${team[i].id}</li>
                        <li class="list-group-item">${team[i].email}</li>
                        <li class="list-group-item">${team[i].school}</li>
                    </ul>
                    </div>
                </div>`
            
                

        }
    
  
    }
}



 module.exports = {generateTeam};

