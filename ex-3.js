// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;

minScore = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i] < minScore) {
    minScore = scores[i];
  }
}

console.log(minScore);
