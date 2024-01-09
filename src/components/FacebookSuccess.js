import  { useEffect } from 'react'

function FacebookSuccess() {
    useEffect(() => {
        setTimeout(() => {
           window.close();
        }, 0);
     }, []);
     return null;
  }


export default FacebookSuccess