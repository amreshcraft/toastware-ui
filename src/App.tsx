import toaster from 'toastware'
import './App.css'

export default function App() {

 async function fetchUser(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  const result = response.json()
  console.log(result)
  return result
  //  as Promise<{ id: number; name: string; email: string }>;
}
  return (
    <div>
      <h1 className='title'>Toastware</h1>

      <div className="demo">
        <button   className='btn info' onClick={()=>toaster.info("Info Notification")}>Info Notification</button>
        <button   className='btn error' onClick={()=>toaster.error("Error Notification")}>Error Notification</button>
        <button   className='btn warning' onClick={()=>toaster.warning("Warning Notification")}>Warning Notification</button>
        <button   className='btn success' onClick={()=>toaster.success("Success Notification")}>Success Notification</button>
              </div>

              <h1 className='heading'>Positions</h1>
      <div className="demo-position">
        <button   className='btn info' onClick={()=>toaster.info("Info Notification","top-left")}>Info-Top-Left</button>
        <button   className='btn error' onClick={()=>toaster.error("Error Notification","bottom-left")}>Error Bottom-Left</button>
        <button   className='btn warning' onClick={()=>toaster.warning("Warning Notification","bottom-right")}>Warning Bottom-Right</button>
        <button   className='btn success' onClick={()=>toaster.success("Success Notification","top-right")}>Success Top-Right</button>
       
      </div>
  <h1 className='heading'>Promise - Asynchronous Data Fetching</h1>
  <div className="promise">

      <button className='btn' onClick={()=>{toaster.promise(fetchUser(2),{
        loading :"fetching...",
        success:"fetch data successfully",
        error :"Error while fetching..."
      })}}>Promise-based-Notification  </button>



      </div>
    </div>
  )
}