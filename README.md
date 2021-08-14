# Weekend React Gallery

BASE GOALS
[X] Create a gallery page of meaningful pictures
    [X] Include some more pictures
        [X] Upload some images into the public/images folder
            [X] Modify the image size, if required
        [X] Update the server/modules/data.js to include:
            [X] id
            [X] title
            [X] description
            [X] path
    [X] Get server and client up and running
        [X] install nodemon: 'npm install nodemon --global'
        [X] install node_modules: 'npm install'
        [X] start the server: 'npm run server'
        [X] start the client:
            [X] open a new terminal tab
            [X] 'npm run client'
[ ] Build the gallery using multiple components
    [ ] App
        [X] Import Component <GalleryList />
        [ ] Axios functions to:
            [X] 'GET' the items from gallery.data.js
                [X] Display on page load
            [ ] 'PUT' (update) items in gallery.data.js
        [ ] <GalleryList {likePicture, galleryData}/> to pass
            the prop to the Component
    [ ] GalleryList
        [ ] Import Component <GalleryItem />
        [ ] Create HTML for displaying the pictures
        [ ] <GalleryItem {likePicture, galleryData}/> to pass
            the prop once more to the Component
    [ ] GalleryItem
        [ ] Create button for updating likes
        [ ] Use function likePicture() passed down as a prop
            to update the individual picture's COUNT
            [ ] Will need a useState for count, setCount
        [ ] Swap the image with the description on click using
            conditional rendering
        [ ] Display the number of likes for each item
        [ ] Re-render the galleryData on the DOM each time a
            picture is "liked"

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
