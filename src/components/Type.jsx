import { useContext } from "react";
import { steperContext } from "../context/steperContext";
// import CssType from "./Type.css";

const Type = () => {
  const { userData, setUserData } = useContext(steperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className=" w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-600  text-xs leading-9 uppercase">
          title
        </div>
        <div className=" rounded my-2 p-1 flex border  border-gray-200">
          <input
            onChange={handleChange}
            // type="text"
            value={userData["username"] || ""}
            width={"100%"}
            placeholder="title"
            className=" p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        <div className=" w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-600  text-xs leading-9 uppercase">
            descrition
          </div>
          <div className=" rounded my-2 p-1 flex border  border-gray-200">
            <textarea
              onChange={handleChange}
              // type="text"
              value={userData["username"] || ""}
              width={"100%"}
              placeholder="descrition"
              className=" p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
