import User from "./Components/User"
import io, { Socket }from "socket.io-client"
import { useEffect, useRef, useState } from "react"

interface LaunchProps {
  userName: string
}

function Launch({userName}: LaunchProps) {
  const [users, setUsers] = useState<string[]>([])
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    const socket: Socket = io("http://localhost:3001")
    socketRef.current = socket

    socket.emit("new_user", { username: userName })
    socket.on("updateUsers", (users: string[]) => {
      setUsers(users)
    })
        return () => socket.disconnect()
  }, [userName])

    return (
      <main>
        {users.map((name, index) => (
          <User key={index} name={name} statut="Connecté" />
        ))}
      </main>
    )
  }


export default Launch