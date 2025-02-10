import { useState, useEffect } from 'react';
import axios from 'axios';

function fetchData(url) {
  useEffect( async ()=>{
    await axios.get(url)
    .then((response)=>response.data)
  },[])
}

export default fetchData;