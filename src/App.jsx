import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'



// import { useGlobalContext } from "./context";



//Component 
import Menu from './components/Menu.jsx'



//View 
import Home from './view/Home'
import Students from './view/Students'
import StudentForm from './components/StudentForm';
import Classes from './view/Classes'
import ClassesForm from './components/ClassesForm';

//SCSS 
import './sass/main.scss'


function App() {

  return (

      <BrowserRouter>

        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/add" element={<StudentForm />} />
          <Route path="/students/edit/:id" element={<StudentForm />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/add" element={<ClassesForm />} />
          <Route path="/classes/edit/:id" element={<ClassesForm />}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;