import { AppBar, Typography, Container } from '@mui/material';
import { Camera }  from '@mui/icons-material';
import HeaderLeftNav from './HeaderLeftNav';
import HeaderRightNav from './HeaderRightNav';
import HeaderArticle from './HeaderArticle'

const Header = () => {

    return (
        <div>
            <AppBar position='relative' >
                <Typography variant='h4'><Camera />doodle</Typography>
                <Container maxWidth='md'>
                    <HeaderLeftNav />
                    <HeaderRightNav />
                </Container>
            </AppBar>
            <HeaderArticle />
        </div>
    )
}

export default Header
