import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignIn = ({provider}:{provider: string}) => {

        const handleSignIn = async () => {
            await signIn(provider)
        }
        return (
              <button onClick={handleSignIn} className="text-white p-3 rounded-md hover:bg-green-600"> 
                { provider === "google" && <FaGoogle />}
                { provider === "github" && <FaGithub />}
              </button>
     );
}
 
export default SignIn;