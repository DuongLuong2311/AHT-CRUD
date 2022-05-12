import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


//Component 
import Menu from './components/Menu.jsx'



//View 
import Students from './view/Students'
import StudentForm from './components/StudentForm';

//SCSS 
import './sass/main.scss'


function App() {

  return (

      <BrowserRouter>

        <Menu />

        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;