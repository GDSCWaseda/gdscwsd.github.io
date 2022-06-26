/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*

API to fetch from google sheets


*/

import { useState } from 'react'

import axis from 'axios'

export const API_URL: string = process.env.REACT_APP_API_URL || ''
export const getData = () => {
  console.log(API_URL)
  /* axis
    .get(API_URL)
    .then((res: any) => {
      console.log(res)
      setData(data)
    })
    .catch((error: any) => {
      console.log(error)
    })
  return data */
}
