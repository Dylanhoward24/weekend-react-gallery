import './GalleryItem.css';

function GalleryItem({ picture, likePicture }) {
  // console.log(picture);
  return (    
    <>
      <div className="picture" key={picture.id}>
        <div className="img">
          <img src={picture.path}/>
        </div>
        <div className="picDescription">
          {picture.description}
        </div>
        <div className="likeBtn">
          <button onClick={() => likePicture(picture.id)}>like</button>
        </div>
        <div className="numLikes">
          likes: {picture.likes}
        </div>
      </div>
    </>
  );
}

export default GalleryItem;