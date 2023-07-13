import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
            <h1 style={{color : "white"}}>ArtVista</h1>
                <div id="right-nav">
                    <button>Explore More</button>
                    <button><i className="ri-menu-fill"></i></button>
                </div>
            </nav>
    </div>
  )
}

export default Navbar
