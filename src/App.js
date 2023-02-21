import './App.css';
import Navbar from './components/Navbar';
import SpecilizationCertificate from './components/SpecilizationCertificate'
import FrontendCertificate from './components/FrontendProfessionalCertificate';
import BackendCertificate from './components/BackendProfessionalCertificate';
import Coursera from './components/Coursera';
import Udemy from './components/Udemy';
import Misc from './components/Misc';
import Footer from './components/Footer';
import TableData from './components/TableData';

function App() {
  return (
    <>
    {/* <TableData></TableData> */}
      <Navbar></Navbar>
      <SpecilizationCertificate></SpecilizationCertificate>
      <FrontendCertificate></FrontendCertificate>
      <BackendCertificate></BackendCertificate>
      <Coursera></Coursera>
      <Udemy></Udemy>
      <Misc></Misc>
      <Footer></Footer>
    </>
  );
}

export default App;
