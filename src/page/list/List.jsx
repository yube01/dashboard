import Sidebar from "../../components/sidebar/SideBar"
import Navbar from "../../components/navbar/Navbar"
import "./list.scss"
import Datatable from "../../components/datatable/Datatable"
const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        datatable
      </div>
    </div>
  )
}

export default List
