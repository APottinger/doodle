import Picture from './picture/Picture'

const Pictures = ({ pictures, deleteBtn }) => {
    return (
        <div>
            {pictures.map(picture => <Picture key={pictures.id} picture={picture} deleteBtn={deleteBtn}/>)}
        </div>
    )
}

export default Pictures
