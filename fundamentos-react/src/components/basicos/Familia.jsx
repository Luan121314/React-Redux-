import React ,{cloneElement}from 'react';


 const props = (props)=>{
     return(
         <div>
             {/* {cloneElement(props.children, {...props})} */}
             {React.Children.map(props.children, child=>{
                 return cloneElement(child, props)
             })}
         </div>
     )
 }

 export default props;