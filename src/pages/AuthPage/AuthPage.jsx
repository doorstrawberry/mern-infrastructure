import SignUpForm from '../../components/SignUpForm'
import LoginForm from '../../components/LoginForm'

function AuthPage(props) {
    return (
    <main>
        <h1>AuthPage</h1>
        <h2>Sign Up</h2>
        <SignUpForm setUser={props.setUser}/>
        <h2>Log In</h2>
        <LoginForm setUser={props.setUser}/>
    </main>)
}

export default AuthPage