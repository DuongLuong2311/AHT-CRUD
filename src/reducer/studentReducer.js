import actionName from "../constant/actionsName";


const studentReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
      case actionName.GET_STUDENTS:
        return {
            students: payload
        }
        case actionName.ADD_STUDENTS:
          return state.students && {
            students: [
              payload,
              ...state.students
            ]
          } 
      case actionName.GET_STUDENTBYID:
        return {
          student: payload
        }
      case actionName.SET_STUDENT:
        return {
          student: payload
        }
      case actionName.DELETE_STUDENTS:
        return {
          students: state.students.filter(student=>{
            return student.id !== payload
          })
        }
      case actionName.EDIT_STUDENTS:
        break;
      default:
        break;
  }
};

export default studentReducer