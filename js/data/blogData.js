const blogData = {
    header: {
        selector: '#blog_header',
        header: 'Latest Posts From Our Blog',
        description: 'You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business'
    },
    content: {
        selector: '#blog_content',
        data: [
            {
                id: 1,
                image: 'blog-image1.jpg',
                author: {
                    avatar: 'avatar1.jpg',
                    name: 'Mark',
                    lastname: 'Wiens',
                    link: 'mark-wiens'
                },
                blogTimestamp: '13th Dec',
                likes: 15,
                comments: 4,
                title: 'BREAK THROUGH SELF DOUBT AND FEAR',
                text: 'Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.'
            },
            {
                id: 2,
                image: 'blog-image2.jpg',
                author: {
                    avatar: 'avatar2.jpg',
                    name: 'Mark',
                    lastname: 'Wiens',
                    link: 'mark-wiens'
                },
                blogTimestamp: '13th Dec',
                likes: 15,
                comments: 4,
                title: 'PORTABLE FASHION FOR YOUNG WOMEN',
                text: 'You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.'
            },
            {
                id: 3,
                image: 'blog-image3.jpg',
                author: {
                    avatar: 'avatar3.jpg',
                    name: 'Mark',
                    lastname: 'Wiens',
                    link: 'mark-wiens'
                },
                blogTimestamp: '13th Dec',
                likes: 15,
                comments: 4,
                title: 'DO DREAMS SERVE AS A PREMONITION',
                text: 'So many of us are demotivated to achieve anything. Such people are not enthusiastic about anything. They don’t want to work involved.'
            }
        ]
    }
}
export { blogData }