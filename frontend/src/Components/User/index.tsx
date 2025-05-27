import type { User } from "../../Data/types"

function User({name, statut}: User) {

    return(
    <div className="user">
        <div className="id">{name}</div>
        <div className="statut">{statut}</div>
    </div>)
}
    
export default User