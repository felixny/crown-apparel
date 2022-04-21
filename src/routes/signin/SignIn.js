import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { useEffect } from 'react';
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {

    useEffect(() => {
        async function fetchDate() {
            const response = await getRedirectResult(auth);
            console.log(response);
            if (response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        fetchDate();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user)
    }


    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with redirect
            </button>
        </div>
    )
}

export default SignIn;