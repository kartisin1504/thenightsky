import Mainpage from "../../pages/Mainpage"
import Sidebar from "../Navbar/Sidebar"

const Container=() =>{
  return <>
    <div className="desktop">
      <header className="header">
        <div className="logo" />
      </header>
      <div className="body">
      
        <Sidebar />
        <Mainpage />
        
      </div>
    </div>
  </>
}
export default Container
