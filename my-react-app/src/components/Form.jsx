import { useState } from "react";
import styles from "./Form.module.css"

function Form(){
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const changeName = (event) => setName(event.target.value);
    const changeAge = (event) => setAge(event.target.value);
    const changeComment = (event) => setComment(event.target.value);
    const changePayment = (event) => setPayment(event.target.value);
    const changeShipping = (event) => setShipping(event.target.value);

    return(<div className={styles.myForm}>
        <h2>Fill This Form!</h2>

        <p><span>Name :</span> {name}</p>
        <input value={name} onChange={changeName} placeholder="Enter your name"/>

        <p><span>Age :</span> {age}</p>
        <input value={age} onChange={changeAge} placeholder="Enter your age"/>

        <p><span>Comment :</span> {comment}</p>
        <textarea value={comment} placeholder="Add additional instructions here!" onChange={changeComment}></textarea>
        
        <p><span>Payment :</span> {payment}</p>
        <select value={payment} onChange={changePayment}>
            <option value="" >Select an option</option>
            <option value="Visa" >Visa</option>
            <option value="Mastercard" >Mastercard</option>
            <option value="Paytm" >Paytm</option>
        </select>

        <p><span>Shipping :</span> {shipping}</p>
        <input type="radio" value="Pick Up" name="shipping" onChange={changeShipping}/>
        <label>Pick Up</label><br></br>
        <input type="radio" value="Delivery" name="shipping" onChange={changeShipping}/>
        <label>Delivery</label>
    </div>)
}

export default Form;