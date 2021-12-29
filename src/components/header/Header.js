import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Camera }  from '@mui/icons-material';

import HeaderArticle from './HeaderArticle'

const Header = () => {

    return (
        <div>
            <AppBar position='sticky'>
                <Toolbar>
                    <Camera />
                    <Typography variant='h4'>doodle</Typography>
                    <Stack sx={{marginLeft: 'auto'}} direction='row' justifyContent='flex-end'>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>Category</Button>
                        <Button color='inherit'>Contact</Button>
                        <Button outlined color='inherit'>Join Now</Button>
                        <Button outlined color='inherit'>Login</Button>
                    </Stack> 
                </Toolbar>
            </AppBar>
            <HeaderArticle />
        </div>
    )
}

export default Header
