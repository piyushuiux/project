
export const Navbar = ({setCategory}) => {
  return (
    <ul className="nav bg-dark text-light px-2 py-2">
  <li className="nav-item">
    <a className="navbar-brand" aria-current="page" href="#" ><span className="badge bg-light text-dark fs-4" >Good News</span></a>
  </li>
  <li className="nav-item">
    <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
  </li>
  <li className="nav-item">
    <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
  </li>
  <li className="nav-item">
    <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
  </li>
  <li className="nav-item">
    <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
  </li>
  <li className="nav-item">
    <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
  </li>
</ul>
  )
}

export default Navbar