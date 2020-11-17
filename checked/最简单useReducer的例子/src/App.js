import React, { useRef, useReducer } from "react";

function reducer (state,action){
    switch (action.type){
        case "add":
            return [
                ...state,
                {
                    id : state.length,
                    name : action.name
                }
            ]
        case "remove":
            return state.filter((item,index)=>action.index!==index)
        default:
            return state
    }
}



export default function App(){
    const inputRef = useRef()
    const [items,dispatch] = useReducer(reducer,[])
    function handleSubmit (e) {
        e.preventDefault()
        dispatch(
{            type:"add",
            name:inputRef.current.value}
        )
        inputRef.current.value=""
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} />
        </form>
        <ul>
            {
                items.map((item,index)=>(
                    <li key={item.id}>
                    {item.name}
                    <button onClick={()=>dispatch({type:"remove",index})}>X</button>
                    </li>
                ))
            }

        </ul>
        </>
    )
}

// case "add":
//   return [
//     ...state,
//     {
//       id: state.length,
//       name: action.name,
//     },
//   ];
// case "remove":
//   return state.filter((_, index) => index !== action.index);
// default:
//   return state;
// dispatch({
//   type: "add",
//   name: inputRef.current.value,
// });
// <button onClick={() => dispatch({ type: "remove", index })}>
//     X
// </button>


// case "add":
//   return [
//     ...state,
//     {
//       id: state.length,
//       name: action.name,
//     },
//   ];
// case "remove":
//   return state.filter((_, index) => index !== action.index);
// default:
//   return state;
// dispatch({
//   type: "add",
//   name: inputRef.current.value,
// });
// <button onClick={() => dispatch({ type: "remove", index })}>
//     X
// </button>
