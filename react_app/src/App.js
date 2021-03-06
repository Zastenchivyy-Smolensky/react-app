import { useEffect,useState } from "react";


function App(){
  const [name,setName] = useState('')
  const [id,setId] = useState("Zastenchivyy-Smolensky")
  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }
  useEffect(()=>{
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data=>{
        console.log(data)
        setName(data.name)
      })
      .catch(error=>{
        console.log(error)
      })
  },[id])
  return (
    <div>
      <p>{id}のGithubの名前は{name}</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  )
}
export default App;