


  document.addEventListener('DOMContentLoaded', function() {


var apiUrlStats = 'https://scores.weaklytyped.com/api/v1/sports/nba/stats';
var apiUrlEvents = 'https://scores.weaklytyped.com/api/v1/sports/nba/events';

// Fetching Stats
fetch(apiUrlStats)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Handle the JSON data in this block
    console.log(data)
    var ptsLeader = data.stats.offense.groups[0].leaders[0].name;
    var assistLeader = data.stats.offense.groups[1].leaders[0].name;

    document.querySelector('.pts-leader').innerHTML = ptsLeader;
    document.querySelector('.assist-leader').innerHTML = assistLeader;
    ;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  // Fetching events
  fetch(apiUrlEvents)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Handle the JSON data in this block
    var awayTeam = data.scores[0].teams.awayTeam.abbrev;
    var awayColor = data.scores[0].teams.awayTeam.teamColor;
    var awayLogo = data.scores[0].teams.awayTeam.logo;

    document.querySelector('.away-team-name').innerHTML = awayTeam;
    document.querySelector('.away-team').style.backgroundColor = "#" + awayColor;
    document.querySelector('.away-team-logo').innerHTML = '<img src="' + awayLogo + '" width="50px" height="50px"/>';

    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  // end of ready function
});