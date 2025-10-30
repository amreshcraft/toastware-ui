import toaster from 'toastware'
import './App.css'

export default function App() {

 
  return (
    <div>
      <h1>Toastware</h1>

      <div className="demo">
        <button   className='info' onClick={()=>toaster.info("Info Toast")}>Info Toast</button>
      </div>
    </div>
  )
}