// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
  let result = [];
  for (let ele of list) {
    if (ele.language === "JavaScript" && ele.continent === "Europe") {
      result.push(ele);
    }
  }
  const total = result.length > 0 ? result.length : 0;
  return total;
}

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
  return list.filter((a) => a.language == "Ruby").length > 0;
}

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
function getFirstPython(list) {
  const pythonDeveloper = list.filter((ele) => ele.language == "Python");
  return pythonDeveloper.length > 0
    ? `${pythonDeveloper[0].firstName}, ${pythonDeveloper[0].country}`
    : "There will be no Python developers";
}
