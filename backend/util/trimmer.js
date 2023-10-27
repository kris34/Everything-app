const trimmer = (obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = obj[curr].trim();
    return acc;
  }, {});
};

module.exports = trimmer;
