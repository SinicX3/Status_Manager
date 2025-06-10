import User from "../../Components/User"
import io from "socket.io-client"
import { useEffect, useRef, useState } from "react"

interface UserProps {
  userName: string
}

function Session({userName}: UserProps) {
  const [users, setUsers] = useState<string[]>([])
  const socketRef = useRef<Socket | null>(null)
  let status = "Connecté"

  // Mise à jour du front gérée par un état
  useEffect(() => {
    const socket: Socket = io("http://localhost:3001")
    socketRef.current = socket

    socket.emit("new_user", { username: userName, status: status })
    
    socket.on("updateUsers", (users: string[]) => {
      setUsers(users)
    })
        return () => socket.disconnect()
  }, [userName, status])

    return (
      <main>
        {users.map((user, index) => (
          <User key={index} socket={socketRef.current} id={user.id} userName={user.userName} status={user.status}/>
        ))}
      </main>
    )
  }

export default Session