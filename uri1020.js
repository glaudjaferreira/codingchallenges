var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let lifetime = parseInt(lines.shift());
let times = [[365, " ano(s)"], [30, " mes(es)"], [1, " dia(s)"]];

for(let date of times){
  let count = parseInt(lifetime/date[0]);
  lifetime = lifetime % date[0];
  console.log(count + date[1]);
}