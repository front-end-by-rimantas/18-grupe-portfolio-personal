function formatPhotoPost(gallery) {
    console.log(gallery);

    return `<div class="col-4 col-sm-12">
                <div class="list">
                    <div class="img">
                        <img src="./img/gallery/${gallery.photo}"
                        alt="Gallery picture">
                    </div>
                    <h3>${gallery.name}</h3>
                    <p>${gallery.subname}</p>
                </div>
            </div>`;

}

export { formatPhotoPost }