import { Fragment } from "react";
import './ItemDetail.css'

const ItemDetail = ({items}) => {
    console.log(items)
   return(
        <Fragment>
            {items.map( item => {
                 let price = item?.saleInfo?.listPrice?.amount || '';
                 let description = item?.searchInfo?.textSnippet || '';
                return (
                    <Fragment key={item.id}>
                        <div className="container-detail">
                            <div className='container-item-detail'>
                                <h1 className="title" >{item.volumeInfo.title}</h1>
                                <img className="image-detail" src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title} />
                                <p className="price-detail">${price}</p> 
                                <p className="description">{description}</p>
                            </div> 
                        </div>
                                               
                    </Fragment>
                )
            })}
            <button></button>
        </Fragment>
    )
}


export default ItemDetail;