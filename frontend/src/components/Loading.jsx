import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#D69CAA] border-t-[#68AB95] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
