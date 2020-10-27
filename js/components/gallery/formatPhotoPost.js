function formatPhotoPost(gallery) {


    return `<div class="col-4 col-sm-12">
                <div class="list">
                    <div class="img">
                        <img class="image" src="./img/gallery/${gallery.photo}"
                        alt="Gallery picture">
                        <div class="overlay">
                            <img class="ziuronai" src="./img/gallery/ziuronai.png"
                            alt="Hover picture">
                        </div>
                    </div>
                    <div class="gallery-names">
                    <h3>${gallery.name}</h3>
                    <p>${gallery.subname}</p>
                    </div>
                </div>
            </div>`;
}

export { formatPhotoPost }