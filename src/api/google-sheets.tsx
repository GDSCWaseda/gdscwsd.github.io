/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*

API to fetch from google sheets


*/

import env from 'react-dotenv'
import axis from 'axios'
import { useState } from 'react'

const API_URL: string = env.API_URL
export const getData = () => {

  const [data, setData] = useState({})
  axis
    .get(API_URL)
    .then(res => {
      console.log(res)
      setData(data)
    })
    .catch(error => {
      console.log(error)
    })
  return data;
}
