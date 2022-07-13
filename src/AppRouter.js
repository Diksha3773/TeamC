import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlacement from './components/AllPlacement';
import Error from './pages/Errorpage';
import Homepage from './pages/Homepage';
import HodMessage from './pages/HodMessage';
import VisionandMission from './pages/VisionandMission';
import Syllabus from './pages/Syllabus';
import Infrastructure from './pages/Infrastructure'
import Timetable from './pages/Timetable';
import Viewall from './components/Viewall';

const AppRouter = () => {
  const [scroll, setScroll] = useState(false);
  const handlescroll = () => {
    setScroll(!scroll);
  }
  const activity = [
    {
      date: "20-July-2022",
      heading: "Sri Lanka President Gotabaya Rajapaksa flees to Maldives as protests escalate | Top Points",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    },
    {
      date: "10-July-2022",
      heading: "UK Home Secretary Priti Patel rules herself out of bid to replace Boris Johnson",
      details: "Priti Patel - widely expected to become another Indian-origin candidate in the race for the post of Conservative Party leader and the next British prime minister - on Tuesday ruled out a bid, saying she was  for the encouragement but her focus remains on her current job as Home Secretary.."
    },
    {
      date: "2-July-2022",
      heading: "Not just economy, democratic values have also been collapsing in Sri Lanka  ",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    },
    {
      date: "20-June-2022",
      heading: "Retail inflation above 6% for 6 months in a row, rising food costs a major concern now",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    }
  ];
  const news = [
    {
      date: "20-July-2022",
      heading: "Sri Lanka President Gotabaya Rajapaksa flees to Maldives as protests escalate | Top Points",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    },
    {
      date: "10-July-2022",
      heading: "UK Home Secretary Priti Patel rules herself out of bid to replace Boris Johnson",
      details: "Priti Patel - widely expected to become another Indian-origin candidate in the race for the post of Conservative Party leader and the next British prime minister - on Tuesday ruled out a bid, saying she was  for the encouragement but her focus remains on her current job as Home Secretary.."
    },
    {
      date: "2-July-2022",
      heading: "Not just economy, democratic values have also been collapsing in Sri Lanka  ",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    },
    {
      date: "20-June-2022",
      heading: "Retail inflation above 6% for 6 months in a row, rising food costs a major concern now",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    }
  ];
  const highlights = [
    {
      date: "20-July-2022",
      heading: "Sri Lanka President Gotabaya Rajapaksa flees to Maldives as protests escalate | Top Points",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    },
    {
      date: "10-July-2022",
      heading: "UK Home Secretary Priti Patel rules herself out of bid to replace Boris Johnson",
      details: "Priti Patel - widely expected to become another Indian-origin candidate in the race for the post of Conservative Party leader and the next British prime minister - on Tuesday ruled out a bid, saying she was  for the encouragement but her focus remains on her current job as Home Secretary.."
    },
    {
      date: "2-July-2022",
      heading: "Not just economy, democratic values have also been collapsing in Sri Lanka  ",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    },
    {
      date: "20-June-2022",
      heading: "Retail inflation above 6% for 6 months in a row, rising food costs a major concern now",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    }
  ];
  return (
    <Router>
      <Navbar handlescroll={handlescroll} />
      <Routes>
        <Route exact path='/' element={<Homepage />}  />
        <Route path='/placements' element={<AllPlacement />} />
        <Route path='/MessageofHOD' element={<HodMessage />} />
        <Route path='/Syllabus' element={<Syllabus />} />
        <Route path='/Timetable' element={<Timetable />} />
        <Route path='*' element={<Error />} />
        <Route path='/MissionandVision' element={<VisionandMission />} />
        <Route path='/Infrastructure' element={<Infrastructure />} />
        <Route path='/Viewall/:activities' element={<Viewall latest={activity} />} />
        <Route path='/Viewall/:news' element={<Viewall latest={{ news }} />} />
        <Route path='/Viewall/:highlights' element={<Viewall latest={highlights} />} />




      </Routes>
      <Footer scroll={scroll} handlescroll={handlescroll} />



    </Router>
  )
};


export default AppRouter;
