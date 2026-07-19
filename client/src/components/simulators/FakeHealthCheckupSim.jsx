import React, { useState } from "react";

export default function FakeHealthCheckupSim({ onComplete }) {

  const [view, setView] = useState("offer");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = () => {

    if(!name || !age || !mobile || !email || !address){
      setError("Please fill all details.");
      return;
    }

    setError("");
    setView("payment");

  };

  const handlePayment = ()=>{

    setLoading(true);

    setTimeout(()=>{

      setLoading(false);
      setView("otp");

    },1500);

  };

  if(view==="offer"){

    return(

<div
style={{
maxWidth:"650px",
margin:"0 auto",
background:"#fff",
borderRadius:"12px",
overflow:"hidden",
boxShadow:"0 10px 30px rgba(0,0,0,.2)"
}}
>

<div
style={{
background:"#009688",
padding:"18px",
color:"#fff",
fontWeight:"700",
fontSize:"24px"
}}
>

HealthCare Plus

</div>

<div style={{padding:"25px"}}>

<h2>

🩺 Full Body Checkup Package

</h2>

<div
style={{
background:"#E8F5E9",
padding:"15px",
borderRadius:"8px",
marginBottom:"20px"
}}
>

🔥 Today Only

Complete Body Checkup

MRP ₹4,999

Offer Price ₹299

Free Home Sample Collection

</div>

<label>

Full Name

</label>

<input
className="form-control"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<label>

Age

</label>

<input
className="form-control"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<label>

Mobile Number

</label>

<input
className="form-control"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
/>

<label>

Email

</label>

<input
className="form-control"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<label>

Home Address

</label>

<textarea
className="form-control"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

{error &&
<p style={{color:"red"}}>

{error}

</p>
}

<button
onClick={handleNext}
style={{
width:"100%",
marginTop:"20px",
padding:"14px",
background:"#009688",
border:"none",
color:"#fff",
fontWeight:"700",
borderRadius:"6px"
}}
>

Book Health Checkup

</button>

</div>

</div>

);

}
if(view==="payment"){

return(

<div
style={{
maxWidth:"520px",
margin:"0 auto",
background:"#fff",
borderRadius:"12px",
overflow:"hidden",
boxShadow:"0 10px 30px rgba(0,0,0,.2)"
}}
>

<div
style={{
background:"#009688",
padding:"18px",
color:"#fff",
fontWeight:"700",
fontSize:"22px"
}}
>

Secure Payment

</div>

<div style={{padding:"25px"}}>

<h2>

Pay Booking Fee

</h2>

<p>

Complete your booking by paying the discounted registration fee.

</p>

<div
style={{
background:"#E8F5E9",
padding:"15px",
borderRadius:"8px",
marginBottom:"20px"
}}
>

<b>Full Body Checkup Package</b>

<br/>

Offer Price

<h2 style={{color:"#009688"}}>

₹299

</h2>

</div>

<label>

Card Holder Name

</label>

<input
className="form-control"
placeholder="Enter card holder name"
/>

<label>

Card Number

</label>

<input
className="form-control"
placeholder="1234 5678 9012 3456"
maxLength={19}
/>

<label>

Expiry Date

</label>

<input
className="form-control"
placeholder="MM/YY"
/>

<label>

CVV

</label>

<input
type="password"
className="form-control"
placeholder="123"
maxLength={3}
/>

<button
onClick={handlePayment}
disabled={loading}
style={{
width:"100%",
marginTop:"20px",
padding:"14px",
background:loading ? "#999" : "#009688",
color:"#fff",
border:"none",
borderRadius:"6px",
fontWeight:"700",
fontSize:"16px"
}}
>

{loading ? "Processing..." : "Pay ₹299"}

</button>

</div>

</div>

);

}

if(view==="otp"){

return(

<div
style={{
maxWidth:"520px",
margin:"0 auto",
background:"#fff",
borderRadius:"12px",
overflow:"hidden",
boxShadow:"0 10px 30px rgba(0,0,0,.2)"
}}
>

<div
style={{
background:"#009688",
padding:"18px",
color:"#fff",
fontWeight:"700",
fontSize:"22px"
}}
>

OTP Verification

</div>

<div style={{padding:"25px"}}>

<h2>

Verify Payment

</h2>

<p>

A 6-digit OTP has been sent to your registered mobile number.

Enter the OTP to confirm your booking.

</p>

<label>

Enter OTP

</label>

<input
className="form-control"
maxLength={6}
placeholder="6-digit OTP"
/>

<div
style={{
marginTop:"15px",
padding:"12px",
background:"#FFF3CD",
borderRadius:"6px",
fontSize:"13px",
color:"#856404"
}}
>

⚠ Never share your OTP with anyone.

</div>

<button
onClick={()=>{
setLoading(true);

setTimeout(()=>{
setLoading(false);
setView("success");
},1500);

}}
style={{
width:"100%",
marginTop:"20px",
padding:"14px",
background:loading ? "#999" : "#009688",
color:"#fff",
border:"none",
borderRadius:"6px",
fontWeight:"700",
fontSize:"16px"
}}
>

{loading ? "Verifying..." : "Verify Booking"}

</button>

</div>

</div>

);

}
if(view==="success"){

return(

<div
style={{
maxWidth:"650px",
margin:"0 auto",
background:"#fff",
borderRadius:"12px",
overflow:"hidden",
boxShadow:"0 10px 30px rgba(0,0,0,.2)"
}}
>

<div
style={{
background:"#D32F2F",
color:"#fff",
padding:"18px",
textAlign:"center",
fontWeight:"700",
fontSize:"24px"
}}
>

⚠ Scam Revealed!

</div>

<div style={{padding:"25px"}}>

<h2>

You fell for a Fake Full Body Checkup Scam.

</h2>

<p>

The attractive ₹299 health package was a fake offer designed to collect your personal and financial information. Fraudsters often create fake diagnostic websites, advertise huge discounts, and ask users to make advance payments.

</p>

<div
style={{
background:"#FFEBEE",
padding:"15px",
borderRadius:"8px",
marginTop:"20px"
}}
>

<h3>Information Exposed</h3>

<ul>

<li>Full Name</li>

<li>Age</li>

<li>Mobile Number</li>

<li>Email Address</li>

<li>Home Address</li>

<li>Card Details</li>

<li>OTP</li>

</ul>

</div>

<div
style={{
background:"#FFF8E1",
padding:"15px",
borderRadius:"8px",
marginTop:"20px"
}}
>

<h3>Red Flags</h3>

<ul>

<li>Huge discount (₹4,999 → ₹299).</li>

<li>Pressure to pay immediately.</li>

<li>No official hospital or diagnostic center information.</li>

<li>Requested complete personal details before verification.</li>

<li>Asked for card details and OTP.</li>

</ul>

</div>

<div
style={{
background:"#E8F5E9",
padding:"15px",
borderRadius:"8px",
marginTop:"20px"
}}
>

<h3>Safety Tips</h3>

<ul>

<li>Book health checkups only through official hospital or diagnostic websites.</li>

<li>Verify the healthcare provider before making payment.</li>

<li>Never share your OTP or banking details with unknown websites.</li>

<li>Be cautious of unrealistic discounts.</li>

<li>If you suspect fraud, contact your bank immediately and report it to the Cyber Crime Helpline (1930).</li>

</ul>

</div>

<button
onClick={()=>
onComplete([
"Full Name",
"Age",
"Mobile Number",
"Email Address",
"Home Address",
"Card Details",
"OTP"
])
}
style={{
width:"100%",
marginTop:"25px",
padding:"14px",
background:"#009688",
color:"#fff",
border:"none",
borderRadius:"6px",
fontWeight:"700",
fontSize:"16px"
}}
>

Continue to Quiz

</button>

</div>

</div>

);

}

return null;

}