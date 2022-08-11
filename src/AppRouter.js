import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
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
import AcadCordinator from './pages/AcadCordinator';
import NewNavbar from './components/NewNavbar';
import Menu from './components/Menu';
import Test from './components/Test';
import { useRef } from 'react';
// import ScrollIntoView from 'react-scroll-into-view'
const AppRouter = () => {
  const footref = useRef();
  const [fixedmenu, setFixedmenu] = useState(true);
  useEffect(() => {
    const isInViewport = () => {
      const rect = footref.current.getBoundingClientRect();
      // console.log(fixedmenu);
      setFixedmenu(
        (rect.top >= 700 &&
          rect.bottom >=1128
        )
      );
    }
    window.addEventListener('scroll', isInViewport);
  }, [fixedmenu]);
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
    },
    {
      date: "20-June-2022",
      heading: "Retail inflation above 6% for 6 months in a row, rising food costs a major concern now",
      details: "Sri Lankan President Gotabaya Rajapaksa on Wednesday flew out of the country and landed in the Maldives. Gotabaya Rajapaksa had earlier hinted he would not resign till his family got a safe exit from the country."
    },
    {
      date: "20-June-2022",
      heading: "Retail inflation above 6% for 6 months in a row, rising food costs a major concern now",
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
    <>
      <div className='m-0 p-0 w-full h-full'>
        <Router>
          <div className='w-full mb-2'>
            {/* <Navbar handlescroll={handlescroll} offtop={offtop} setOfftop={setOfftop} /> */}
            <NewNavbar />
            {/* <Test/> */}
          </div>

          <div className="grid-container mt-[6.5rem]">
            <div className="item1 relative right-2">
              <div className={"-bottom-1 block h-[82.8vh] overflow-y-auto overflow-x-hidden scrollbar " + (fixedmenu ? 'fixed' : 'absolute')}>
                <Menu />
              </div>
            </div>
            <div className="item2 border mt-2">
              <Routes>
                <Route exact path='/' element={<Homepage />} />
                {/* <Route exact path='/placements' element={<Test/>} /> */}
                <Route path='/placements' element={<AllPlacement />} />
                <Route path='*' element={<Error />} />
                {/* About us */}
                <Route path='/MessageofHOD' element={<HodMessage />} />
                <Route path='/MissionandVision' element={<VisionandMission />} />
                <Route path='/Infrastructure' element={<Infrastructure />} />
                <Route exact path='/news' element={<Viewall latest={news} heading='Latest News' />} />
                <Route exact path='/activities' element={<Viewall latest={activity} heading='Activities' />} />
                <Route exact path='/highlights' element={<Viewall latest={highlights} heading='Highlights' />} />
                {/* Academic */}
                <Route path='/Syllabus' element={<Syllabus heading='Syallbus' syllabus={true} />} />
                <Route path='/Timetable' element={<Syllabus heading='Time Table' syllabus={false} />} />
                <Route path='/Acadcord' element={<AcadCordinator />} />
              </Routes>
            </div>
          </div>
          <div ref={footref} className='w-full'>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  )
};


export default AppRouter;
