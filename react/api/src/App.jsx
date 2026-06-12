import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Api2 } from './component/Api'
import Api from './component/Api'
function App() {
  const [count, setCount] = useState(0)
/*Api().then((users)=>{
  console.log(users);
  users .forEach((user) => { 
    console.log(user.name);
    console.log(user.email);
    
  });
 

})
.catch((error)=>{
  console.log(error);
});*/
Api2().then((posts)=>{
console.log(posts);
posts.forEach((post) => {
  console.log(post.userId);
  console.log(post.title);
  console.log(post.body);
});
})
.catch((error)=>{
  console.log(error);
})
  return (
    <>
       
    </>
  )
}

export default App
