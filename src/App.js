import {
  BackendTeamPage,
  EducationTeamPage,
  EventTeamPage,
  FinanceTeamPage,
  FrontendTeamPage,
  MarketingTeamPage,
  OutreachTeamPage,
  ProjectTeamPage,
} from 'frontend-page/team-page/index'
/*
react-router-dom v6 から、講義中のバージョンとは以下の箇所が異なる
1. "Router"→"BrowserRouter"
2. "Switch"→"Routes"
3. "exact path"→"path"
4. "component={ コンポーネント名 }"→"element={ < コンポーネント名 /> }"
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from 'components/Footer/Footer'
import { HomePage } from 'home-page/home-page'
import { MembersPage } from 'frontend-page/MembersPage'
import NavigationBar from 'components/NavigationBar/NavigationBar'
import React from 'react'
import TeamPage from 'frontend-page/TeamPage'

function App() {
  const teamPages = {
    backend: <BackendTeamPage />,
    education: <EducationTeamPage />,
    event: <EventTeamPage />,
    finance: <FinanceTeamPage />,
    frontend: <FrontendTeamPage />,
    marketing: <MarketingTeamPage />,
    outreach: <OutreachTeamPage />,
    project: <ProjectTeamPage />,
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/members" element={<MembersPage />} />
        {Object.keys(teamPages).map((teamPage) => (
          <Route path={`/team/${teamPage}`} element={teamPages[teamPage]} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
