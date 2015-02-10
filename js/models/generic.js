define([],function() {
  return {
    players: [
      {name: 'Chris Albert'},
      {name: 'Scott Hall'},
      {name: 'Matthew McManus'},
      {name: 'Alan Paul'},
      {name: 'Anthoney Gibson'},
      {name: 'Joe Nangle'},
      {name: 'Aili Yarbrough'},
      {name: 'Evan Richardson'},
      {name: 'Travis'}
    ],
    teams: [
      {name: 'The Winning Team'},
      {name: 'Team Awesome'}
    ],
    games: [
      {
        date: '2015-01-04',
        time: '17:00',
        innings: 9,
        teams: {
          home: {
            teamId: 0,
            playerIds: [0,2,4],
            runs: 5
          },
          away: {
            teamId: 1,
            playerIds: [1,3,4],
            runs: 2
          }
        }
      },
      {
        date: '2015-01-11',
        time: '17:00',
        innings: 6,
        teams: {
          home: {
            teamId: 0,
            playerIds: [0],
            runs: 15
          },
          away: {
            teamId: 1,
            playerIds: [1],
            runs: 5
          }
        }
      },
      {
        date: '2015-01-18',
        time: '17:00',
        innings: 7,
        teams: {
          home: {
            teamId: 0,
            playerIds: [0],
            runs: 6
          },
          away: {
            teamId: 1,
            playerIds: [1],
            runs: 4
          }
        }
      },
      {
        date: '2015-01-25',
        time: '17:00',
        innings: 9,
        teams: {
          home: {
            teamId: 0,
            playerIds: [0,5,8],
            runs: 3
          },
          away: {
            teamId: 1,
            playerIds: [1,6,7],
            runs: 9
          }
        }
      },
      {
        date: '2015-02-01',
        time: '17:00',
        innings: 0,
        reason: 'Super Bowl'
      }
      ,
      {
        date: '2015-02-08',
        time: '17:00',
        innings: 0,
        reason: 'Rain'
      }
    ]
  }
});