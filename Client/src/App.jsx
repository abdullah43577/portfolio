import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Home from './components/Pages/Home';
import RootLayout from './components/RootLayout';
import Services from './components/Pages/Services';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Pages/Contact';
import Blog from './components/Pages/Blog';
import Upload from './components/Pages/Upload';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="education" element={<Education />} />
      <Route path="blogs">
        <Route index element={<Blog />} />
        <Route path="upload" element={<Upload />} />
      </Route>
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
