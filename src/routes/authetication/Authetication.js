import SignUpForm from "../../components/signup/SignUpForm";
import SignInForm from "../../components/signin/SignInForm";
import './authetication.styles.scss'

const Authetication = () => {
    return (
        <div className="authetication-container">
            <SignInForm />
            <SignUpForm />

        </div>
    )
}

export default Authetication;