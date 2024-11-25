import { signOutAction } from "@/actions/signOutAction";
import { FaSignOutAlt } from "react-icons/fa";

const SignOutButton = () => {
        return (
            <form
              action={signOutAction}
            >
              <button className="text-white p-3 rounded-md hover:bg-green-600"> <FaSignOutAlt /></button>
            </form>
     );
}
 
export default SignOutButton;