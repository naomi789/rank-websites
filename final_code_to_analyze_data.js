const _ = require('lodash');
const decisions = [{},{}];


// Setup loop
for(let i = 0; i < decisions.length; i++) {
  const instance = decisions[i];
  nodes[instance.winner] = {
    wins: [],
    losses: [],
    id: instance.winner,
  };
  nodes[instance.loser] = {
    wins: [],
    losses: [],
    id: instance.loser,
  };
}


// Wins vs losses
for(let i = 0; i < decisions.length; i++) {
  const instance = decisions[i];
  nodes[instance.winner].wins.push(instance.loser);
  nodes[instance.loser].losses.push(instance.winner);
}

// Calculate win/loss percentage
_.forEach(nodes, (node, key) => {
  node.ratio = node.wins.length / (node.wins.length + node.losses.length)
})


// Calculate for each of a nodes wins, the points it gains from its competitor?
_.forEach(nodes, (node, key) => {
  node.trueScore = 0;
  _.forEach(node.wins, (id) => {
    node.trueScore += Math.abs(nodes[id].ratio - node.ratio);
  })
})
for(let i=0;i<Object.keys(nodes).length;i++) {
  console.log(nodes[(Object.keys(nodes)[i])].trueScore);
}


/*

const nodes = {};

// Setup loop
for(let i = 0; i < decisions.length; i++) {
  const instance = decisions[i];
  nodes[instance.winner] = {
    wins: [],
    losses: [],
    id: instance.winner,
  };
  nodes[instance.loser] = {
    wins: [],
    losses: [],
    id: instance.loser,
  };
}


// Wins vs losses
for(let i = 0; i < decisions.length; i++) {
  const instance = decisions[i];
  nodes[instance.winner].wins.push(instance.loser);
  nodes[instance.loser].losses.push(instance.winner);
}

// Calculate win/loss percentage
_.forEach(nodes, (node, key) => {
  node.ratio = node.wins.length / (node.wins.length + node.losses.length);
  //node.lossRatio = node.losses.length / (node.wins.length + node.losses.length);
})


// Calculate for each of a nodes wins, the points it gains from its competitor?
_.forEach(nodes, (node, key) => {
  node.trueScore = 0;
  _.forEach(node.wins, (id) => {
    node.trueScore += Math.abs(nodes[id].ratio - node.ratio);
  })
})
/*for(let i = 0; i < 3; i++)
{
  _.forEach(nodes, (node, key) => {
  //node.trueScore = 0;
  _.forEach(node.wins, (id) => {
    node.trueScore += Math.abs(nodes[id].lossRatio - node.lossRatio);
  })
})
}*/

//loose points for loosing 
/*_.forEach(nodes, (node, key) => {
    node.score3 = 0;
  _.forEach(node.losses, (id) => {
    node.score3 -= Math.abs(nodes[id].ratio - node.ratio);
  })
})*/
/*

for(let i=0;i<Object.keys(nodes).length;i++) {
  //console.log((nodes[(Object.keys(nodes)[i])].wins.length)/(nodes[(Object.keys(nodes)[i])].losses.length) + nodes[(Object.keys(nodes)[i])].wins.length);//trueScore
  console.log(nodes[Object.keys(nodes)[i]].trueScore);
}

*/