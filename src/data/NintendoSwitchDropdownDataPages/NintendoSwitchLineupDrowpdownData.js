import nintendoSwtichImg1 from '../../assets/images/nintendo-switch-header-img1.avif'
import nintendoSwtichImg2 from '../../assets/images/nintendo-switch-header-img2.svg'
import nintendoSwtichImg3 from '../../assets/images/nintendo-switch-header-img3.svg'
import nintendoSwtichImg4 from '../../assets/images/nintendo-switch-header-img4.avif'
import nintendoSwtichImg5 from '../../assets/images/nintendo-switch-header-img5.avif'
import accessoriesTopSectionImg from '../../assets/images/nintendoSwitchAccessories/topSectionImg.avif'
import shopSystemTopSectionImg from '../../assets/images/nintendoSwitchShopSystem/sectionTopImg.avif'

const nintendoSwitchDropdownData = [
    {
        img: nintendoSwtichImg1,
        title: 'Nintendo Switch lineup',
        link: 'nintendo-switch-lineup',
    },
    {
        img: nintendoSwtichImg2,
        title: 'Compare systems',
        link: 'compare-system',
    },
    {
        img: nintendoSwtichImg3,
        title: 'Online service',
        link: 'online-services',
    },
    {
        img: nintendoSwtichImg4,
        title: 'Accessories',
        link: 'nintendo-switch-hardware',
        mainSlugs: 'hardware',
        topSectionBgColor: 'rgb(204, 204, 213)',
        topSectionImg: accessoriesTopSectionImg,
        topSectionTwo: {
            title:"Hardware",
            content: "Find a Nintendo Switch™ system (or two) that's right for you. Plus, shop for controllers, accessories, and more.",
            buttonData: [
                {
                    title: "Joy-Con & controllers",
                    mainSlug: 'hardware',
                    slugs: 'joy-con-controllers',
                },
                {
                    title: "Cases & more",
                    mainSlug: 'hardware',
                    slugs: 'cases-and-more',
                },
                {
                    title: "amiibo",
                    mainSlug: 'hardware',
                    slugs: 'amiibo',
                },
                {
                    title: "Refurbished systems",
                    mainSlug: 'hardware',
                    slugs: 'nintendo-switch-systems',
                },
            ],
        },
        sectionTwoFilterData: {
            defaultFilterData: [
                {
                    filterTitle: "Nintendo Switch",
                },
                {
                    filterTitle: "Nintendo Switch Lite",
                },
                {
                    filterTitle: "Nintendo Switch – OLED Model",
                },
                {
                    filterTitle: "Refurbished systems",
                },
            ],
            otherFilterData: [
                {
                    filterTitle: "Character or series",
                    innerFilterData: [
                        {
                            innerFilterTitle: "Super Mario",
                        },
                        {
                            innerFilterTitle: "The Legend of Zelda",
                        },
                    ]
                },
                {
                    filterTitle: "Price",
                    innerFilterData: [
                        {
                            innerFilterTitle: "$40+",
                        },
                    ]
                },
                {
                    filterTitle: "Color",
                    innerFilterData: [
                        {
                            innerFilterTitle: "Green",
                        },
                        {
                            innerFilterTitle: "Blue",
                        },
                        {
                            innerFilterTitle: "Gold",
                        },
                        {
                            innerFilterTitle: "Gray",
                        },
                        {
                            innerFilterTitle: "Pink",
                        },
                    ]
                },
            ],
        },
    },
    {
        img: nintendoSwtichImg5,
        title: 'Shop systems',
        link: 'nintendo-switch-shop-system',
        mainSlugs: 'hardware',
        topSectionBgColor: 'rgb(204, 204, 213)',
        topSectionImg: shopSystemTopSectionImg,
        topSectionTwo: {
            title:"Nintendo Switch systems",
            content: "Get the system that suits your life, whether you love to play at home, on the go, or both!",
            buttonData: [
                {
                    title: "Refurbished systems",
                    mainSlug: 'hardware',
                    slugs: 'nintendo-switch-systems',
                },
            ],
        },
        sectionTwoFilterData: {
            defaultFilterData: [
                {
                    filterTitle: "Nintendo Switch",
                },
                {
                    filterTitle: "Nintendo Switch Lite",
                },
                {
                    filterTitle: "Nintendo Switch – OLED Model",
                },
                {
                    filterTitle: "Refurbished systems",
                },
            ],
            otherFilterData: [
                {
                    filterTitle: "Character or series",
                    innerFilterData: [
                        {
                            innerFilterTitle: "Super Mario",
                        },
                        {
                            innerFilterTitle: "The Legend of Zelda",
                        },
                    ]
                },
                {
                    filterTitle: "Price",
                    innerFilterData: [
                        {
                            innerFilterTitle: "$40+",
                        },
                    ]
                },
                {
                    filterTitle: "Color",
                    innerFilterData: [
                        {
                            innerFilterTitle: "Green",
                        },
                        {
                            innerFilterTitle: "Blue",
                        },
                        {
                            innerFilterTitle: "Gold",
                        },
                        {
                            innerFilterTitle: "Gray",
                        },
                        {
                            innerFilterTitle: "Pink",
                        },
                    ]
                },
            ],
        },
    },
]

export default nintendoSwitchDropdownData;