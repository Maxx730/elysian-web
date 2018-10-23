export default function NavigationReducer(state,action){
    switch(action.type){
        case "NAVIGATE_TO":
            return {
                Current:action.payload
            }
        break;
        default:
            return {
                ...state
            }
        break;
    }
}