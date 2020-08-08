import axios from 'axios';

export function getEmployees(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){

    const request = axios.get(`/api/employees?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                            if(list){
                                return [...list,...response.data]
                            } else {
                                return response.data
                            }
                        }
                    )

    return {
        type:'GET_EMPLOYEES',
        payload:request
    }

}

export function getEmployeeWithReviewer(id){
    const request = axios.get(`/api/getEmployee?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let employee = data;

            axios.get(`/api/getReviewer?id=${employee.ownerId}`)
            .then(({data})=>{
                let response = {
                    employee,
                    reviewer:data
                }

                dispatch({
                    type:'GET_EMPLOYEE_W_REVIEWER',
                    payload:response
                })
            })
        })
    }
}

export function clearEmployeeWithReviewer(){
    return {
        type:'CLEAR_EMPLOYEE_W_REVIEWER',
        payload:{
            employee:{},
            reviewer:{}
        }
    }
}

export function addEmployee(employee){
    const request = axios.post('/api/employee',employee)
        .then(response => response.data);

    return {
        type:'ADD_EMPLOYEE',
        payload:request
    }
}
export function clearNewEmployee() {
    return {
        type:'CLEAR_NEWEMPLOYEE',
        payload:{}
    }
}

export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function getEmployee(id){
    const request = axios.get(`/api/getEmployee?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_EMPLOYEE',
        payload:request
    }
}


export function updateEmployee(data){
    const request = axios.post(`/api/employee_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_EMPLOYEE',
        payload:request
    }

}

export function deleteEmployee(id){
    const request = axios.delete(`/api/delete_employee?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_EMPLOYEE',
        payload:request
    }
}

export function clearEmployee(){
    return{
        type:'CLEAR_EMPLOYEE',
        payload:{
            employee:null,
            updateEmployee:false,
            postDeleted:false
        }
    }
}


/*========= USER ===========*/

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
                .then(response => response.data)

    return {
        type:'USER_LOGIN',
        payload:request
    }
}

export function auth(){
    const request = axios.get('/api/auth')
                .then(response => response.data);

    return {
        type:'USER_AUTH',
        payload:request
    }

}

export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);

    return {
        type:'GET_USER',
        payload:request
    }
}


export function userRegister(user,userList){
    const request = axios.post(`/api/register`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            let users = data.success ? [...userList,data.user]:userList;
            let response = {
                success:data.success,
                users
            }

            dispatch({
                type:'USER_REGISTER',
                payload:response
            })
        })
    }
}
