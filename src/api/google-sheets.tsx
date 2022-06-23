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
  console.log(API_URL)
  axis
    .get(API_URL) // GETメソッドを呼び出す
    .then(res => {
      // レスポンスを受け取ったらthenを実行する
      console.log(res)
    })
    .catch(error => {
      // エラーコードが返ってきた場合
      console.log(error) // エラーコードを表示
    })
}
