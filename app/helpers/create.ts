import axios from "axios";

const urlOne = `http://chilp.it/api.php?url=`;

const urlPOST = async (url: string, host: string) => {
  try {
    const result = (await axios.get(`${host}${url}`)).data;
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default async function shortME(url: string) {
  const urlChilpIt = await urlPOST(url, urlOne);
  return urlChilpIt;
}
