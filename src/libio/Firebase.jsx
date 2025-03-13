import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs,  Query,  QuerySnapshot } from "firebase/firestore";
import { db } from "./firebaseconfig";


function  Firebase({scroll}) {

useEffect(()=>{
  scroll()
},[])

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loc, setLoc] = useState("");
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [fooditem, setFooditem] = useState([]);
  const[customers,setCustomers]=useState([])
 

  const handleAdd = (e) => {
    e.preventDefault();
    setFooditem([...fooditem, food + " - " + quantity]);
    setFood("");
    setQuantity(""); 
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
     
    const customer = { name, phone: parseInt(phone), loc, fooditem };
    console.log('submit')
    try {
   
      await addDoc(collection(db, "customers"), customer);
      console.log('submit')
      alert("Your order has been confirmed!");

      
      setName("");
      setPhone("");
      setLoc("");
      setFooditem([]);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error processing your order.");
    }
  };
  const getcustomer=async ()=>{
    const q=collection(db,"customers");
    const querysnapshot=await getDocs(q);
    let customers=[]
    querysnapshot.forEach((doc)=>{
      customers.push({...doc.data(), id: doc.id})
    })

  setCustomers(customers);
  console.log(customers);
  
  }
  useEffect(()=>{
    getcustomer();
  },[])



  return (
    <div>
      <div className=" container  md:mx-auto mx-4 w-full lg:w-[600px]  p-2  flex flex-col justify-center items-center rounded-xl bg-gray-400 my-4 ">
  
        <h1 className="text-center text-bold p-4 text-2xl">ORDER FORM</h1>
  

        {/* Food and Quantity Form */}
        <form onSubmit={handleAdd} className="">
          <div className="gap-10 space-y-4">
            <div className="flex items-center justify-between p-2 gap-4">
              <label htmlFor="foodname">Food</label>
              <TextField
                value={food}
                onChange={(e) => setFood(e.target.value)}
                label="FoodName"
                variant="outlined"
                required
              />
            </div>

            <div className="flex items-center p-2 gap-4">
              <label htmlFor="quantity">Quantity</label>
              <TextField
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                label="Quantity"
                variant="outlined"
                required
              />
            </div>

            <div className="flex  justify-center items-center p-2 gap-4">
              <button
                type="submit"
                className=" bg-pink-600 text-white rounded-full px-8 py-2 hover:bg-white hover:text-pink-600"
              >
                Add food
              </button>
            </div>
          </div>

          {/* Display the added food items */}
          <div className="border min-h-10 max-w-[300px] max-h-full mx-2 rounded-sm my-4">
            <ul className="list-disc pl-5">
              {fooditem.map((data, i) => (
                <li key={i} className="text-lg px-2 py-1 mx-2">
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </form>

        {/* Customer Details Form */}
        <form
          action=""
          className="flex flex-col justify-items-center space-y-4"
          onSubmit={handleSubmit}
        >
          <div className=" space-y-4 ">
            <div className="flex   justify-between items-center p-2 gap-4">
              <label htmlFor="name">Name</label>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                label="Name"
                variant="outlined"
              />
            </div>

            <div className="flex  justify-between items-center p-2 gap-4">
              <label htmlFor="phone">Phone</label>
              <TextField
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                label="Phone"
                variant="outlined"
              />
            </div>

            <div className="flex justity-between items-center p-2 gap-4">
              <label htmlFor="location">Location</label>
              <TextField
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                required
                label="Location"
                variant="outlined"
              />
            </div>

            <div className="flex  justify-center items-center p-2 gap-4 mb-6">
              <button
                type="submit"
                className=" px-20 py-2 rounded-2xl hover:bg-white hover:text-black bg-black text-white"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Firebase;
