import { useEffect, useState } from "react"
import getData from "../../services/APIData"

const Main = () => {
  const [data, setData] = useState()
  
  useEffect(() => {
    const fetchData = async() =>{
      try {
        const response = await fetch(
          "https://api.github.com/users/brivastorres/repos"
        );
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)       
      }
    }
    
    fetchData()
  },[]);
  
  return (
    <div>
      {data && console.log(data)}
    </div>
  )
}

export default Main
