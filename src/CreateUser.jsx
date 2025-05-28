import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
    groups: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const groupsArray = formData.groups.split(",").map(Number);

    try {
      const response = await axios.post("http://localhost:8000/users/", {
        name: formData.name,
        login: formData.login,
        password: formData.password,
        groups: groupsArray,
      });

      alert(`✅ Utilisateur créé avec l'ID : ${response.data.user_id}`);
    } catch (error) {
      alert("❌ Erreur lors de la création !");
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-bold text-green-600 mb-6 text-center">
        Créer un Utilisateur
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom :
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Login :
          </label>
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe :
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Groupes (IDs séparés par virgule) :
          </label>
          <input
            type="text"
            name="groups"
            value={formData.groups}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Créer
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
