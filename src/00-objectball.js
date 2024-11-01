function gameObject () {
    return {
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
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away: {
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
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        },
    }
}

const gameObj = gameObject();

function numPointsScored(targetPlayer) {
    // loop through home and away
    for (const team in gameObj) {
        const players = gameObj[team].players;
        // loop through players
        for (const player in players) {
            // target the player that was passed in
            if (player === targetPlayer) {
                // return number of points scored for targetPlayer
                return players[player].points;
            }
        }
    }
}

const answer = numPointsScored("Brook Lopez");

// console.log(answer);

function shoe(targetPlayer) {
    for (const team in gameObj) {
        const players = gameObj[team].players;
        for (const player in players) {
            if (player === targetPlayer) {
                return players[player].shoe;
            }
        }
    }
}

const shoeAnswer = shoe("Brook Lopez");

// console.log(shoeAnswer);

function teamColors(targetTeamName) {
    if (targetTeamName === "Brooklyn Nets") {
        return gameObj.home.colors;
    } else if (targetTeamName === "Charlotte Hornets") {
        return gameObj.away.colors;
    } else {
        return "Team not found!";
    }
}

const colorsAnswer = teamColors("Charlotte Hornets");

// console.log(colorsAnswer);

function teamNames() {
    const teamNamesArray = [];
    for (const team in gameObj) {
        teamNamesArray.push(gameObj[team].teamName)
    }
    return teamNamesArray;
}

// console.log(teamNames());

function playerNumbers(targetTeamName) {
    const playerNumbersArray = [];
    for (const team in gameObj) {
        const players = gameObj[team].players;
        const teamName = gameObj[team].teamName;
        if (teamName === targetTeamName) {
            for (const player in players) {
                playerNumbersArray.push(players[player].number);
            }
        }
    }
    return playerNumbersArray;
}

const playerNumbersAnswer = playerNumbers("Brooklyn Nets");

// console.log(playerNumbersAnswer);

function playerStats(targetPlayer) {
    for (const team in gameObj) {
        const players = gameObj[team].players;
        for (const player in players) {
            if (player === targetPlayer) {
                const stats = gameObj[team].players[player];
                return stats;
            }
        }
    }
}

const playerStatsAnswer = playerStats("Alan Anderson");

// console.log(playerStatsAnswer);

function bigShoeRebounds() {
    let largestShoeSize = 0;
    let rebounds = 0;

    for (const team in gameObj) {
        function checkPlayers(players) {
            for (const player in players) {
                if (players[player].shoe > largestShoeSize) {
                    largestShoeSize = players[player].shoe;
                    rebounds = players[player].rebounds;
                }
            }
        }
        checkPlayers(gameObj[team].players);
    }
    return rebounds;
}

// console.log(bigShoeRebounds());

// which player has the most points?
function mostPointsScored() {
    let mostPoints = 0;
    let mostPointsPlayer = '';

    for (const team in gameObj) {
        function checkPlayers(players) {
            for (const player in players) {
                if (players[player].points > mostPoints) {
                    mostPoints = players[player].points;
                    mostPointsPlayer = player;
                }
            }
        }
        checkPlayers(gameObj[team].players);
    }
    return mostPointsPlayer;
}

// console.log(mostPointsScored());

// which team has the most points?
function winningTeam() {
    function totalPoints(players) {
        let total = 0;
        for (const player in players) {
            total += players[player].points;
        }
        return total;
    }

    const homeTeamPoints = totalPoints(gameObj.home.players);
    const awayTeamPoints = totalPoints(gameObj.away.players);

    if (homeTeamPoints > awayTeamPoints) {
        return gameObj.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
        return gameObj.away.teamName;
    } else {
        return "It's a tie!";
    }
}

// console.log(winningTeam());

// which player has the longest name?
function playerWithLongestName() {
    let longestPlayerName = '';
    for (const team in gameObj) {
        const players = gameObj[team].players;
        for (const player in players) {
            if (player.length > longestPlayerName.length) {
                longestPlayerName = player;
            }
        }
    }
    return longestPlayerName;
}

// console.log(playerWithLongestName())

// write a function that returns true if the player with the longest name has the most steals
function doesLongNameStealATon() {

    function playerWithLongestName() {
        let longestPlayerName = '';
        for (const team in gameObj) {
            const players = gameObj[team].players;
            for (const player in players) {
                if (player.length > longestPlayerName.length) {
                    longestPlayerName = player;
                }
            }
        }
        return longestPlayerName;
    }

    function mostSteals() {
        let mostSteals = 0;
        let mostStealsPlayer = '';
    
        for (const team in gameObj) {
            function checkPlayers(players) {
                for (const player in players) {
                    if (players[player].steals > mostSteals) {
                        mostSteals = players[player].steals;
                        mostStealsPlayer = player;
                    }
                }
            }
            checkPlayers(gameObj[team].players);
        }
        return mostStealsPlayer;
    }

    if (playerWithLongestName() === mostSteals()) {
        return true;
    } else {
        return false;
    }
}

// console.log(doesLongNameStealATon())