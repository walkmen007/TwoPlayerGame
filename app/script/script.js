var gameCongifObj = {
	maxPlayer : 4,
	minPlayer : 2,
};

var gameObj = {
	playerList : [],
	gameCongifObj : gameCongifObj,
}

var createPlayerObj = function(count){
  var playerList = [];
  for(var i = 1; i <= count ; i++){
  	var obj = {
  		name : 'Player' + i,
  		id : i,
  		score : 0
  	};
    playerList.push(obj);
  }
  return playerList;
};

var createGame = function(count){
  gameObj.playerList = createPlayerObj(count);
  gameObj.gameCongifObj.maxPlayer = count;
};

createGame(2);
console.log("Game Created:::", gameObj);