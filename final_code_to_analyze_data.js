const _ = require('lodash');
const decisions = [
  {},{}
];
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
  node.ratio = node.wins.length / (node.wins.length + node.losses.length)
})


//score2
_.forEach(nodes, (node, key) => {
  node.score2 = 0;
  _.forEach(node.wins, (id) => {
    node.score2 += Math.abs(nodes[id].ratio - node.ratio);
  })
})

//score3 starting at 0
_.forEach(nodes, (node, key) => {
    node.score3zero = 0;
  _.forEach(node.losses, (id) => {
    node.score3zero -= Math.abs(nodes[id].ratio - node.ratio);
  })
})

//score3 starting at score2
_.forEach(nodes, (node, key) => {
    node.score3 = node.score2;
  _.forEach(node.losses, (id) => {
    node.score3 -= Math.abs(nodes[id].ratio - node.ratio);
  })
})

//score4  10 iterations (just adding) but using score2 over and over again…?
/*_.forEach(nodes, (node, key) => {
  node.score4 = node.score2;//start out where we left off with score2
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score4 += Math.abs(nodes[id].ratio - node.ratio);
  })
})*/

//take the difference between the NEW truescores (instead of doing the ratio)
//score 5
_.forEach(nodes, (node, key) => {
  node.score5 = 0;
  _.forEach(node.wins, (id) => {
    node.score5 += Math.abs(nodes[id].score2 - node.score2);
  })
})

//score6
_.forEach(nodes, (node, key) => {
  node.score6 = node.score2;
  node.score7 = node.score2;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})
_.forEach(nodes, (node, key) => {
  _.forEach(node.wins, (id) => {
    node.score6 += Math.abs(nodes[id].score7 - node.score7);
  })
})
_.forEach(nodes, (node, key) => {
  node.score7 = node.score6;
})




//print out desire results 
for(let i=0;i<Object.keys(nodes).length;i++) {
  //console.log((nodes[(Object.keys(nodes)[i])].id)); //column0
  //console.log((nodes[(Object.keys(nodes)[i])].wins.length)); //column1
  //console.log((nodes[(Object.keys(nodes)[i])].losses.length)); //column2
  //console.log(nodes[(Object.keys(nodes)[i])].losses.length + nodes[(Object.keys(nodes)[i])].wins.length);//column3
  //console.log((nodes[(Object.keys(nodes)[i])].wins.length)/((nodes[(Object.keys(nodes)[i])].losses.length) + nodes[(Object.keys(nodes)[i])].wins.length));//column4 wins over matches
  //console.log((nodes[(Object.keys(nodes)[i])].wins.length)/((nodes[(Object.keys(nodes)[i])].losses.length)));//column5 wins over losses
  //console.log((nodes[(Object.keys(nodes)[i])].losses.length)/((nodes[(Object.keys(nodes)[i])].wins.length)));//column6 losses over wins 
  //console.log(nodes[(Object.keys(nodes)[i])].score2);
  //console.log(nodes[(Object.keys(nodes)[i])].score3zero);
  //console.log(nodes[(Object.keys(nodes)[i])].score3);
  //console.log(nodes[(Object.keys(nodes)[i])].score4);
  //console.log(nodes[(Object.keys(nodes)[i])].score5);
  console.log(nodes[(Object.keys(nodes)[i])].score6);
}
