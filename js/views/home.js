define([
  "../../reddy.js/js/util/reddy-views",
  "underscore",
  "../models/generic"
],function(Views,_,Model) {

    return Views.GenericView.extend({
      templateName: "home",
      data: function() {
        var games = [],
            self = this;
        _.each(Model.games,function(game,index) {
          self.setUpTeam(game,Model,'home');
          self.setUpTeam(game,Model,'away');
          game.gameId = Number(index) + 1;
          games.push(game);
        });
        return {games: games};
      },
      setUpTeam: function(game,data,team) {
        if(!_.isUndefined(game.teams)) {
          game.teams[team].team = data.teams[game.teams[team].teamId].name;
          game.teams[team].players = [];
          _.each(game.teams[team].playerIds, function (playerId) {
            game.teams[team].players.push(Model.players[playerId].name);
          });
          game.teams[team].playersNames = game.teams[team].players.join(', ')
        }
      }
    });
});