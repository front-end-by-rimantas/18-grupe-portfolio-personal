function generateBlog(blog) {

    const HTML1 = ``;
    const HTML2 = `<div class="single-post">
                    <div class="header">
                        <img src="./img/blogs/image/${blog.image}" alt="post picture">
                        <div class="info">
                            <div class="author">
                                <img src="./img/blogs/avatar/${blog.author.avatar}" alt="author's avatar">
                                <a href="#">Mark Wiens</a>
                            </div>
                            <div class="dlc">
                             <div class="date">13th Dec</div>
                                <div class="likes fa fa-heart-o greeting" aria-hidden="true"> 15</div>
                                <div class="comments fa fa-comment-o" aria-hidden="true"> 04</div>
                            </div>
                        </div>
                    </div>
                    <h2 class="title">break through self doubt and fear</h2>
                    <div class="text">Dream interpretation has many forms; it can be done be done for the sake
                    of fun, hobby or
                        can be taken up as a serious career.</div>
                    </div>`;
    return HTML1 + HTML2;
}

export { generateBlog }