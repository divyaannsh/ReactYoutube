import React, { useEffect, useState } from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE__SEARCH_API } from "./utils/constant";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log(searchQuery)



  useEffect(()=> {
  const timer =   setTimeout(() => getSearchSuggestions(),200);

  return () =>{
    clearTimeout(timer);
  };

  }, [searchQuery ]);
// Reconciliation
 

const getSearchSuggestions = async () => {
  try {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json(); 
    setSuggestions(json[1]);
  } catch (error) {
    console.error("Error fetching search suggestions:", error);
  }
};

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={toggleMenuHandler} 
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt=""
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowJjFW22_21ogdZ9nauAIrOeNsODULE319wj_6iFeQA&s"
            alt=""
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
        <input
         className=
         " px-5 w-1/2 border border-gray-700 p-2 rounded-l-full"
          type="text" 
          value = {searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
        <button className="border border-gray-500 p-2 rounded-r-full bg-gray-100">🔍</button>
        </div>

        <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray">
<ul>

{suggestions.map((s, index) => (
  <li key={index} className="py-2 shadow-sm hover:bg-gray-100 border border-gray">
    🔍{s}
  </li>
))}

 

</ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt=""
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
