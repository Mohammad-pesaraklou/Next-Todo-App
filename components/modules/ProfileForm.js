import React, { useState } from "react";

const ProfileForm = ({ changeHandler, updateHandler, form }) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "50px",
      }}
      onSubmit={updateHandler}
    >
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={changeHandler}
        placeholder="Please Enter Your Name"
      />
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={changeHandler}
        placeholder="Please Enter Your lastName"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileForm;
