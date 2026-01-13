import React, { createContext } from 'react'
export const userDatacontext=createContext()
function UserContext({children}) {
    const serverUrl="http://localhost:8000"
    const [userData,setUserData]=useState(null)

    const handleCurrentUser=async()=> {
        try{
            const result=await axios.get(`${serverUrl}/api/user/current`, {withCredentials:true})
            setUserData(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        handleCurrentUser()
    },[])
const value={
    serverUrl,userData,setUserData
}

  return (
    <div>
        <userDatacontext.Provider value={value}>
{children}
        </userDatacontext.Provider>
      
    </div>
  )
}

export default UserContext
