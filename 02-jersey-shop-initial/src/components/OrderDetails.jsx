function OrderDetails(props) {

  function CalculateTotal() {
    let orderTotal = 0;

    props.itemsBag.forEach((element) => {
      orderTotal += element.price * element.quantity;
    });
    return orderTotal.toFixed(2);
  }

  return (
    <>
      <section className="summary">
        <strong>Order Details</strong>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {props.itemsBag.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>$ {item.quantity} x {item.price}</td>
              </tr>
            ))}

            <tr>
              <th>Total</th>
              <th>$ {CalculateTotal()}</th>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default OrderDetails;
