let value = {
    users: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [],
    Edituser : []
}

const curdReducer = (state = value, action) => {
    switch (action.type) {
        case 'adduser':
            let all = [...state.users, action.payload];
            localStorage.setItem('user', JSON.stringify(all))
            return {
                ...state,
                users: all
            }

        case 'viewuser':
            return state;

        case 'deleteuser' : 
            let id = action.payload;
            let deldata = state.users.filter((val) => {
                return val.id != id ;
            })
            localStorage.setItem('user' , JSON.stringify(deldata));
            return {
                ...state , 
                users : deldata
            }
            case 'edituser' : 
            let EditID = action.payload;
            let EditData = state.users.filter((val) => {
                return val.id == EditID ;
            })
            localStorage.setItem('user' , JSON.stringify(EditData));
            return {
                ...state , 
                Edituser : EditData
            }
        
        default:
            return state
    }
}

export default curdReducer;