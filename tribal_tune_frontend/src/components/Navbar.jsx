import { UserProvider, useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const user = useUser();
  const navigate = useNavigate();
  return (
    <div className="relative w-full bg-white  py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 hover:text-gray-800 text-amber-900">
          <button
            className="font-bold text-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            Tribal Tunes
          </button>
        </div>
        <div className="hidden lg:block ">
          <ul className="inline-flex space-x-12 ">
            <li>
              <button
                className="text-sm font-semibold text-gray-800 hover:text-amber-800"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="text-sm font-semibold text-gray-800 hover:text-amber-800"
                onClick={() => {
                  navigate("/instruments");
                }}
              >
                Instruments
              </button>
            </li>
            <li>
              <button
                className="text-sm font-semibold text-gray-800 hover:text-amber-800"
                onClick={() => {
                  navigate("/aboutUs");
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="text-sm font-semibold text-gray-800 hover:text-amber-800"
                onClick={() => {
                  navigate("#");
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="rounded-md bg-amber-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            {" "}
            {user.current ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    console.log(user);
                    user.logout();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
        </div>
      </div>
    </div>

    // <nav>
    //   <a href="/">Home</a>
    //   <a href="/instruments">Instruments</a>
    //   <div>
    //     {user.current ? (
    //       <>
    //         <span>{user.current.email}</span>
    //         <button type="button" onClick={() => {
    //           console.log(user)
    //           user.logout()
    //         }}>
    //           Logout
    //         </button>
    //       </>
    //     ) : (
    //       <a href="/login">Login</a>
    //     )}
    //   </div>
    // </nav>
  );
};
