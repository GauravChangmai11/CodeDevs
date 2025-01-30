import { useContext } from "react";
import { UserContext } from "./context/userContext";

export default function Profile(){
    const {user} = useContext(UserContext)

  return(
    <p>hello {user?.name || "user"}</p>
  )
}