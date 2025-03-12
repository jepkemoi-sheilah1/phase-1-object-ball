//Object ball
//gameObject function returns a nested object with home and away team.
//part1:Building the Object
function gameObject (){
    return {
        home:{
            teamName:"Brooklyn Nets",
            colors :["Black", "White"],
            players :{
                "Allan Anderson":{ 
                    number :0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    locks:1,
                    slamDunks:1
                },
                "Reggie evans ":{
                    number:0,
                    shoe: 14,
                     points: 12,
                    rebounds: 12,
                     assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                " Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }

        },
        away :{
            teamName:"Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                  number: 4,
                  shoe: 18,
                  points: 10,
                  rebounds: 1,
                  assists: 1,
                  steals: 2,
                  blocks: 7,
                  slamDunks: 2
                },
                " Bismark Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                    },
                    " DeSagna Diop":{
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    },
                    "Brendan Haywood": {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12

                    }
                       
      }

    }
    }
}
//log gameObject 
console.log(gameObject());//logs the gameObject
//part2.Building functions 
//function to return Home Team Name
function homeTeamName(){
    let object =gameObject();
    return object ["home"]["teamName"];
}
console.log(homeTeamName());
//logs "Brooklyn Nets"

//part3.function numPointsScored
function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return "Player not found";
  }
  
console.log(numPointsScored ( "Allan Anderson"));
console.log(numPointsScored( "Mason Plumlee"));
console.log(numPointsScored("Jason Terry"));

//part4. function shoe size
function shoeSize(playerName){
    const game = gameObject();
    for (let team in game ) {
        if (game[team].players[playerName]){
            return game[team].players[playerName].shoe;
        }
    }
    return "player not found";
}
console.log(shoeSize("Brendan Haywood"));
console.log(shoeSize( "Mason Plumlee"));
console.log(shoeSize( " DeSagna Diop"));
//part 5.function team colors
function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found";
  }
  console.log(teamColors("Charlotte Hornets"));
  //Part 6. function team name to return both teams
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
console.log(teamNames());
//part 7. function player numbers
function playerNumbers(teamName){
    const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map(player => player.number);
    }
  }
  return "Team not found";
}
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerNumbers("Brooklyn Nets"));
//part8. function playerstatsreturns a players stat as an object
function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return "Player not found";
  }
  console.log(playerStats("Reggie Evans"));
  //bonus function
  //part 9 function most points scored
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          topPlayer = player;
        }
      }
    }
    return topPlayer;
  }
  console.log(mostPointsScored());
//bonus function team with the most points
function winningTeam() {
const game = gameObject();
  let scores = { home: 0, away: 0 };
  for (let team in game) {
    const players = game[team].players;
    for (let player in players) {
      scores[team] += players[player].points;
    }
  }
  return scores.home > scores.away ? game.home.teamName : game.away.teamName;
}
console.log("Winning team:", winningTeam());
// Bonus: the player with the longest name
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  console.log(playerWithLongestName());
   // super bonus

    //does long name stealATon

    function doesLongNameStealATon() {
        let object = gameObject();
        let longestName = "";
        let mostSteals = 0;
        let topStealer = "";

       Object.keys(object).forEach(teamKey => {
              let players = object[teamKey].players;
    
              Object.keys(players).forEach(player => {
                if (player.length > longestName.length) {
                     longestName = player;
                }
                if (players[player].steals > mostSteals) {
                     mostSteals = players[player].steals;
                     topStealer = player;
                }
              });
         });
         return longestName === topStealer;
    }
    console.log(doesLongNameStealATon());
