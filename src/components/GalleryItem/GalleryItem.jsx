function GalleryItem({ picture }) {

  console.log(picture);

  return (    
    <>
      <div className="picture" key={picture.id}>
        <img src={picture.path}/>
        {picture.description}
        <button onClick={() => likePicture(picture)}>like</button>
      </div>
    </>
  );
}

export default GalleryItem;