import React, { useState } from 'react';
import styled from 'styled-components';
// import { collection, addDoc } from "firebase/firestore"; 
// import { db } from '../firestore-config';

const Form = () => {
     const [Item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');

    // const handleEnquiry = async (e) => {
    //     e.preventDefault(); // Prevent default form submission
        
    //     if (!Item || !quantity) {
    //         alert("Please enter both food item and quantity.");
    //         return;
    //     }

        // try {
        //     const docRef = await addDoc(collection(db, "fooditems"), { item: Item, quantity: quantity });
        //     console.log("Document written with ID: ", docRef.id);
        // } catch (error) {
        //     console.error("Error adding document: ", error);
        // }
    // };
    const handleEnquiry =() =>{
      
      const encodedMessage = encodeURIComponent(`Hello, I need ${quantity} ${Item}`);
      const whatsappUrl = `https://wa.me/+918248966014?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");

    }

    return (
        <StyledWrapper>
            <div className="form-container">
                <form className="form" onSubmit={handleEnquiry}>
                  <h1 className='flex justify-center items-center text-[#df12c3]'>ORDER FORM</h1>
                    <div className="form-group">
                        <label htmlFor="item">Food Item</label>
                        <input type="text" id="item" value={Item} onChange={(e) => setItem(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    </div>
                    <button className="form-submit-btn" type="submit">Order Confirm</button>
                </form>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 350px;
    
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding:30px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-group label {
    color: #e81cff;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    color: #e81cff;
    font-weight: 600;
    width: 100%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }
`;

export default Form;
