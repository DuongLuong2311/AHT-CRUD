import {
  createContext,
  useReducer
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
   

  //Set Student
  const setStudent = (newStudent) => {
    dispatchStudents({
        type: actionName.SET_STUDENT,
        payload: newStudent,
      });
  }
 

  // Get Student
  const getStudent = () =>{
    studentsAPI.getStudents("").then((res) => {
      dispatchStudents({
        type: actionName.GET_STUDENTS,
        payload: res.data,
      });
    });
  }


  //Get Student By ID
  const getStudentByID = (id) =>{
    studentsAPI.getStudents(id).then((res) => {
      dispatchStudents({
        type: actionName.GET_STUDENTBYID,
        payload: res.data,
      });
    });
    
  }


    //Delete Student
    const deleteStudent = (id) => {
      studentsAPI.deleteStudents(id).then((res) => {
        dispatchStudents({
            type: actionName.DELETE_STUDENTS,
            payload: id
        })

      })
    }


    //Edit Student
    const editStudent = (student, id) => {
      studentsAPI.putStudent(student, id).then((res) => {
        dispatchStudents({
            type: actionName.EDIT_STUDENTS,
            payload: student
        })

      })
    }


    //Add Student
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