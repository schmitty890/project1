var weaklyTypedStats = "https://scores.weaklytyped.com/api/v1/sports/nba/stats";
var weaklyTypedEvents =
  "https://scores.weaklytyped.com/api/v1/sports/nba/events";

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
    console.log("stats data", data);
    buildLeaderBoards(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
// call get data for scoreboards on page load
getDataForScoreBoards();
// set interval calls for new data every X number of milliseconds
setInterval(() => {
  getDataForScoreBoards();
}, 30000);
// Fetching events
function getDataForScoreBoards() {
  fetch(weaklyTypedEvents)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      // Handle the JSON data in this block
      // Build more games scoreboard function

      buildScoreBoards(data);

      // FOR EACH STATEMENT ITERATE OVER GAMES
      data.scores.forEach((scores) => {
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
        if (awayTeam.abbrev === "CHA" || homeTeam.abbrev === "CHA") {
          if (awayTeam.abbrev === "CHA") {
            // If Hornets are away
            // Injecting away (hornets) team data
            $(".away-team-name").html(homeTeamAbbrev); // ABR NAME
            $(".away-team-logo").html(
              '<img src="' + homeTeamLogo + '" width="50px" height="50px"/>'
            ); // LOGO
            $(".away-team").css("background-color", "#" + homeTeamColor); // COLOR
            $(".away-team-score").html(homeTeamScore); // SCORE
            // Injecting home team data
            $(".home-team-name").html(awayTeamAbbrev); // ABR NAME
            $(".home-team-logo").html(
              '<img src="' + awayTeamLogo + '" width="50px" height="50px"/>'
            ); // LOGO
            $(".home-team").css("background-color", "#" + awayTeamColor); //  COLOR
            $(".home-team-score").html(awayTeamScore); // SCORE
            console.log("home team score is: ", awayTeamScore);
          }
          if (homeTeam.abbrev === "CHA") {
            // if hornets are home
            $(".away-team-name").html(awayTeamAbbrev); // ABREV
            $(".away-team-logo").html(
              '<img src="' + awayTeamLogo + '" width="50px" height="50px"/>'
            ); // LOGO
            $(".away-team").css("background-color", "#" + awayTeamColor); // COLOR
            $(".away-team-score").html(awayTeamScore); // SCORE
            // Injecting home (hornets) team data
            $(".home-team-name").html(homeTeamAbbrev); // ABBREV
            $(".home-team-logo").html(
              '<img src="' + homeTeamLogo + '" width="50px" height="50px"/>'
            ); // LOGO
            $(".home-team").css("background-color", "#" + homeTeamColor); // COLOR
            $(".home-team-score").html(homeTeamScore); // SCORE
          }
        }
        // else
        //   {
        //     // IF CHA IS NOT FOUND HOME OR AWAY -- NO GAME
        //     $(".home-team-name").html("GAME");
        //     $(".away-team-name").html("NO");
        //   }
      });
      console.log("the weakly typed api event data today is", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

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
console.log("Todays date: ", formattedDate);

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
    console.log("the balldontlie event data today is: ", data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
// Seperate fetch for more data

/**
 * buildLeaderBoards builds the html template for the leaderboards section
 * @param {*} data - data we get back from the api request
 */

function buildLeaderBoards(data) {
  // console.log("buildLeaderBoards func");
  const statGroupsOffense = data.stats.offense.groups;
  const statGroupsDefense = data.stats.defense.groups;
  let html = ``;

  // we can leave these offense/defense separate for now if we want to separate these into other sections in the future
  //build offense html
  statGroupsOffense.forEach((group) => {
    let leaders = "";
    group.leaders.forEach((leader) => {
      // console.log(leader);
      leaders += `
        <tr>
          <td class="name">${leader.name}</td>
          <td><img class="image" src=${leader.headshot.href} /></td>
          <td class="stat">${leader.statValue}</td>
        </tr>
      `;
    });
    html += `
      <section id="${group.abbrev}" class="leaderboard-group-section">
        <table class="table">
          <div class="group-name">${group.desc}</div>
          <thead>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Photo</th>
              <th scope="col">Stat</th>
            </tr>
          </thead>
          <tbody>
            ${leaders}
          </tbody>
        </table>
      </section>
      <hr />
    `;
  });
  // build defense html
  statGroupsDefense.forEach((group) => {
    let leaders = "";
    group.leaders.forEach((leader) => {
      //  console.log(leader);
      leaders += `
        <tr>
          <td class="name">${leader.name}</td>
          <td><img class="image" src=${leader.headshot.href} /></td>
          <td class="stat">${leader.statValue}</td>
        </tr>
      `;
    });
    html += `
      <section id="${group.abbrev}" class="leaderboard-group-section">
        <table class="table">
          <div class="group-name">${group.desc}</div>
          <thead>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Photo</th>
              <th scope="col">Stat</th>
            </tr>
          </thead>
          <tbody>
            ${leaders}
          </tbody>
        </table>
      </section>
      <hr />
    `;
  });
  // add new html to the leaderboard section
  $("#leaderboard").append(html);
}

/** Function to build the HTML of extra scoreboards for todays games */

function buildScoreBoards(data) {
  const moreGames = data.scores;
  console.log("moreGames");
  console.log(moreGames);
  const lastUpdatedHTML = `
    <div>last updated time: ${moment(data.date).format("h:mm a")}</div>
  `;
  $("#moreGames").empty();

  // Iterate over each game
  moreGames.forEach((score) => {
    let html = "";
    // Define teams
    const awayTeams = score.teams.awayTeam;
    const homeTeams = score.teams.homeTeam;
    let gameStartTime = "";
    let classes = "";
    if (score.status.state === "pre") {
      gameStartTime = `
        <div class="timer">
          <div class="timer-container">
            <div class="quarter">
              Start time
            </div>
            <div class="timeleft">
              ${moment
                .utc(score.startTime)
                .utcOffset("-05:00")
                .format("ddd, hA")}
            </div>
          </div> 
        </div>`;
    } else if (score.status.state === "in") {
      classes += " in-progress";
      gameStartTime = `
        <div class="timer">
          <div class="timer-container">
            <div class="quarter">
              ${score.status.detail}
            </div>
          </div> 
        </div>`;
    } else if (score.status.state === "post") {
      gameStartTime = `
        <div class="timer">
          <div class="timer-container">
            <div class="quarter">
              FINAL
            </div>
          </div> 
        </div>`;
    }

    html += `
    <div class="scoreboard justify-content-center">
      <div class="team team-a mg-away-team" style="background-color: #${
        awayTeams.teamColor
      };">
        <div class="mg-away-team-logo">
          <img src=${awayTeams.logo} width="50px" height="50px" alt=${
      awayTeams.shortDisplayName
    } />
        </div>
        <div class="team-detail">
          <div class="team-nameandscore">
              <div class="mg-away-team-name">
                ${awayTeams.abbrev}
              </div>
              <div class="mg-away-team-score">
                ${awayTeams.score ? awayTeams.score : "-"}
              </div>
          </div>
          <div class="team-thisgame">
            ${awayTeams.records[0].summary}
          </div>
        </div>
      </div>
      <div class="team team-b charlotte mg-home-team" style="background-color: #${
        homeTeams.teamColor
      };">
        <div class="mg-home-team-logo">
          <img src=${homeTeams.logo} width="50px" height="50px" alt=${
      homeTeams.shortDisplayName
    } />
        </div>
        <div class="team-detail">
          <div class="team-nameandscore">
              <div class="mg-home-team-name">
                ${homeTeams.abbrev}
              </div>
              <div class="mg-home-team-score">
                ${homeTeams.score ? homeTeams.score : "-"}
              </div>
          </div>
          <div class="team-thisgame">
            ${homeTeams.records[0].summary}
          </div>
        </div>
      </div>
      ${gameStartTime}
      `;

    $("#moreGames").append(html);
  });
  $("#moreGames").prepend(lastUpdatedHTML);
}
/** @this function under construction */
