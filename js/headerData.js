// header import ---------------------->
const menu = {
    selector: 'nav',
    data: [

        {
            id: 1,
            name: 'Home',
            link: '#'
        },
        {
            id: 2,
            name: 'About',
            link: '#about'
        },
        {
            id: 3,
            name: 'Services',
            link: '#service'
        },
        {
            id: 4,
            name: 'Portfolio',
            link: '#portfolio'
        },
        {
            id: 5,
            name: 'Pricing',
            link: '#plans'
        },
        {
            id: 6,
            name: 'Blog',
            link: '#blog',
            children: [
                {
                    id: 11,
                    name: 'Blog Home',
                    link: '#'
                },
                {
                    id: 12,
                    name: 'Blog Single',
                    link: '#'
                },
            ]
        },
        {
            id: 7,
            name: 'Pages',
            link: '#',
            children: [
                {
                    id: 13,
                    name: 'Elements',
                    link: '#'
                },
                {
                    id: 14,
                    name: 'Level 2',
                    link: '#',
                    children: [
                        {
                            id: 20,
                            name: 'Item One',
                            link: '#'
                        },
                        {
                            id: 20,
                            name: 'Item Two',
                            link: '#'
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            name: 'Contact',
            link: '#'
        },
    ]
}