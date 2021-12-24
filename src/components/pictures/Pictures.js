const Pictures = ({ pictures }) => {
    return (
        <div>
            {pictures.map(picture => (<img key={picture.id} src={picture.img_url} alt='' height='500rem' width='500rem'/>))}
        </div>
    )
}

export default Pictures
