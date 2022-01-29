import React from 'react';
import './Aside.css';

export const Aside = () => {
    
  return(
      <>
      <aside>
      
      <div className='available'>
      <button type="button" class="btn btn-light"><span class="bi bi-bag-check-fill" >Available for Job</span></button>
      </div>
      <div className="home">
      <button type="button" class="btn btn-light"><span class=" bi-house-door-fill" >Home</span></button>  
      </div>
      <div className="container1">
     
     <div class="item"><input type="checkbox" id="profile"  value="Bike"/>
     <label htmlfor="vehicle1"> Profile</label></div> 
      <div class="item"><input type="checkbox" id="Apply"  value="Bike"/>
     <label htmlfor="vehicle1"> Apply for Job</label></div>
     <div class="item"><input type="checkbox" id="profile"  value="Bike"/>
     <label htmlfor="vehicle1"> Mail Box</label> </div> 
      </div>
      </aside>
      </>
  )
};
