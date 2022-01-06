import axios from 'axios';

export const Api=()=>{
    return async(dispatch)=>{
       await axios.get("https://swapi.dev/api/people/")
      .then(res=>{
          console.log(res)
          dispatch({type:"LOAD_ITEMS",payload:res.results})

        })
      
    }

}




























// export function loadApi(){
//     return(dispatch)=>{
//         return axios.get("https://swapi.dev/api/people/").then((res)=>{
//             dispatch(changeload(res.Allow))
//         })
//     }
//     export function changeload(items){
//         return {
//             type:"LOAD_ITEMS",
//             items:items
//         }
//     }
// }