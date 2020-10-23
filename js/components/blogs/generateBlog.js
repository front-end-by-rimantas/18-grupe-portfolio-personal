function generateBlog(blog) {

    const HTML1 = ``;
    const HTML2 = `<div class="single-post">
                    <div class="header">
                        <div class="img-hover-zoom img-hover-zoom--slowmo img">
                            <img src="./img/blogs/image/${blog.image}" alt="post picture">
                        </div>      
                        <div class="info">
                            <div class="author">        
                                    <img src="./img/blogs/avatar/${blog.author.avatar}" alt="author's avatar">                                  
                                <a href="#">${blog.author.name} ${blog.author.lastname}</a>
                            </div>
                            <div class="dlc">
                             <div class="date">${blog.blogTimestamp}</div>
                                <div class="likes fa fa-heart-o greeting" aria-hidden="true"> ${blog.likes}</div>
                                <div class="comments fa fa-comment-o" aria-hidden="true"> ${blog.comments}</div>
                            </div>
                        </div>
                    </div>
                    <h2 class="title">${blog.title}</h2>
                    <div class="text">${blog.text}</div>
                    </div>`;
    return HTML1 + HTML2;
}

export { generateBlog }