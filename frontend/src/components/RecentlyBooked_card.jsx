import React from 'react';
import '../styles/RecentlyBooked_card.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import Semantic_textarea from "../components/Semantic_textarea";


import '../styles/SearchResult.css';

function RecentlyBooked_card({
    img,
    location,
    title,
    description,
    property_type
}) {
    return (
        <div className='searchResult1'>
            <img src={img} alt="" />

            <div className='searchResult__info1'>
                <div className="searchResult__infoTop1">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>{property_type}</p>
                    <p>{description}</p>
                </div>
                <div className="write_review">
              <Semantic_textarea />
            </div>
            <button className="submit-review">Submit review</button>

                
            </div>
        </div>
    )
}

export default RecentlyBooked_card