import React from "react";

export default function UsersActivity() {
  return (
    <div className="border-t border-gray-700 mt-8 pt-4">
      <h4 className="text-white text-lg font-bold mb-4">Users Activity</h4>
      <div className="flex flex-col gap-y-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
        <div>
          <h5 className="text-white font-bold">Current User</h5>
          <p className="text-gray-400">Song Title • Artist Name</p>
          <p className="text-gray-400">Listening Now</p>
        </div>
        <div>
          <h5 className="text-white font-bold">uldana</h5>
          <p className="text-gray-400">O.You Dombra Vibes • A.Z</p>
          <p className="text-gray-400">O.You Dombra Vibes</p>
          <p className="text-gray-400">8h ago</p>
        </div>
        <div>
          <h5 className="text-white font-bold">kamazhayo</h5>
          <p className="text-gray-400">esinde saqta • Kunzharyq</p>
          <p className="text-gray-400">папа екеуіміздің плейлистіміз</p>
          <p className="text-gray-400">8h ago</p>
        </div>
        <div>
          <h5 className="text-white font-bold">IZ3KA</h5>
          <p className="text-gray-400">そんないつも • Vaun</p>
          <p className="text-gray-400">replica</p>
          <p className="text-gray-400">5h ago</p>
        </div>
      </div>
    </div>
  );
}
