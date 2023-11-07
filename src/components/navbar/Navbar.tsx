import './navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Papelton</span>
        </div>
        <div className="icons">
          <img src="/search.svg" alt="" />
          <img src="/app.svg" alt="" />
          <img src="/expand.svg" alt="" />
          <div className="notification">
          <img src="/notifications.svg" alt="" />
            
            <span>1</span>
          </div>
          <div className="user">
          {/* <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          /> */}
          <img src="./User.jpg" alt="" />
          <span>Nikhil</span>
          </div>
          <div className="icon"></div>
        </div>
      
    </div>
  )
}
