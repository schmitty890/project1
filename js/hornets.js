var apiUrlStats = "https://scores.weaklytyped.com/api/v1/sports/nba/stats";
var apiUrlEvents = "https://scores.weaklytyped.com/api/v1/sports/nba/events";

// Fetching Stats
fetch(apiUrlStats)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Handle the JSON data in this block
    console.log(data);
    var ptsLeader = data.stats.offense.groups[0].leaders[0].name;
    var assistLeader = data.stats.offense.groups[1].leaders[0].name;

    document.querySelector(".pts-leader").innerHTML = ptsLeader;
    document.querySelector(".assist-leader").innerHTML = assistLeader;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
// Fetching events
fetch(apiUrlEvents)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Handle the JSON data in this block
    /**
     * what happens if charlotte is not the first game? in todays example, they were.
     * however there are 14 games today. another day they might not be the first game,
     * therefore defining the away team as we are here is not ideal because they are likely
     * not to be the first game in the scores array
     */
    var awayTeam = data.scores[0].teams.awayTeam.abbrev;
    var awayColor = data.scores[0].teams.awayTeam.teamColor;
    var awayLogo = data.scores[0].teams.awayTeam.logo;
    console.log(awayTeam);

    document.querySelector(".away-team-name").innerHTML = awayTeam;
    document.querySelector(".away-team").style.backgroundColor =
      "#" + awayColor;
    document.querySelector(".away-team-logo").innerHTML =
      '<img src="' + awayLogo + '" width="50px" height="50px"/>';

    console.log(data);
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
fetch(
  `https://www.balldontlie.io/api/v1/games?dates[]=${formattedDate}&team_ids[]=4` // 4 is the charlotte hornets id according to the api docs. see https://www.balldontlie.io/home.html#get-all-games for query parameter options
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Handle the JSON data in this block
    const response = data.data[0];
    console.log(response);
    console.log(`response.home_team_score: ${response.home_team_score}`); // populate home team score
    console.log(`response.visitor_team_score: ${response.visitor_team_score}`); // populate away team score
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
