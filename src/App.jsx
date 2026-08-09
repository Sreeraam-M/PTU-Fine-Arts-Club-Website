import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { ScrollToTop } from './lib/ScrollToTop'

// Route-level code splitting
const Home = lazy(() => import('./pages/Home'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Events = lazy(() => import('./pages/Events'))
const Artwork = lazy(() => import('./pages/Artwork'))
const Team = lazy(() => import('./pages/Team'))
const Achievements = lazy(() => import('./pages/Achievements'))
const About = lazy(() => import('./pages/About'))
const Membership = lazy(() => import('./pages/Membership'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter basename="/PTU-Fine-Arts-Club-Website">
      <ScrollToTop />

      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/team" element={<Team />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}