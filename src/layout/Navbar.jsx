import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [search, setSearch] = useState("");

  useEffect(() => setSearch(keyword || ""), [keyword]);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${search}`);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to={"/"} className="flex items-center">
        <AiFillYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4" type="submit">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
