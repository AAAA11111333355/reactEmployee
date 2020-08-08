export default function(state={},action){
    switch(action.type){
        case 'GET_EMPLOYEES':
            return { ...state,list:action.payload }
        case 'GET_EMPLOYEE':
            return {...state,employee:action.payload}
        case 'GET_EMPLOYEE_W_REVIEWER':
            return {
                ...state,
                employee:action.payload.employee,
                reviewer:action.payload.reviewer
            }
        case 'CLEAR_EMPLOYEE_W_REVIEWER':
            return {
                ...state,
                employee:action.payload.employee,
                reviewer:action.payload.reviewer
            }
        case 'ADD_EMPLOYEE':
            return {...state,newEmployee:action.payload}
        case 'CLEAR_NEWEMPLOYEE':
            return {...state,newEmployee:action.payload}
        case 'UPDATE_EMPLOYEE':
            return {
                ...state,
                updateEmployee:action.payload.success,
                employee:action.payload.doc
            }
        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                postDeleted:action.payload
            }
        case 'CLEAR_EMPLOYEE':
            return {
                ...state,
                updateEmployee:action.payload.updateEmployee,
                employee:action.payload.employee,
                postDeleted:action.payload.postDeleted
            }
        default:
            return state;
    }
}