import googleAuth from "../middleware/firebase"


export default function Login(props) {

    return (
        <>
            <div>Login</div>
            {<button onClick={() => {
                googleAuth()
                .then((res) => {
                    if (res) {
                        console.log(res);
                        props.setIsUser(true);
                    }
                })
            }}>login as user</button>}
            <br />
            {<button onClick={() => { props.setIsAdmin(true) }}>login as admin</button>}
        </>
    )
}