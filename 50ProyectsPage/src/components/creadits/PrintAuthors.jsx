import { useEffect, useState } from "react"
import AuthorsCard from "./AuthorsCard";

const PrintAuthors = () => {
    const URL = "https://api.github.com/users/";
    const [authorsData, setAuthorsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
      const getData = async(url, users) => {
        try {
            setIsLoading(true)
            const responses = await Promise.all(users.map((user) => fetch(`${url}${user}`)));
            const data = await Promise.all(responses.map(response => response.json()))
            setAuthorsData(data)
        } catch (error) {
            console.log("error")
        } finally {
          setIsLoading(false)
        }
      }
      getData(URL, ["bradtraversy", "florinpop17"])
    }, [])
    
  if(isLoading) {
    return (
		<h3 className="text-center font-semibold text-[3rem] text-tertiary-color mt-[3rem] ">
			Data is loading...
		</h3>
	);
  }  
    
  return (
    <div className="sm:my-[2rem] flex flex-col gap-y-[10rem] mt-[8rem] md:mt-[6rem] sm:mt-0 ">
        {authorsData.map((item) => {
            const {avatar_url, name, bio, html_url, node_id} = item
            return(
                <AuthorsCard 
                  key={node_id}
                  img={avatar_url} 
                  name={name} 
                  bio={bio}
                  gitUrl={html_url}
                />
            )
        })}
    </div>
  )
}

export default PrintAuthors
