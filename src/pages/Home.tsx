import { useAppSelector } from "../hooks/useAppStore";

function Home() {
  const { user } = useAppSelector((store) => store.user);
  console.log(user);
  return <div>Home</div>;
}

export default Home;
