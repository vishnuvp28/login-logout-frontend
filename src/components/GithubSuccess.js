import  { useEffect } from 'react'

function GithubSuccess() {
    useEffect(() => {
        setTimeout(() => {
           window.close();
        }, 0);
     }, []);
     return null;
  }


export default GithubSuccess