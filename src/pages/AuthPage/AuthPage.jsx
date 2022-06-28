import SignUpForm from '../../components/SignUpForm'

function AuthPage(props) {
    return (
    <main>
        <h1>AuthPage</h1>
        <SignUpForm setUser={props.setUser}/>
    </main>)
}

export default AuthPage