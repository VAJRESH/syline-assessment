let data = require("../userData.json");
const fs = require("fs");

function getData() {
  return data;
}

function saveData(data) {
  fs.writeFileSync("../userData.json", JSON.stringify(data, null, 4));
}

export { getData, saveData };
