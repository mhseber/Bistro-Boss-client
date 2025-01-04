import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(Result => {
                console.log(Result)
            })
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;