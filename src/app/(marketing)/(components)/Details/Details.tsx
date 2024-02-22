import { Grid, HStack, VStack } from "@/styled-system/jsx"
import { RocketIcon } from "@radix-ui/react-icons"
import { Button, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import { HowsItWorkTabs } from "./client.HowsItWork.Tabs"



export const Details = () => {
    return (
        // <Grid
        //     w='full'
        //     py={{
        //         base: '32px',
        //         sm: '32px',
        //     }}
        //     px={{
        //         base: '16px',
        //         sm: '256px',
        //     }}
        //     alignItems={{
        //         base: 'start'
        //     }}
        //     columns={{
        //         base: 1,
        //         sm: 2,
        //     }}
            
        // >
            <VStack 
                alignItems={'start'} 
                w='full' 
                bg='token(colors.orange.dark.2)'
                px={{base: '16px', sm: '136px'}}
                py={{base: '32px', sm: '32px'}}
            >
                <HStack justify={'space-between'} w='full'>
                    <Heading color='orange'>How's it work?</Heading>
                    <Link href='/sign-up'><Button variant="outline"><RocketIcon/>Try it now!</Button></Link>
                </HStack>
                <HowsItWorkTabs/>
            </VStack>

        // </Grid>
    )
}