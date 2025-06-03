import type { User } from "../../Data/types"
import statusList from "../../Data/statusList.json" 
import io from "socket.io-client"

function User({socket, userName, status, id}: User) {

    return(
    <div className="user">
        <div className="id">{userName}</div>
        <select defaultValue={status} onChange={(e) => {
                const value = e.target.value
                socket?.emit("upt_statut", {id: id, userName: userName, status: value})
            }}>
            {statusList.map((e, index) => (<option key={index} value={e}>{e}</option>))}
        </select>
    </div>)
}

export default User