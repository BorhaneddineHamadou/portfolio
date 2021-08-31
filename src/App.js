import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/HeaderComponent';
import Navbar from './components/NavbarComponent';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
       <Particles className="particles-canvas" params={{
         particles: {
             number: {
               value: 30,
               density: {
                 enable:true,
                 value_area: 900
               }
             },
             shape:{
               type: 'circle',
               stroke: {
                 width: 6,
                 color: "#05F6E7"
               }
             }
         }
       }} />
       <Navbar />
       <Header />
    </>
  );
}

export default App;
