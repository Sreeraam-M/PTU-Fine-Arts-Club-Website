import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { ScrollToTop } from './lib/ScrollToTop';

// Route-level code splitting (TRD §13.2, §13.5). Each page is its own async
// chunk, loaded only when its route is visited. Vendor code shared across
// pages stays in the main bundle; see vite.config.js manualChunks. The
// Suspense boundary lives inside RootLayout around <Outlet/>, so Navbar and
// Footer stay mounted (no layout flash) while a page chunk streams in.
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Events = lazy(() => import('./pages/Events'));
const Artwork = lazy(() => import('./pages/Artwork'));
const Team = lazy(() => import('./pages/Team'));
const Achievements = lazy(() => import('./pages/Achievements'));
const About = lazy(() => import('./pages/About'));
const Membership = lazy(() => import('./pages/Membership'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
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
  );
}
