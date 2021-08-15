// import Component into here to be used
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryData, likePicture }) {

  console.log(galleryData);

  return (    
    <>
      {galleryData.map((picture) => {
        return (
        <GalleryItem
          key={picture.id}
          picture={picture}
          likePicture={likePicture}
        />
        );
      })}
    </>
  );
}

export default GalleryList;