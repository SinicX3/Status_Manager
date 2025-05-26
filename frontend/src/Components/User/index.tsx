function User({user, statut}) {

    return(
    <div className="user">
        <div className="id">{user}</div>
        <div className="statut">{statut}</div>
    </div>)
}
    
export default User