'use client'

import { css } from "@/styled-system/css";
import Image from "next/image";
import { FC } from "react"
import { useState, useEffect } from 'react';
import{fromEvent} from 'rxjs';


// const cellSize = 1000; // The width of each cell
const cellCount = 10; // The number of cells
const cellOffset = 400
// Function to calculate the rotation and translation
const theta = 360 / cellCount;
// const radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
const mockups = ["matches", "search", "groups"]

export const WarpCarousel: FC<{
    mobile: boolean
}> = ({
    mobile
}) => {
    const [rotation, setRotation] = useState(325);
    const [cellSize, setCellSize] = useState(window.innerWidth-cellOffset);
    const [radius, setRadius] = useState(Math.round(((window.innerWidth-cellOffset) / 2) / Math.tan(Math.PI / cellCount)));
    useEffect(() => {
        const subscription = fromEvent(window, 'resize').subscribe(() => {
            setCellSize(window.innerWidth-cellOffset);
            setRadius(Math.round(((window.innerWidth-cellOffset) / 2) / Math.tan(Math.PI / cellCount)));
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [])
    return (
        <div 
            style={{
                height: `${(cellSize - 20)*0.603}px`,
            }}
            className={css({
                width: '100%',
                perspective: '1000px',
            })}
        >
            <div className={css({
                width: '100%',
                height: '100%',
                position: 'absolute',
                transformStyle: 'preserve-3d',
                transition: 'transform 1s',
            })} style={{ transform: `translateZ(${-radius}px) rotateY(${rotation}deg)` }}>
                {mockups.map((mockup, index) => (
                    <div
                        key={index}
                        style={{
                            width: `${cellSize - 20}px`,
                            height: `${(cellSize - 20)*0.603}px`,
                            transform: `rotateY(${index * theta}deg) translateZ(${radius}px)`
                        }}
                        className={css({
                            position: 'absolute',
                            left: '10px',
                            top: '10px',
                            lineHeight: '120px',
                            textAlign: 'center',
                            fontSize: '80px',
                            backgroundImage: `url(/assets/marketing.mockups/macbook.${mockup}.png)`,
                        })}
                    >
                        <Image
                            src={`/assets/marketing.mockups/macbook.${mockup}.png`}
                            alt="Picture of a macbook"
                            fill={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}


