import usersActions from '../actions/user.actions'
const { SET_USER_DATA } = usersActions.usersTypes

interface Action {
    type: string
    payload: Object
}

const initState = {}

export default function user(state = initState, action: Action) {
    console.log('user reducer')
    console.log(action)
    console.log(state)

    switch (action.type) {
        case SET_USER_DATA:
            console.log('in set user data ')
            return {
                ...state,
                userData: action.payload as any,
            }
        default:
            console.log('in default ')
            return state
    }
}
