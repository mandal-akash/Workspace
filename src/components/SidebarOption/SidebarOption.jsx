import React from "react";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../Slice/Workslice";

const SidebarOption = ({ Icon, title, addChannelOption , id}) => {
  const dispatch = useDispatch();

  const addChannel = () => {
    const workSpaceName = prompt("Enter your worksapce name");
    if (workSpaceName) {
      db.collection("workRoom").add({
        name: workSpaceName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
        dispatch(enterRoom({
          workRoom : id,
        }))
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon ? (
        <div className="flex items-center text-md font-semibold text-neutral-500 space-x-7 my-4  p-2  hover:cursor-pointer rounded-lg hover:bg-gray-200">
          <span>{Icon}</span>
          <h3>{title}</h3>
        </div>
      ) : (
        <div className="flex items-center text-md font-semibold text-neutral-500 space-x-10 my-4  p-2  hover:cursor-pointer rounded-lg hover:bg-gray-200">
          <span>#</span>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default SidebarOption;
