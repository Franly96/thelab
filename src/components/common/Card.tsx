import React from 'react'
import Image from 'next/image'

type Props = {
    title: string;
    description: string;
    image: string;
};

function Card({ title, description, image }: Props) {
    return (
        <div className="display-flex flex-col items-center p-6 border rounded-lg shadow-lg max-w-sm mx-auto">
            <Image
            src={image}
            alt="Card image"
            width={300}
            height={200}
            className="rounded-lg mb-4"
            loading="lazy"
            />
            <h2 className="text-2xl font-bold mt-4">{title}</h2>
            <p className="text-lg mt-2">{description}</p>
        </div>
    )
}

export default Card