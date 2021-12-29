import React from 'react';
import { Typography, Card, CardHeader, CardMedia, CardActionArea, CardActions, CardContent, Button  } from '@mui/material';
import { FaTimes } from 'react-icons/fa';

const Picture = ({ picture, deleteBtn }) => {
    return (
        <>
            <Card sx={{ boxShadow: 4, maxWidth: 500 }}>
                <CardHeader 
                    title='The Starry Night'
                    subheader='December 12, 1970'
                />
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        image={picture.img_url}
                        height={ 500 }
                    />
                </CardActionArea>
                <CardContent>
                    <Typography variant='h5'>
                        The Starry Night 
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                        Vincent van Gogh painted Starry Night in 1889 during his stay at the asylum of Saint-Paul-de-Mausole near Saint-Rémy-de-Provence.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' variant='outlined'>Details</Button>
                    <Button size='small' onClick={() => deleteBtn(picture.id)} sx={{color: 'red'}}>Delete</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Picture
