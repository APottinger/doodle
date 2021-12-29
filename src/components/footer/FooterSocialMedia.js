import { FaInstagram, FaFacebook, FaSnapchat, FaTwitter } from "react-icons/fa";
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
const FooterSocialMedia = () => {
    return (
        
        <BottomNavigation showLabels sx={{ width: 1, backgroundColor: '#525252'}}>
            <BottomNavigationAction
                label={<a href="#"></a>}
                icon={<FaInstagram size={70} />} 
            /> 
        
            <BottomNavigationAction
                label={<a href="#"></a>}
                icon={<FaFacebook size={70} color='#CC2D90'/>} 
            />
        
            <BottomNavigationAction
                label={<a href="#"></a>}
                icon={<FaSnapchat size={70} color='#CC2D90' />} 
            />
        
            <BottomNavigationAction
                label={<a href="#"></a>}
                icon={<FaTwitter size={70} color='#CC2D90' />} 
            />
        </BottomNavigation>
        
        
    )
}

export default FooterSocialMedia
