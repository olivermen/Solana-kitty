import * as React from 'react';
import Stack from '@mui/material/Stack';

const Footer = () => {
    return (
        <div>
            <Stack className={"center"}>
                <img
                    src="discord.svg"
                    width={"30px"}
                    className={"center discord-img"}
                />
                <p className={"discord-p"}>
                    All rights reserved © Sol Kitties 2022
                </p>
            </Stack>
        
        </div>
    );
}

export default Footer