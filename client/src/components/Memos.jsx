 import {useState,useEffect, memo} from "react"
 import "./Memos.css"
const Memos=({state})=>{

    const [memos,setMemos]=useState([]);
    const {contract}=state;
    useEffect(()=>{
        const memosMessage = async()=>{
        const memos = await contract.getMemos();
        setMemos(memos)
       // console.log(memos)
        }
        contract && memosMessage()

    },[contract])

    return (
        <div className="container-fluid">
          <h2 style={{  marginTop: "20px",marginLeft :"500px",marginRight: "80px" }}>Messages</h2>           
                <table>
                <tbody >
          {memos.map((memo) => {
            return (
                    <tr >
                      <td 
                        style={{
                          backgroundColor: "black",
                          border: "5px solid white",
                          borderCollapse: "collapse",
                          padding: "2px",
                          width: "300px",
                          color:"white",
                         
                        }}
                      >  <p>Name: </p>
                        {memo.name}
                      </td>
                      <td 
                        style={{
                          backgroundColor: "#7f67e691",
                          border: "5px solid white",
                          borderCollapse: "collapse",
                          padding: "2px",
                          height:"6 px",
                          width: "470px",
                          color:"white"
                        }}
                      >
                        {/*{new Date(memo.timestamp * 1000).toLocaleString()}
                      </td>
                      <td  
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "300px",
                          color:"white"
                        }}
                    >*/}
                     <p> Comment:</p>
                        {memo.message}
                      </td>
                      <td  className="container-fluid"
                        style={{
                          backgroundColor: "black",
                          border: "5px solid white",
                          borderCollapse: "collapse",
                          padding: "2px",
                          width: "360px",
                          color:"white"
                        }}
                      >
                        <p> From Account: </p>
                        {memo.from}
                      </td>
                    </tr>
             
            );
          })}
               </tbody>
                </table>
        </div>
      );


































//const date = new Date(memo.timestamp);
//const date1 = date.toLocaleString();
  //  return<>
  //  {
      //   memos.map((memo)=>{
//
            //const date = new Date(memo.timestamp);
       //        return <div>
       //     <p>{memo.name}</p>
       //     <p>{memo.message}</p>
       //   {/*  <p>{date1}</p>*/}
//<p>{memo.from}</p>
      //      </div>
   //      })}

  //  </>
    
    
}
export default Memos;