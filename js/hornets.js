var weaklyTypedStats = "https://scores.weaklytyped.com/api/v1/sports/nba/stats";
var weaklyTypedEvents = "https://scores.weaklytyped.com/api/v1/sports/nba/events";

// Fetching Stats
fetch(weaklyTypedStats)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Handle the JSON data in this block
    console.log("stats data", data)
    var ptsLeader1 = data.stats.offense.groups[0].leaders[0].name;
    var ptsLeader2 = data.stats.offense.groups[0].leaders[1].name;
    var ptsLeader3 = data.stats.offense.groups[0].leaders[2].name;

    var assistLeader1 = data.stats.offense.groups[1].leaders[0].name;
    var assistLeader2 = data.stats.offense.groups[1].leaders[1].name;
    var assistLeader3 = data.stats.offense.groups[1].leaders[2].name;

    var rebLeader1 = data.stats.defense.groups[0].leaders[0].name;
    var rebLeader2 = data.stats.defense.groups[0].leaders[1].name;
    var rebLeader3 = data.stats.defense.groups[0].leaders[2].name;

    var blkLeader1 = data.stats.defense.groups[1].leaders[0].name;
    var blkLeader2 = data.stats.defense.groups[1].leaders[1].name;
    var blkLeader3 = data.stats.defense.groups[1].leaders[2].name;

    $(".pts-leader-1").html(ptsLeader1); // adds point leader to html
    $(".pts-leader-2").html(ptsLeader2); // adds point leader to html
    $(".pts-leader-3").html(ptsLeader3); // adds point leader to html

    $(".ast-leader-1").html(assistLeader1); // adds assist leader to html
    $(".ast-leader-2").html(assistLeader2); // adds assist leader to html
    $(".ast-leader-3").html(assistLeader3); // adds assist leader to html

    $(".reb-leader-1").html(rebLeader1); // adds reb leader to html
    $(".reb-leader-2").html(rebLeader2); // adds reb leader to html
    $(".reb-leader-3").html(rebLeader3); // adds reb leader to html

    $(".blk-leader-1").html(blkLeader1); // adds blk leader to html
    $(".blk-leader-2").html(blkLeader2); // adds blk leader to html
    $(".blk-leader-3").html(blkLeader3); // adds blk leader to html

  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
// Fetching events 

fetch(weaklyTypedEvents)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Handle the JSON data in this block

    // FOR EACH STATEMENT ITERATE OVER GAMES 
    data.scores.forEach(scores => {
      const awayTeam = scores.teams.awayTeam;
      const homeTeam = scores.teams.homeTeam;
      const homeTeamAbbrev = scores.teams.homeTeam.abbrev;
      const homeTeamLogo = scores.teams.homeTeam.logo;
      const homeTeamColor = scores.teams.homeTeam.teamColor;
      const awayTeamAbbrev = scores.teams.awayTeam.abbrev;
      const awayTeamLogo = scores.teams.awayTeam.logo;
      const awayTeamColor = scores.teams.awayTeam.teamColor;
      const awayTeamScore = scores.teams.awayTeam.score;
      const homeTeamScore = scores.teams.homeTeam.score;


      // Check if either the awayTeam or homeTeam is the Charlotte Hornets
      if (awayTeam.abbrev === "MIL" || homeTeam.abbrev === "MIL") // MIL will become CHA

      {
        if (awayTeam.abbrev === "MIL") // If Hornets are away
        {
          // Injecting away (hornets) team data
          $(".away-team-name").html(homeTeamAbbrev); // ABR NAME
          $(".away-team-logo").html('<img src="' + homeTeamLogo + '" width="50px" height="50px"/>'); // LOGO
          $(".away-team").css("background-color", "#" + homeTeamColor); // COLOR
          $(".away-team-score").html(awayTeamScore); // SCORE
          // Injecting home team data 
          $(".home-team-name").html(awayTeamAbbrev); // ABR NAME
          $(".home-team-logo").html('<img src="' + awayTeamLogo + '" width="50px" height="50px"/>'); // LOGO
          $(".home-team").css("background-color", "#" + awayTeamColor); //  COLOR
          $(".home-team-score").html(homeTeamScore); // SCORE


        } else // if hornets are home
        {
          // Injecting away team data
          $(".away-team-name").html(awayTeamAbbrev);
          $(".away-team-logo").html('<img src="' + awayTeamLogo + '" width="50px" height="50px"/>');
          $(".away-team").css("background-color", "#" + awayTeamColor);
          // Injecting home (hornets) team data
          $(".home-team-name").html(homeTeamAbbrev);
          $(".home-team-logo").html('<img src="' + homeTeamLogo + '" width="50px" height="50px"/>');
          $(".home-team").css("background-color", "#" + homeTeamColor);

        }
      }
    });



    console.log("the weakly typed api event data today is", data);



  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
// Second events request
fetch(weaklyTypedEvents)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Handle the JSON data in this block

    const game1 = data.scores[0];
    console.log('game 1 is: ', game1.teams.awayTeam.displayName, ' @ ', game1.teams.homeTeam.displayName);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
/**
 * formatDate gets the current date and formats the result in what we need for the api request
 * @returns YYYY-MM-DD
 */
function formatDate() {
  var date = new Date();
  // Get year, month, and day part from the date
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });

  // Generate yyyy-mm-dd date string
  var formattedDate = year + "-" + month + "-" + day;
  return formattedDate;

}
const formattedDate = formatDate();
console.log('Todays date: ', formattedDate);

fetch(
  `https://www.balldontlie.io/api/v1/games?dates[]=${formattedDate}`
  // `&team_ids[]=4` is clt hornets id
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // will prob use this later

    //  const response = data;
    //  const todaysGames = response.data;
    // const homeTeamName = response.home_team.abbreviation;
    // const homeTeamScore = response.home_team_score;

    //  console.log('balldontlie API data for todays date', response);
    //  console.log('todays games are: ', todaysGames);
    // console.log(`response.home_team_score: ${response.home_team_score}`); // populate home team score
    // console.log(`response.visitor_team_score: ${response.visitor_team_score}`); // populate away team score
    // console.log(`response.home_team.abbreviation: ${response.home_team.abbreviation}`);

    // document.querySelector(".home-team-score").innerHTML = homeTeamScore;

    // $(".home-team-name").html(homeTeamName);
    // $(".home-team-score").html(homeTeamScore);
    // $(".home-team-abbrevation").html(homeTeamName);
    console.log('the balldontlie event data today is: ', data);
    ;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
// Seperate fetch for more data
fetch(
  `https://www.balldontlie.io/api/v1/games?seasons[]=2023&team_ids[]=4`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Handle the JSON data in this block
    const response = data;
    console.log("clt season", response); // shows the Hornets upcoming games but it's out of order
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });