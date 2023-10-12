import { type } from "os";

type Data  = {
    title: string,
    description: string,
    image: string,
    price: number,
    type?: "new" | "discount" | undefined,
    discount?: number
}


const data: Array<Data> =[
    {
        title: "Syltherine hbhfvbh nvf",
        description: "Stylish cafe chair",
        image: "/images/data/1.jpg",
        price: 12,
        type: "new",
        discount: 10
    },
    {
        title: "Lolito",
        description: "Luxury big sofa",
        image: "/images/data/2.jpg",
        price: 12,
        type: 'discount',
        discount: 10

    },
    {
        title: "Respira",
        description: "Outdoor bar table and stool",
        image: "/images/data/3.jpg",
        price: 12,
    },
    {
        title: "Grifo",
        description: "lorum ipsum dolor sit amet lorum ipsum dolor sit amet lorum ipsum dolor sit amet",
        image: "/images/data/4.jpg",
        price: 12,
    },
    {
        title: "Muggo",
        description: "lorum ipsum dolor sit amet",
        image: "/images/data/5.jpg",
        price: 12,
        type: "new"
    },
    {
        title: "Pingky",
        description: "Cute bed set",
        image: "/images/data/6.jpg",
        price: 12,
    },
    {
        title: "Potty",
        description: "Minimalist flower pot",
        image: "/images/data/7.jpg",
        price: 12,
    },
    {
        title: "lil'bit",
        description: "Small mug set of 3",
        image: "/images/data/8.jpg",
        price: 12,
    },
    {
        title: "tutu",
        description: "Cute bed set for your little one",
        image: "/images/data/9.jpg",
        price: 12,
    },
    {
        title: "bobo kit",
        description: "night lamp and mug set",
        image: "/images/data/10.jpg",
        price: 12,
    },
    {
        title: "dodo",
        description: "Cute bed set for your little one",
        image: "/images/data/11.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "lorum ipsum dolor sit amet lorum ipsum dolor sit amet lorum",
        image: "/images/data/12.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "lorum ipsum dolor sit amet lorum ipsum dolor sit amet lorum ipsum dolor sit amet",
        image: "/images/data/13.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "lorum ipsum dolor sit amet lorum ipsum do",
        image: "/images/data/14.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "lorum ipsum dolor sit amet lorum ipsum dolor sit amet lorum ipsum dolor sit amet lorum ipsum dolor sit amet",
        image: "/images/data/15.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "string",
        image: "/images/data/16.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "string",
        image: "/images/data/17.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "string",
        image: "/images/data/18.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "string",
        image: "/images/data/19.jpg",
        price: 12,
    },
    {
        title: "string",
        description: "",
        image: "/images/data/20.jpg",
        price: 12,
    }
]

export default data;