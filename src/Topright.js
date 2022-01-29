import React from 'react';
import './Topright.css';
export const Topright = (props) => {
  return (<>
 <article>
  <h2> Welcome {props.name} !</h2>
  <div className="subcontainer">How to get paid with top U.S. companies</div>
  <div class="row">
  <div class="column">
    <div class="card">
      <h3> 1</h3>
      <p>Take test</p>
     
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3> 2</h3>
      <p>Pass live coding challenge</p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3> 3</h3>
      <p>Finalize your resume</p>
      
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3> 4</h3>
      <p>Recieve job offers</p>
      
    </div>
  </div>
  </div>

   </article>
  </>
    




  );
};
