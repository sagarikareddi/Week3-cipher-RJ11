import React,{Component} from "react";
import "./test.css"
import PropTypes from "prop-types";
// const Test =()=>{
//     return (
//         <div>
//             <h1>
//                 hello, my name is Lav Kumar
//             </h1>
//         </div>
//     )
// }


// class Test extends Component{
//     state={
//         isloggedin:false
//     };
//     render(){
//         console.log("Hello");
//         return (
//           <div>
//             {!this.state.isloggedin ? (
//               <h1>you are not logged in</h1>
//             ) : (
//               <h1>congrats, you are logged in</h1>
//             )}
//             <button onClick={(e) =>this.setState({isloggedin :!this.state.isloggedin})}>Login
//             </button>
//           </div>
//         );
//     }
// }

const Test=({name="",setName})=>{
  return (
  <>
    <h1>The name is :{name}</h1>
    <input type="text" onChange={(e)=> setName(e.target.value)} />
  </>)
}
Test.propTypes={
  name:PropTypes.string,
  setName:PropTypes.func,
};
export default Test;