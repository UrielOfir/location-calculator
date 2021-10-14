
export default function Login(props) {
    return (
        <>
            <div>Login</div>
            {<button onClick={() => { props.setIsUser(true) }}>login as user</button>}
            <br/>
            {<button onClick={() => {props.setIsAdmin(true)}}>login as admin</button>}
        </>
    )
}