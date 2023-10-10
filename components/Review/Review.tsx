import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

import { Star } from "../svgs";

function Stars({ stars = 5 }: { stars?: number }) {

    return <div
        className='overflow-hidden mb-4'
        style={{ width: `${stars * 27}px` }}
    >
        <div className='flex gap-2 text-xl w-fit'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    </div>
}

export default function App() {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="max-w-3xl">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar radius="full" size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">Oct 9, 2023</h5>
                       
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <Stars />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi blanditiis error eaque, illum dignissimos distinctio vero accusantium quam libero earum repellat? Quas consequatur blanditiis quaerat aliquam placeat mollitia excepturi!
                </p>
            </CardBody>
        </Card>
    );
}
