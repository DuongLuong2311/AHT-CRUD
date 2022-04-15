import {
  createContext,
  useReducer,
  
} from 'react'


// Constant
import actionName from '../constant/actionsName'


// Reducer
import studentReducer from '../reducer/studentReducer'


//APIs
import studentsAPI from "../service/students/getStudents";


export const GlobalContext = createContext(null)


export const Provider = ({children}) => {


  
// ------------------------Students------------------------
  const [stateStudents, dispatchStudents] = useReducer(studentReducer ,[])
   

  const setStudent = (newStudent) => {
    dispatchStudents({
        type: actionName.SET_STUDENT,
        payload: newStudent,
      });
  }
 
  const getStudent = () =>{
    studentsAPI.getStudents("").then((res) => {
      dispatchStudents({
        type: actionName.GET_STUDENTS,
        payload: res.data,
      });
    });
  }

  const getStudentByID = (id) =>{
    studentsAPI.getStudents(id).then((res) => {
      dispatchStudents({
        type: actionName.GET_STUDENTBYID,
        payload: res.data,
      });
    });
    
  }

    const deleteStudent = (id) => {
      studentsAPI.deleteStudents(id).then((res) => {
        dispatchStudents({
            type: actionName.DELETE_STUDENTS,
            payload: id
        })

      })
    }

    const editStudent = (student, id) => {
      studentsAPI.putStudent(student, id).then((res) => {
        dispatchStudents({
            type: actionName.EDIT_STUDENTS,
            payload: student
        })

      })
    }

    const addStudent = (student) => {
      studentsAPI.postStudent(student).then((res) => {
        dispatchStudents({
            type: actionName.ADD_STUDENTS,
            payload: student
        })

      })
    }



  
  const value = {
    //Students
    students: stateStudents?.students,
    student:stateStudents?.student,
    deleteStudent,
    addStudent,
    editStudent,
    setStudent,
    getStudentByID,
    getStudent,

    
  }

  
  
  
  return (
    <GlobalContext.Provider value={[value, dispatchStudents]}>
      {children}
    </GlobalContext.Provider>
  )
}