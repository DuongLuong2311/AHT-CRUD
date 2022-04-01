import actionName from "../constant/actionsName";


const classesReducer = (state,action) => {
  const {type, payload} = action;

  switch (type) {
      case actionName.GET_CLASSES:
          return {
              classes: payload
          }
      case actionName.ADD_CLASSES:
          return state.classes && {
              classes: [
                payload,
                ...state.classes
              ]
          }
      case actionName.GET_CLASSESBYID:
        return {
          class: payload
        }
      case actionName.SET_CLASS:
        return {
          class: payload
        }
      case actionName.DELETE_CLASSES:
          return{
              classes: state.classes.filter(item=>{
                      return item.id !== payload
                  })
          }
      case actionName.EDIT_CLASSES:
          break;
      default: 
          break;
  }
}

export default classesReducer