export function NavigateTo(dispatch,Page){
    dispatch({
        type:"NAVIGATE_TO",
        payload:Page
    })
}