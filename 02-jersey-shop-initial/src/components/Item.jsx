/* eslint-disable react/prop-types */
function Item (props){

    
    return (
        <div onClick={()=>{props.selected(props.item.id)}} className={ `product ${props.item.isInBag ?"selected":""}`}>
            <div className="photo">
              <img src={"./img/" + props.item.photo} />
            </div>
            <div className="description">
              <span className="name">{props.item.name}</span>
              <span className="price">{props.item.price}</span>
              {props.item.isInBag && (
                <div className="quantity-area">
                  <button className="quantityButton" disabled={props.item.quantity<=1} onClick={(event)=>props.quantityIncreaser(event,props.item.id,-1)}>-</button>
                  <span className="quantity">{props.item.quantity}</span>
                  <button className="quantityButton" onClick={(event)=>props.quantityIncreaser(event,props.item.id,+1)}>+</button>
                </div>
              )}
            </div>
          </div>
    )
}

export default Item;