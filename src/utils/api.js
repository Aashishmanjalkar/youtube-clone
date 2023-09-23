import axios from "axios";


const BASE_URL =  'https://youtube138.p.rapidapi.com';

// console.log(process.env.REACT_APP_YOUTUBE_API_KEY.trim());
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '9bad91e652msh3cb80bd006d7f5fp13945cjsnf8699135458a',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export  const fetchDataFromAPi = async (url)=>{
  try {
  
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data
  } catch (error) {
    console.error(error);
  }
}