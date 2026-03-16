const calculateNewDifficulty = (
  currentDifficulty,
  percentage
) => {

  let newDifficulty = currentDifficulty;

  if (percentage >= 85) {
    newDifficulty++;
  }
  else if (percentage < 50) {
    newDifficulty--;
  }

  if (newDifficulty < 1) newDifficulty = 1;
  if (newDifficulty > 3) newDifficulty = 3;

  return newDifficulty;
};

module.exports = {
  calculateNewDifficulty
};