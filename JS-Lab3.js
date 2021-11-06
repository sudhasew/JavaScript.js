var submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

function addSubmissions(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
}

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
  let foundName = array.findIndex((item) => {
    return item.name === name;
  });
  if (foundName >= 0) {
    array.splice(foundName, 1);
  }
}
function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
}
function findSubmissionByName(array, name) {
  const foundStudent = array.find((item) => {
    return item.name === name;
  });
  console.log(foundStudent);
}

function findLowestScore(array) {
  let lowestScore = array[0].score;
  array.forEach((item) => {
    if (lowestScore > item.score) {
      lowestScore = item.score;
    }
  });
  return lowestScore;
}

function findHighestScore(array) {
  let highestScore = array[0];
  array.forEach((item) => {
    if (highestScore < item.score) {
      highestScore = item.score;
    }
  });
  return highestScore;
}

function findHighestScoreArray(array) {
  let highestScore = array[0].score;
  array.forEach((item) => {
    if (highestScore < item.score) {
      highestScore = item.score;
    }
  });
  return highestScore;
}

let averageQuizScore = function findAverageScore(array) {
  let sum = 0;
  for (arr of array) {
    sum += arr.score;
  }
  const avg = sum / array.length;
  console.log("Found Average", avg);
};

function filterPassing(array) {
  let filterdMethods = array.filter((item) => {
    return item.passed == true;
  });
  console.log("Printed Passed score", filterdMethods);
}

function filter90AndAbove(array) {
  let filterdMethods = array.filter((item) => {
    return item.score >= 90;
  });
  console.log("Printed Score 90 and above", filterdMethods);
}

addSubmissions(submissions, "Sudha", 80, "2021-11-04");
console.log("Updated extra name", submissions);
deleteSubmissionByIndex(submissions, 1);
console.log("deleted Joe by index", submissions);
deleteSubmissionByName(submissions, "Jill");
console.log("Deleted name Jill by name", submissions);
editSubmission(submissions, 1, 55);
console.log("Edited Score and index", submissions);
findSubmissionByName(submissions, "Sudha");
findLowestScore(submissions);
console.log(findLowestScore(submissions));
findHighestScore(submissions);
console.log(findHighestScore(submissions));
findHighestScoreArray(submissions);
console.log(findHighestScoreArray(submissions));
averageQuizScore(submissions);
filterPassing(submissions);
filter90AndAbove(submissions);
