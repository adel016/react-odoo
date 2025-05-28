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
    <div style={{ padding: "2rem" }}>
      <h2 className="text-green-400">Créer un Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label>Login :</label>
        <input
          type="text"
          name="login"
          value={formData.login}
          onChange={handleChange}
          required
        />
        <br />

        <label>Mot de passe :</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />

        <label>Groupes (IDs séparés par virgule) :</label>
        <input
          type="text"
          name="groups"
          value={formData.groups}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default CreateUser;
