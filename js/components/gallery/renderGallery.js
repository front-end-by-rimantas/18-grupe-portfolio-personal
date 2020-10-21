import { formatPhotoPost } from './formatPhotoPost.js'

function renderGallery(params) {

    //params validation
    // console.log(params);

    //params logic
    let photosHTML = '';
    const galleryDOM = document.querySelector(params.selector);
    const galleryData = params.data;
    const galleryCount = galleryData.length

    for (let i = 0; i < galleryCount; i++) {
        const gallery = galleryData[i];
        photosHTML += formatPhotoPost(gallery);
    }
    //post logic validation

    galleryDOM.innerHTML = photosHTML;

}

export { renderGallery }