import Nav from "../components/dashboard/Nav";
import Container from "../components/Container";
import Dashboard from "../components/dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setAllLink } from "../features/linkSclice";
import Loading from "../components/Loading";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { user, authToken } = useSelector((state) => state.user);
  const { links } = useSelector((state) => state.links);
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  useEffect(() => {
    const getLinks = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/link/fatchlinks",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        dispatch(setAllLink(res.data.data.links));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getLinks();
  }, []);

  return (
    <div className="bg-[#f9fafb] min-h-screen  mx-auto ">
      <Container>
        <Nav user={user} />
        <div className="mt-5 ">
          {loading ? (
            [...Array(3).keys()].map((_, i) => {
              return (
                <div key={i}>
                  <Loading />
                </div>
              );
            })
          ) : (
            <Dashboard links={links} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
