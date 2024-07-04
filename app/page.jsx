import { redirect } from "next/navigation"

const Homepage = () => {
  redirect("/login");

  return <div>Homepage</div>;
}

export default Homepage
