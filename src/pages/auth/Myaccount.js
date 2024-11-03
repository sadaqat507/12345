// import React, { useMemo, useState } from 'react'

// const Myaccount = () => {
//  const [myNum,setMyNum]=useState(0);
//  const [show,setShow]=useState(false)

//   const getValue=()=>{
//    return setMyNum(myNum+1)
//   }

//   const countNumber=(num)=>{
//     console.log("num 👀  🤷‍♀️ ",num)
//     for(let i=0; i<=1000000000;i++){}
//       return num
//  }

//  const checkData=countNumber(myNum)

// //  const checkData=useMemo(()=>{
// //   return  countNumber(myNum)

// //  },[myNum])  
 
//  return (
//     <div>
//       Myaccount
//       <h3>Practies for UseMemo</h3>



//     <button onClick={getValue} className='bg-danger'>Counter</button>
//     <p>My new Number: {checkData}</p>
//     <button onClick={()=>setShow(!show)}>{show ? "you clicked me":"ClickMe Plz"}</button>
      

//     </div>
//   )
// }

// export default Myaccount


import React, { useMemo, useState } from 'react';

const  Myaccount = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
    { id: 2, name: 'Headphones', price: 200, quantity: 2 },
    { id: 3, name: 'Keyboard', price: 150, quantity: 1 },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Promo code data (you can expand this as needed)
  const validPromoCodes = {
    SAVE10: 10, // 10% off
    SAVE20: 20, // 20% off
    SAVE50: 50, // 50% off
  };

  // Function to update item quantity in the cart
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = (items) => {
    console.log('Calculating total price...');
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Memoizing the total price calculation to avoid recalculating on every render
  const totalPrice = useMemo(() => calculateTotalPrice(cartItems), [cartItems]);

  // Function to apply a promo code
  const applyPromoCode = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
    } else {
      alert('Invalid promo code');
      setDiscount(0);
    }
  };

  // Calculating the final price after applying the discount
  const finalPrice = useMemo(() => {
    return totalPrice - (totalPrice * discount) / 100;
  }, [totalPrice, discount]);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = $
            {item.price * item.quantity}
            <br />
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
          </li>
        ))}
      </ul>
      <hr />
      <h3>Total Price: ${totalPrice}</h3>

      <div>
        <h4>Apply Promo Code</h4>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={applyPromoCode}>Apply</button>
        {discount > 0 && <p>Promo Code Applied! Discount: {discount}%</p>}
      </div>

      <hr />
      <h3>Final Price after Discount: ${finalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default  Myaccount;
