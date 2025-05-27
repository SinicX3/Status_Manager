import User from "../../Components/User"
import io from "socket.io-client"
import { useEffect, useRef, useState } from "react"

interface UserProps {
  userName: string
}

interface StatusProps {
  status: string
}

function Session({userName}: UserProps) {
  const [users, setUsers] = useState<string[]>([])
  const socketRef = useRef<Socket | null>(null)

  // Mise à jour du front gérée par un état
  useEffect(() => {
    const socket: Socket = io("http://localhost:3001")
    socketRef.current = socket

    socket.emit("new_user", { username: userName })
    // socket.emit("upt_statut", { status: "AFK"})
    socket.on("updateUsers", (users: string[]) => {
      setUsers(users)
    })
        return () => socket.disconnect()
  }, [userName])

    return (
      <main>
        {users.map((name, index) => (
          <User key={index} name={name}/>
        ))}
      </main>
    )
  }

export default Session