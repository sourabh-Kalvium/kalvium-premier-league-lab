//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon){
    return [managerName, managerAge, currentTeam, trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [];

//write your function here
function createFormation(formation){
   return {
    defender:formation[0],
    midfield:formation[1],
    forward:formation[2]
   }
}


console.log(createFormation(formation))
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  
  let filtered =players.filter((ele)=>{
   return  ele.debut == year
  })
   
  return filtered
}



//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){

  let filtered =players.filter((ele)=>{
    return  ele.position == position
   })
    
   return filtered
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {

  let filtered = players.filter((player) => {
    return player.awards.some((award) => {
      return award.name === awardName;
    });
  });

  return filtered;
}



//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){

    let filtered = players.filter((player) => {
         
         let awards=player.awards.filter((award)=>{
           return award.name == awardName 
         })
        return awards.length ==noOfTimes
  });

  return filtered;
  
}


//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country){
      
    let filtered = players.filter((player)=>{
         
        let checkaward =player.awards.some((award)=>{
           return award.name === awardName
         })

         return player.country === country && checkaward
    })

    return filtered
}







//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){

    let filtered = players.filter((ele)=>{
        
      return noOfAwards<=ele.awards.length && ele.team==team && ele.age<age
    })

    return filtered
}

//Progression 9 - Sort players in descending order of their age

function SortByAge(){
  let SortbyAge = players.sort((a,b)=>{
    return a.age-b.age
  })
  
  return SortbyAge
}


//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){
      let filterd = players.filter((player)=>{
          return player.team === team
      }).sort((a,b)=>{
        return b.awards.length-a.awards.length
      })
       
      return filterd
}




//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
    
  let filtered = players.filter((ele)=>{
     
    let award=ele.awards.filter((award)=>{
       return  award.name === awardName 
    })

    return award.length == noOfTimes && ele.country ==country

  })

   filtered.sort((a,b)=>{
    a.name -b.name
   })

   return filtered
}

// console.log(SortByNamexAwardxTimes("FIFA FIFPro World XI",1,"France"))

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order


function SortByNamexOlderThan(age){
  
  let filtered = players.filter((ele)=>{
     return ele.age >age
  }).sort((a,b)=>{
    return a.name.localeCompare(b.name)
  })

  filtered.map((ele)=>{
   return ele.awards.sort((a,b)=>{
      return a.year - b.year
    })
  })

  
  
  return filtered
} 

console.log(SortByNamexOlderThan(30))