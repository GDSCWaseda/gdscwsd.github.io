/*
react-router-dom v6 から、講義中のバージョンとは以下の箇所が異なる
1. "Router"→"BrowserRouter"
2. "Switch"→"Routes"
3. "exact path"→"path"
4. "component={ コンポーネント名 }"→"element={ < コンポーネント名 /> }"
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer/Footer'
import { MembersPage } from './frontend-page/MembersPage'
import React from 'react'
import TeamPage from './frontend-page/TeamPage'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/team" element={<TeamPage />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
