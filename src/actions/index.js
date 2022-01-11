const pageChange = (page) => {
  return {
    type: "PAGECHANGE",
    payload: page,
  };
};

const getData = (data) => {
  return {
    type: "GETDATA",
    payload: data,
  };
};

module.exports = { pageChange, getData };
