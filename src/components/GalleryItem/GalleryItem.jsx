import { useState, useEffect } from 'react';
import './GalleryItem.css';

function GalleryItem({ picture, likePicture }) {
  // console.log(picture);

  let [isHidden, setIsHidden] = useState(true);

  const hidePicture = () => {
    setIsHidden(!isHidden);
  }

  return (    
    <>
      <div className="picture" key={picture.id}>
        <div onClick={() => hidePicture()} className="imgOrDescription">
          {isHidden ? (
            <div>
            <img src={picture.path}/>
            </div>
          ) : (
          <div>
            {picture.description}
          </div>
          )}
        </div>
        <div className="likeBtn">
          <button onClick={() => likePicture(picture.id)}>&#128077;</button>
        </div>
        <div className="numLikes">
          likes: {picture.likes}
        </div>
      </div>
    </>
  );
}

export default GalleryItem;