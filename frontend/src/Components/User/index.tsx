import type { UserType } from "../../Data/types"
import statusList from "../../Data/statusList.json" 
import io from "socket.io-client"
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

interface UserProps extends UserType {
  socket: Socket
}

function User({socket, userName, status: initialStatus, id}: UserProps) {

  const [currentStatus, setCurrentStatus] = useState(initialStatus); 
  
  useEffect(() => {
    setCurrentStatus(initialStatus);
  }, [initialStatus]);

    return(
    <div className="user">
        <div className="id">{userName}</div>
        <select value={currentStatus} onChange={(e) => {
                const newStatus = e.target.value
                socket?.emit("upt_statut", {id: id, userName: userName, status: newStatus})
            }}>
            {statusList.map((e, index) => (<option key={index} value={e}>{e}</option>))}
        </select>
    </div>)
}

export default User