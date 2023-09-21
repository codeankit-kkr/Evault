
import React from 'react';
import "./folder.css";
import userimage from "../images/folder.jpg";

const Folder = () => {
  return (
    <div className="mainbox">
      {[1, 2, 3].map((x) => {
        return (
          <div className="childp shadow" key={x}>
            <div className='pro'>
              <div className='pro_name'>Product Name</div>
              <div className='pro_description'>Product Description</div>
            </div>
            <div className='icon'><img src={userimage} alt="Your Image" className='fold' /> </div>
          </div>
        );
      })}

    </div>
  );
};

export default Folder;
