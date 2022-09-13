const ItemDetail = ({producto}) => {

    return(
        <>
            <div>
                <img src={producto.image} alt="" />
                <h2>{producto.title}</h2>
                <div>
                    <p>{producto.description}</p>
                </div>
                <p>{producto.price}</p>
            </div>
        </>
    )
    
}

export default ItemDetail;