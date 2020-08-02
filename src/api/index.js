import axios from 'axios';

//Mark:- Writing function to get .json data
const url = 'https://www.reddit.com/.json';
export default function getSubReddits() {
  return axios.get(url);
}
