import { useSelector, useDispatch } from "react-redux";
import { setScreenID } from "../state/screenSlice";

interface NavbarProps {
  props: {
    logo: string;
    id: number;
    title: string;
    screenID: number;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ props }) => {
  const dispatch = useDispatch();
  const selectedScreenID = useSelector((state: any) => state.screen.screenID);

  const handleScreenIDChange = (newID: number) => {
    dispatch(setScreenID(newID));
  };

  return (
    <nav className="w-full bg-white shadow-lg mb-7 p-3">
      <div className="space-x-4 flex justify-between items-center">
        {props.map((item) => (
          <div
            className="container mx-auto flex justify-between items-center"
            key={item.id}
          >
            <div className="text-center">
              <button
                onClick={() => {
                  handleScreenIDChange(item.screenID);
                }}
                className={`text-gray-600 hover:text-slate-900 ${
                  item.screenID === selectedScreenID ? "font-bold" : ""
                }`}
              >
                {item.title}
              </button>
            </div>
            {item.logo && (
              <div className="text-center ">
                <img
                  src={item.logo}
                  alt="Logo"
                  className="h-12"
                
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
