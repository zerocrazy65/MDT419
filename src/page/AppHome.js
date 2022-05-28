import AppHeader from '../components/AppHeader';
import AppSlide from '../components/AppSlide';
import AppContent from '../components/AppContent';
import AppAbout from '../components/AppAbout';
import AppFooter from '../components/AppFooter';
import AppGuide from '../components/AppGuide';

function AppHome() {
  return (
    <div>    
        <AppSlide/>
        <AppGuide/>
        <AppContent/>
        <AppAbout/>
        <AppFooter/>
    </div>
  )
}

export default AppHome