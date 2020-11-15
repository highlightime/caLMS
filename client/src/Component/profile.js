function Profile({user}){
    const{ID, password, name} = user || {}
    return(
        <>
            <h1>Profile</h1>
            <dt>ID</dt>
            <dd>{ID}</dd>
            <dt>password</dt>
            <dd>{password}</dd>
            <dt>name</dt>
            <dd>{name}</dd>
        </>
    )
}

export default Profile;