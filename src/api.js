import axios from "axios";

const base = process.env.REACT_APP_SERVER

export const getData = async () => {
  const data = await axios.get(`${base}/product/list`);
  return data.data.detailData
  console.log({datanya : data.data.detailData});
};
