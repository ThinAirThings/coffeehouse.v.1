'use client'

import { HStack, VStack, styled } from "@/styled-system/jsx"
import { FC } from "react"
import coffeebackground from '../../../../../public/assets/marketing.backgrounds/coffee-background@2x.png'
import { AspectRatio, Avatar, Card, Text } from "@radix-ui/themes"
import Image from "next/image"
import { motion } from 'framer-motion';
import LinePath from "./client.LinePath"


const StyledCard = styled(Card)
export const DataFlowMap: FC<{

}> = ({

}) => {
    return (
        <VStack
            w='full'
            py={{
                base: '90px',
                sm: '96px',
            }} 
            gap={{
                base: '0px',
                sm: '0px',
            }}
            px={{
                base: '50px',
                sm: '64px',
                md: '350px'
            }}
            position={'relative'}
            style={{
                backgroundImage: `url(${coffeebackground.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.15)', // This is your overlay color, adjust as needed
                zIndex: 1,
            }}/>
            <HStack zIndex={2} w='full' justify={'space-around'}>
                <StyledCard
                    style={{
                        backgroundColor: 'transparent',
                    }}
                    backdropFilter='auto'
                    backdropBlur={'md'}
                    boxShadow={'2xl'}
                >
                    <VStack>
                        <Image
                            src="/assets/marketing.icons/gradcap.svg"
                            width={200}
                            height={200}
                            alt="gradcap"
                        />
                        <Text size={{
                            initial: '4',
                            xs: '5',
                        }} style={{color: 'black'}} weight='bold' align='center'>University Faculty</Text>
                    </VStack>
                </StyledCard>
                <StyledCard
                    style={{
                        backgroundColor: 'transparent',
                    }}
                    backdropFilter='auto'
                    backdropBlur={'md'}
                    boxShadow={'2xl'}
                >
                    <VStack>
                        <Image
                            src="/assets/marketing.icons/grant.gov@2x.png"
                            width={200}
                            height={200}
                            alt="gradcap"
                        />
                        <Text size={{
                            initial: '4',
                            xs: '5',
                        }} style={{color: 'black'}} weight='bold' align='center'>Grant Sources</Text>
                    </VStack>
                </StyledCard>
            </HStack>
            <HStack zIndex='2'>
                <LinePath/>
            </HStack>
            <HStack zIndex='2'>
                <StyledCard
                    style={{
                        backgroundColor: 'transparent',
                    }}
                    backdropFilter='auto'
                    backdropBlur={'md'}
                    boxShadow={'2xl'}
                >
                    <VStack gap='0'>
                        <Avatar
                            radius="full"
                            size='9'
                            src="/assets/marketing.icons/icons.octopus.png"
                            fallback={'Crawler'}
                        />
                        <Text style={{color: 'black'}} size='5' weight='bold'>Web Crawler</Text>
                    </VStack>
                </StyledCard>
            </HStack>
            <HStack zIndex='2'>
                <LinePath/>
            </HStack>
            <HStack zIndex='2'>
                <StyledCard
                    style={{
                        backgroundColor: 'transparent',
                    }}
                    backdropFilter='auto'
                    backdropBlur={'md'}
                    boxShadow={'2xl'}
                >
                    <VStack gap='0'>
                        <Avatar
                            radius="full"
                            size='9'
                            src="/assets/marketing.icons/icons.ai.png"
                            fallback={'AI'}
                        />
                        <Text style={{color: 'black'}} size='5' weight='bold'>AI Engine</Text>
                    </VStack>
                </StyledCard>
            </HStack>
            <HStack zIndex='2'>
                <LinePath/>
            </HStack>
            <HStack zIndex='2' w='full'>
                <VStack gap='0' w='full'>
                <StyledCard
                    style={{
                        backgroundColor: 'transparent',
                        width: '350px'

                    }}
                    minW={{
                        base: '350px',
                        sm: '800px',
                    }}
                    backdropFilter='auto'
                    backdropBlur={'md'}
                    boxShadow={'2xl'}
                >
                    <AspectRatio
                        ratio={1.04753}
                    >
                        <Image
                            src="/assets/marketing.icons/circleheads@2x.png"
                            fill={true}
                            alt="heads"
                        />
                    </AspectRatio>
                </StyledCard>
                </VStack>
            </HStack>
        </VStack>
    )
}