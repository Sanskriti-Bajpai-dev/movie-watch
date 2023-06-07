import { useState } from "react";

const Searchbox = () => {
const {SearchTerm, setSearchTerm} = useState("");

const onSeachHandler = (e) => {
    e.preventDefault();
    console.log("seatching movie" + SearchTerm);
}

    return( <div className="searchbox">
        <form id=" search " className="searchbox__form" >
            <input type="text" placeholder="Search for the movie" value={SearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-bloc" onClick={onSeachHandler}>
                SEARCH
                </button>
    
        </form>
    </div>
    );
};

export default Searchbox;