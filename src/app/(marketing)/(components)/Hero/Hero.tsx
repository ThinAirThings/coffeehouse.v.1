import { Box, Grid, HStack, VStack } from "@/styled-system/jsx"
import { CubeIcon, FaceIcon, PaperPlaneIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons"
import { Button, Heading } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import coffeebackground from '../../../../../public/assets/marketing.backgrounds/coffee-background@2x.png'

export const Hero = () => {
    return (
        <VStack 
            py={{
                base: '90px',
                sm: '96px',
            }} 
            gap={{
                base: '20px',
                sm: '32px',
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
                backgroundColor: 'rgba(0, 0, 0, 0.85)', // This is your overlay color, adjust as needed
                zIndex: 1,
            }}/>
            <VStack
                gap='15px'
                position={'relative'}
                zIndex={2}
            >

                    <Heading as='h1' size={{
                        initial: '8',
                        xs: '9',
                    }}
                        align='center'
                    >We Help Research Teams Form and <br/>Get Funding.</Heading>
                    <Heading as='h1' color='gray' size={{
                        initial: '3',
                        xs: '6',
                    }}
                        align='center'
                    >Coffeehouse is an AI-powered platform that connects research professors with peers in different disciplines to secure grant funding and assists PhD candidates in finding a suitable research advisor.</Heading>
                    <HStack gap='5px'>
                        <Link href='/for-students'><Button variant="outline"><FaceIcon/>Students</Button></Link>
                        <Link href='/for-professors'><Button variant="outline"><PersonIcon/>Professors</Button></Link>
                        <Link href='/for-professors'><Button variant="outline"><CubeIcon/>Universities</Button></Link>
                    </HStack>
                    <HStack gap='12px'>
                        <Link href='/login'><Button><RocketIcon/>Try it Now</Button></Link>
                        <Link href='/login'><Button><PaperPlaneIcon/>Contact Us</Button></Link>
                    </HStack>
            </VStack>
        </VStack>
    )
}