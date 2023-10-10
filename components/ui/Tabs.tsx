'use client';
import React from "react";
import { Tabs, Tab, Chip } from "@nextui-org/react";


const text = `<h1 class="">
Dendrite Opal Gem Slice Necklace, 14k Gold Filled Minimalist Choker, Bridal Gift, Gemstone Necklace, Marble Jewelry, Boho Necklace, NK-GS
</h1>
    `
    import {Avatar} from "@nextui-org/react";

type DescriptionProps = {
    description: string
}

function Description({ description = '' }: DescriptionProps) {
    return (
        <div className='' dangerouslySetInnerHTML={{ __html: description }} />
    )
}


function AdditionalInformation({ info = '' }: { info?: string }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: info }} />
    )
}

import Review from "@/components/Review/Review";


function Reviews() {

    return (
        <div className='flex flex-col items-start w-full gap-4 flex-grow'>
            <Review />
            <Review />
            <Review />
        </div>
    )
}

export default function App() {
    return (
        <div className=" flex w-full items-center m-auto flex-col">
            <Tabs
                aria-label="Options"
                variant="light"
                classNames={{
                    tabList: "aaa123 gap-8 md:gap-12 w-full relative overflow-hidden text-[#9F9F9F] rounded-none mb-4 p-0",
                    cursor: "w-full text-black",
                    tab: "max-w-7xl w-full px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-[#000000]"
                }}
            >
                <Tab
                    key="description"
                    title={
                        <div className="flex items-center space-x-2 md:text-xl font-light">
                            <span>Description</span>
                        </div>
                    }
                >
                    <Description description={text} />
                </Tab>
                <Tab
                    key="reviews"
                    className="w-full max-w-3xl m-auto"
                    title={
                        <div className="flex items-center space-x-2  md:text-xl font-light">
                            <span>Reviews [<Chip size="sm" variant="faded">3</Chip>]</span>
                        </div>
                    }
                >
                    <Reviews />
                </Tab>
            </Tabs>
        </div>
    );
}
