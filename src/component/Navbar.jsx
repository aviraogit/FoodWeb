import React from 'react'

const Navbar = () => {
  return (
    <>
    
<nav class="Navbar"  >
  <span>
    <h1 class="fw-bold">
      Foody
      <span className='text-danger'>
        Web
        </span>
    </h1>
  </span>

  <span class="ul1">
    <ul>
      <a href="#" class="Nav1" id='Nav1'>HOME</a>
      <a href="#Populargroup" class="Nav1" id='Nav1'>POPULAR</a>
      <a href="#Tranding" class="Nav1" id='Nav1'>TRANDING</a>
      <a href="#" class="Nav1" id='Nav1'>REVIEW</a>
     
    </ul>
  </span>

  <span class="cart">
   
    <button class="cartBtn">
      CART 
    </button>
  </span>



</nav>



    
    </>
  )
}

export default Navbar
