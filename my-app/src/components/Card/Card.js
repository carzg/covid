import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


const CardComponent = (props) => (
    <Card className={props.className}>
        <CardContent>
            <Typography color='text.secondary'>
                {props.text}
            </Typography>
            <Typography fontWeight='medium' fontSize='h6.fontSize'>
                {props.value}
            </Typography>   
            <Typography color='text.secondary'>
                {new Date(props.date).toDateString()}
            </Typography>
            <Typography fontStyle='italic'>
                {props.info}
            </Typography>
        </CardContent>
    </Card>
);

export default CardComponent;