import React ,{createContext ,useState} from 'react'
import './App.css';
import './asssets/style.css'
import SwitchButton from './components/Switch';
import CustomizedSelects from './components/CustomizedSelects'
import Accordian from './components/Accordian';
import Backdropcmp from './components/Backdropcmp';
import Skeletoncmp from './components/Skeleton';
import FileUpload from './components/FileUpload';
import ComponentA from './components/ComponentA';
import FormValidation from './components/FormValidation';
import PhotoGallary from './PhotoGallary/PhotoGallary';
// import LazyLoading from './components/LazyLoading';
// import ChildCompo from './components/ChildCompo';
// import FormElements from './components/FormElements';
 
export const UserContext = createContext()

function App() {
  //  const userContext = useContext(null)

  return (
     
   

   <React.Fragment>
    <PhotoGallary />
    </React.Fragment>

     
  );
}

export default App;
