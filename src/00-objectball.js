//1.Building the Object.
function gameObject (){
   let obj = {
         home: {
                teamName: "Brooklyn Nets",
                colors: ["Black", "White"],
                players: {
                    "Alan Anderson": {
                        number: 0,
                        shoe: 16,
                        points: 22,
                        rebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 1
                    },
                    "Reggie Evans": {
                        number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slamDunks: 7
                    },
                    "Brook Lopez": {
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
                    "Jason Terry": {
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

     away:{
        teamName: "Charlotte Hornets",
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
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
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
            
            },
        },
    
  }

    };

    return obj;
}
 console.log(gameObject());
    
    

 //2. build  functions calling functions within functions

        function homeTeamName(){
        let object = gameObject();
        return object.home.teamName;
        }

 console.log(homeTeamName("Brooklyn Nets" ));
 //logs Brooklyn Nets

        function homeTeamName(){
         let object = gameObject();
        return object.away.teamName;    
         }
 console.log(awayteam (" Charlotte Hornets"))
 //logs Charlotte Hornest

 //3.Build function numPointsScored
// Function: numPointsScored
    function numPointsScored(playerName) {
        let game = gameObject();
        for (let team in game) {
        if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
        }
        }
      return "Player not found";
     }
  console.log("Points scored by Alan Anderson:", numPointsScored("Alan Anderson"));


   //4.function to get shoe size 
   
function shoeSize(playerName) {
    let game  = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return "Player not found";
  }
  console.log("Shoe size for Brook Lopez:", shoeSize("Brook Lopez"));
  
  
   
//5.function to get team colors
function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found";
  }
  console.log("Team colors for Charlotte Hornets:", teamColors("Charlotte Hornets"));
   
 //6.to get team names 
 function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }

  console.log(teamNames()); // Expected output: ["Brooklyn Nets", "Charlotte Hornets"]
 
//7.function to get player's number for team 
function playerNumbers(teamName) {
    let game = gameObject();
  
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return [ "player not found"];
  }
  console.log(playerNumbers("Brooklyn Nets")); 
  console.log(playerNumbers("Charlotte Hornets")); 

  //8.function playerStats returns a player stat as an object
  function playerStats(playerName) {
    let game = gameObject();
  
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return null;
  }
  console.log(playerStats("Brook Lopez")); 
  
//9. function to get rebounds 0f players with largest sh        
function bigShoeRebounds() {
    let game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;

    for (let team in game[team]) {
        for (let player in game[team].players) {
            if (game[team].players[player].shoe > largestShoe) {
                largestShoe = game[team].players[player].shoe;
                rebounds = game [team].players[player].rebounds;
            }
        }
    }
    return( rebounds);
}
console.log(bigShoeRebounds()); 

//10.function to return mostPointsScored
function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let bestPlayer = "";

    for (let team in game[team]) {
        for (let player in gameObject.players) {
            if (game[team].players[player].points > maxPoints) {
                maxPoints = game[team].players[player].points;
                bestPlayer = player;
            }
        }
    }
    return (bestPlayer);
}
console.log(mostPointsScored());

//11.function to return winningTeam
function winningTeam() {
    let game= gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let player in game[team].home.players) {
        homePoints += game[team].home.players[player].points;
    }
    for (let player in game[team].away.players) {
        awayPoints += game[team].away.players[player].points;
    }

    return( homePoints > awayPoints ? game[team].home.teamName : game.away.teamName);
}
console.log(winningTeam());

//12.function to get playerWithLongestName
function playerWithLongestName() {
    let game= gameObject();
    let longestName = "";

    for (let team in game [team]) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return (longestName);
}
console.log(playerWithLongestName()); 

//13.function doesLongNameStealAtOn
function doesLongNameStealATon() {
    let game = gameObject();
    let maxSteals = 0;
    let playerWithMostSteals = "";
    let longestNamePlayer = playerWithLongestName();

    for (let team in game) {
        for (let player in game[team].players) {
            if (gameObject.players[player].steals > maxSteals) {
                maxSteals = game[team].players[player].steals;
                playerWithMostSteals = player;
            }
        }
    }

    return (playerWithMostSteals) === topStealer;
  
}
console.log(doesLongNameStealATon()); // Expected output: false