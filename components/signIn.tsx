import { signInAction } from "@/actions/signInAction";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignIn = ({provider}:{provider: string}) => {

        const handleSignIn = async () => {
            await signInAction(provider)
        }
        return (
            <form
              action={handleSignIn}
            >
              <button className="text-white p-3 rounded-md hover:bg-green-600"> 
                { provider === "google" && <FaGoogle />}
                { provider === "github" && <FaGithub />}
              </button>
            </form>
     );
}
 
export default SignIn;