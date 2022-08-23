import Footer from './components/Footer';
import { useEffect, useState,useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlacement from './components/AllPlacement';
import Error from './pages/Errorpage';
import Homepage from './pages/Homepage';
import HodMessage from './pages/HodMessage';
import VisionandMission from './pages/VisionandMission';
import Syllabus from './pages/Syllabus';
import Infrastructure from './pages/Infrastructure'
import Viewall from './components/Viewall';
import AcadCordinator from './pages/AcadCordinator';
import NewNavbar from './components/NewNavbar';
// import Menu from './components/Menu';
import ContactUs from './pages/ContactUs';
import Achievements from './pages/Achievements';
import Test from './components/Test';
import { useRef } from 'react';
import Programme from './pages/Programme';
const AppRouter = () => {
  const footref = useRef();
  const isInViewport1 = useIsInViewport(footref);
  console.log('isInViewport1: ', isInViewport1);
  const [fixedmenu, setFixedmenu] = useState(isInViewport1);
  useEffect(() => {
    setFixedmenu(isInViewport1);
  }, [isInViewport1]);
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
      <div className='top-0 p-0 my-0 mx-auto max-w-[1600px] h-full'>
        <Router>
          <div className='md:mb-2'>
            <NewNavbar />
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:mt-[6.5rem] lg:min-h-screen overflow-y-auto overflow-x-hidden">
            <div className=" w-full lg:w-72 absolute lg:relative bg-white z-10 p-2">
              <div className='w-full my-auto lg:shadow-lg lg:block lg:pt-8 h-full'>
                {/* <Menu /> */}
                <Test fixedmenu={fixedmenu} />
              </div>
            </div>
            <div className="w-full flex items-center justify-center lg:w-[calc(100%-18rem)] mt-8 md:mt-2 h-full">
              <Routes>
                <Route path='/' element={<Homepage />} />
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
                <Route path='/Programme' element={<Programme />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/achievements' element={<Achievements />} />
                {/* <Route path='/achievements' element={<Test/>} /> */}
              </Routes>
            </div>
          </div>
          <div ref={footref} className='w-full h-full'>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  )
};


export default AppRouter;

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}