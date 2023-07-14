// export const initState = {
//     max: 0,
//     min: 0,
//     count: 0
// }
//
// export type SetMaxACType = {
//     type: "SET-MAX"
//     value: number
// }
// export type SetStartACType = {
//     type: "SET-START"
//     value: number
// }
//
// export type SetCountACType = {
//     type: "SET-COUNT"
//     value: number
// }
// export const counterReducer = (state, action) => {
//     switch (action.type){
//          case "SET-MAX": {
//          return { ...state, max: action.value }
//          }
//          case "SET-START":{
//              return { ...state, start: action.value}
//          }
//         case "SET-COUNT":{
//             return {...state, count: action.value}
//         }
//          default:
//          return state
//     }
// }
//
//
// export const setMaxAC = (value: number): SetMaxACType => {
//     return { type: 'SET-MAX', value } as const
// }
//
// export const setStartAC = (value: number): SetStartACType => {
//     return { type: "SET-START", value } as const
// }
//
// export const setCountAC = (value: number): SetCountACType => {
//     return{type: "SET-COUNT", value} as const
// }