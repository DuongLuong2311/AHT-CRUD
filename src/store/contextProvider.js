import {
  createContext,
  useState, 
  useReducer,
  useEffect
} from 'react'


// Constant
import actionName from '../constant/actionsName'


// Reducer
import studentReducer from '../reducer/studentReducer'
import classesReducer from '../reducer/classReducer'

import studentsAPI from "../service/students/getStudents";
import classesAPI from '../service/classes/getClasses';


export const GlobalContext = createContext(null)


export const Provider = ({children}) => {


  //---Classes---
    const [stateClasses, dispatchClasses] = useReducer(classesReducer ,[])

  const setClass = (newClass) => {
    dispatchStudents({
        type: actionName.SET_CLASS,
        payload: newClass,
      });
  }

    const getClass = () => {
      classesAPI.getClasses("").then((res)=> {
        dispatchClasses({
          type: actionName.GET_CLASSES,
          payload: res.data
        })
      })
    }

  const getClassByID = (id) =>{
    classesAPI.getClasses(id).then((res) => {
      dispatchClasses({
        type: actionName.GET_CLASSESBYID,
        payload: res.data,
      });
    });
  }

    const deleteClasses = (id) => {
      classesAPI.deleteClasses(id).then((res) => {
        dispatchClasses({
          type: actionName.DELETE_CLASSES,
          payload: id
        })
      })
    }

    const editClasses = (item,id) => {
      classesAPI.putClasses(item, id).then((res) => {
        dispatchClasses({
            type: actionName.EDIT_CLASSES,
            payload: item
        })

      })
    }


    const addClass = (item) => {
      classesAPI.postClasses(item).then((res) => {
        dispatchStudents({
            type: actionName.ADD_CLASSES,
            payload: item
        })

      })
    }



  
// Students
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
    students: stateStudents?.students,
    student:stateStudents?.student,
    classes: stateClasses?.classes,
    class: stateClasses?.class,
    deleteStudent,
    addStudent,
    editStudent,
    setStudent,
    getStudentByID,
    getStudent,
    deleteClasses,
    addClass,
    editClasses,
    setClass,
    getClassByID,
    getClass
  }

  
  
  
  return (
    <GlobalContext.Provider value={[value, dispatchStudents, dispatchClasses]}>
      {children}
    </GlobalContext.Provider>
  )
}