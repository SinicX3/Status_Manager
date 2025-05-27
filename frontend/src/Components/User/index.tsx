import type { User } from "../../Data/types"
import statusList from "../../Data/statusList.json" 

function User({userName, status}: User) {

    return(
    <div className="user">
        <div className="id">{userName}</div>
        <div className="statut">{status}</div>
        <select>
            {statusList.map((e, index) => (<option key={index} value={e}>{e}</option>))}
        </select>
    </div>)
}
    
export default User