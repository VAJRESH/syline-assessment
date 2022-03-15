const getFormattedTime = (timeInSeconds) => {
  let timeLeft = +timeInSeconds;
  var h = Math.floor(timeLeft / 3600);
  var m = Math.floor((timeLeft % 3600) / 60);
  var s = Math.floor((timeLeft % 3600) % 60);

  return `${h} : ${m} : ${s}`;
};

export { getFormattedTime };
