import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryData }) {

  console.log(galleryData);

  return (    
    <>
      {galleryData.map((picture => {
        <GalleryItem
          picture={picture}
        />
      }))}
    </>
  );
}

export default GalleryList;