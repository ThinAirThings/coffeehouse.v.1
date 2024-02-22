'use client'

import { AspectRatio, HStack } from "@/styled-system/jsx"
import Image from "next/image"

const mockups = ["matches", "search", "groups"]
export const NormalCarousel = () => {
    return (
        <HStack 
            w={`calc(300vw - 272px)`} 
            h='auto' 
            overflow='hidden' 
            position='relative'
        >
            {mockups.map((mockup, index) => (
                <AspectRatio ratio={1.6563}
                    w='full'
                    position='relative'
                    zIndex={index}
                >
                    <Image
                        key={index}
                        src={`/assets/marketing.mockups/macbook.${mockup}.png`}
                        alt="Picture of a macbook"
                        fill={true}
                    />
                </AspectRatio>

            ))}
        </HStack>
    )
}