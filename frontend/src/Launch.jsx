import User from "./Components/User"
import { useEffect, useState } from "react"

function Launch({userName}) {
  const socket = io("http://localhost:3001")

  const [users, setUsers] = useState([])

  useEffect(() => {
    const socket = io("http://localhost:3001")
    socket.emit("new_user", { username: userName })

    socket.on("updateUsers", (users) => {
      setUsers(users)
    })
        return () => socket.disconnect()
  }, [userName])

    return (
      <main>
        {users.map((user, index) => (
          <User key={index} user={user} statut="Connecté" />
        ))}
      </main>
    )
  }


export default Launch