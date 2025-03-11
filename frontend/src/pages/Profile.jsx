import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import UserProfileAvatarEdit from "../components/UserProfileAvatarEdit";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [openProfileAvatarEdit, setopenProfileAvatarEdit] = useState(false);
  console.log(user);
  return (
    <div>
      <div className="w-20 h-20  flex items-center justify-center rounded-full overflow-hidden drop-shadow-lg">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="w-full h-full" />
        ) : (
          <FaRegCircleUser size={65} />
        )}
      </div>
      <button
        onClick={() => setopenProfileAvatarEdit(true)}
        className="text-xs font-semibold border border-[#68AB95] px-4 py-2 rounded-full mt-5 
  text-[#68AB95] transition-all duration-300 ease-in-out 
  hover:bg-[#68AB95] hover:text-white hover:shadow-lg 
  active:scale-95 active:bg-[#D69CAA]"
      >
        Change Profile
      </button>

      {openProfileAvatarEdit && (<UserProfileAvatarEdit close={() => setopenProfileAvatarEdit(false)} />)}
    </div>
  );
};

export default Profile;
