module.exports.queryString = (obj) =>
  Object.entries(obj)
    .map((item) => {
      return `${item[0]}=${item[1]}`;
    })
    .join("&");
