import React from "react";
import CreateUser from "./CreateUser";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">
        🧑‍💻 Gestion des Utilisateurs Odoo
      </h1>
      <CreateUser />
    </div>
  );
}

export default App;
