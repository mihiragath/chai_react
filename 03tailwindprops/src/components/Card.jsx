import React from 'react';

function Card({ username, btnText = "Visit me", setUserName }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md border-dashed">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="User"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent border-solid border-2 border-gray-700 shadow-2xl backdrop-blur-sm bg-white/30 "></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Be happy and fun..
        </p>
        <button
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold rounded bg-slate-400 border-gray-800 border-dashed"
          onClick={setUserName}
        >
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
