import{ethers}from "ethers"
import "./Buy.css";
const Buy=({state})=>{
    
    const buyChai = async(event)=>{
        event.preventDefault();
        const {contract}=state;
      const name =document.querySelector("#name").value;
      const message = document.querySelector("#message").value;
      const amount = {value:ethers.parseEther("0.001")}

      const transaction = await contract.buyChai(name,message,amount)
       await transaction.wait();
       showAlert();
  alert("Transaction is successful");
 window.location.reload();

      //console.log ("Transaction is successful")
    
    }

      return (
        
        <div className="center">
        <h1>Thanks for buying me a Coffee!!</h1>
         <form onSubmit={buyChai}>
           <div className="inputbox">
             <input type="text" required="required" id="name" />
             <span>Name</span>
           </div>
           <div className="inputbox">
             <input type="text" required="required" id="message" />
             <span>Message</span>
           </div>
           <div className="inputbox">
             <input type="submit" value="Pay(0.001 Ether)"  disabled={!state.contract}/>
           </div>
         </form>
           
         </div>
        
    //<> <form onSubmit={buyChai}>
       // <input id="name"></input>
       // <input id ="message"></input>
        
       // <button>PAY(0.001 ether)</button>

        


     // </form>
     // </>


   // return<>hi buy</>
      );
}
export default Buy;