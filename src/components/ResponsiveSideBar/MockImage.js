import {Image} from "@nextui-org/react";
import React from "react";

const MockImage = () => {
    return (
        <div>
            <Image
                width={330}
                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                alt="NextUI Album Cover"
            />
        </div>
    )
}

export default MockImage;