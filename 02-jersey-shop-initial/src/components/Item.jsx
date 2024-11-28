/* eslint-disable react/prop-types */
function Item (props){
    return (
        <div className={ `product ${props.item.isInBag ?"selected":""}`}>
            <div className="photo">
              <img src={"./img/" + props.item.photo} />
            </div>
            <div className="description">
              <span className="name">{props.item.name}</span>
              <span className="price">{props.item.price}</span>
              {props.item.isInBag && (
                <div className="quantity-area">
                  <button>-</button>
                  <span className="quantity">{props.item.quantity}</span>
                  <button>+</button>
                </div>
              )}
            </div>
          </div>
    )
}

export default Item;