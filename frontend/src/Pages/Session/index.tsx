import User from "../../Components/User"
import io from "socket.io-client"
import { Socket } from "socket.io-client"
import { useEffect, useRef, useState } from "react"
import { UserType } from "../../Data/types"

interface UserProps {
  userName: string
}

function Session({userName}: UserProps) {
  const [users, setUsers] = useState<UserType[]>([])
  const [socketName, setSocketName] = useState("")
  const socketRef = useRef<Socket | null>(null)
  let status = "Connecté"
  let group = 1

  // Mise à jour du front gérée par un état
  useEffect(() => {
    const socket: Socket = io("http://localhost:3001")
    socketRef.current = socket

    socket.emit("new_user", { username: userName, status: status, group })
    
    socket.on("updateUsers", (data) => {
      setUsers(data.users)
      setSocketName(data.socketName)
    })
        return () => socket.disconnect()
  }, [userName, status])

    return (
      <main>
        <h2>Session #{socketName}</h2>
        {users.map((user, index) => (
          <User key={index} socket={socketRef.current} id={user.id} userName={user.userName} status={user.status} group={user.group}/>
        ))}
      </main>
    )
  }

export default Session