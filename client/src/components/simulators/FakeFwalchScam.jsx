import React, { useState } from "react";

export default function FakeFwalchScam({ onComplete }) {

const [view,setView]=useState("offer");

const [name,setName]=useState("");
const [mobile,setMobile]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [upi,setUpi]=useState("");
const [pin,setPin]=useState("");


const inputStyle={
width:"100%",
padding:"15px",
marginBottom:"15px",
borderRadius:"10px",
border:"1px solid #ddd",
fontSize:"16px"
};



/* PAYMENT SCREEN */

if(view==="payment"){

return(

<div
style={{
background:"#f8fafc",
minHeight:"100vh",
padding:"40px"
}}
>

<div
style={{
maxWidth:"900px",
margin:"auto",
background:"#fff",
borderRadius:"18px",
padding:"35px",
boxShadow:"0 20px 50px rgba(0,0,0,.15)"
}}
>


<h1 style={{color:"#7c3aed"}}>
💳 Activate Fwalch Premium
</h1>


<div
style={{
background:"#ede9fe",
padding:"20px",
borderRadius:"12px"
}}
>

<h2>
Subscription Amount
</h2>

<h1>
₹99
</h1>

<p>
Complete payment to unlock premium access.
</p>

</div>



<h2 style={{marginTop:"30px"}}>
Payment Details
</h2>


<input
placeholder="UPI ID"
value={upi}
onChange={(e)=>setUpi(e.target.value)}
style={inputStyle}
/>



<input
placeholder="UPI PIN"
type="password"
value={pin}
onChange={(e)=>setPin(e.target.value)}
style={inputStyle}
/>



<button

onClick={()=>setView("success")}

style={{
width:"100%",
padding:"18px",
background:"#dc2626",
color:"#fff",
border:"none",
borderRadius:"12px",
fontSize:"18px",
fontWeight:"700",
cursor:"pointer"
}}

>

Pay ₹99 & Activate

</button>



</div>

</div>

)

}



/* SUCCESS SCREEN */


if(view==="success"){

return(

<div
style={{
background:"#f3f4f6",
minHeight:"100vh",
padding:"40px"
}}
>


<div
style={{
maxWidth:"900px",
margin:"auto",
background:"#fff",
borderRadius:"18px",
overflow:"hidden",
boxShadow:"0 20px 50px rgba(0,0,0,.18)"
}}
>


<div
style={{
background:"linear-gradient(90deg,#dc2626,#991b1b)",
padding:"25px",
color:"#fff",
textAlign:"center"
}}
>

<h1>
🚨 SCAM DETECTED!
</h1>

<h3>
This was a Fake Fwalch Subscription Scam.
</h3>

</div>



<div style={{padding:"35px"}}>


<div
style={{
background:"#fee2e2",
padding:"20px",
borderRadius:"12px"
}}
>

<h2>
⚠ Risk Level
</h2>


<div
style={{
height:"18px",
background:"#ddd",
borderRadius:"20px",
overflow:"hidden"
}}
>

<div
style={{
width:"95%",
height:"100%",
background:"#dc2626"
}}
>

</div>

</div>


<h3 style={{color:"#dc2626"}}>
HIGH RISK
</h3>


</div>




<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"20px",
marginTop:"25px"
}}
>



<div
style={{
background:"#fef2f2",
padding:"20px",
borderRadius:"12px"
}}
>

<h2>
📂 Information Exposed
</h2>

<ul>

<li>👤 Full Name</li>

<li>📱 Mobile Number</li>

<li>📧 Email Address</li>

<li>🔐 Account Password</li>

<li>💳 UPI ID</li>

<li>🔢 UPI PIN</li>

</ul>

</div>




<div
style={{
background:"#fff7ed",
padding:"20px",
borderRadius:"12px"
}}
>

<h2>
🚩 Red Flags
</h2>


<ul>

<li>Very cheap premium subscription.</li>

<li>Limited time pressure.</li>

<li>Fake streaming platform.</li>

<li>No verified company details.</li>

<li>Requested UPI PIN.</li>

<li>Collected unnecessary personal information.</li>


</ul>


</div>


</div>




<div
style={{
marginTop:"25px",
background:"#ecfdf5",
padding:"20px",
borderRadius:"12px"
}}
>

<h2>
🛡 Stay Safe
</h2>


<ul>

<li>Use official streaming platforms only.</li>

<li>Never share UPI PIN with anyone.</li>

<li>Verify apps and websites before payment.</li>

<li>Avoid unrealistic subscription offers.</li>

<li>Report fraud on Cyber Crime Helpline 1930.</li>

</ul>


</div>




<div
style={{
marginTop:"25px",
background:"#eff6ff",
padding:"20px",
borderRadius:"12px"
}}
>

<h2>
📈 Scam Timeline
</h2>


<p>
✅ Opened Fake Fwalch Website
</p>

<p>
⬇
</p>

<p>
✅ Created Account
</p>

<p>
⬇
</p>

<p>
✅ Entered Password
</p>

<p>
⬇
</p>

<p>
✅ Entered UPI Details
</p>

<p>
⬇
</p>

<p
style={{
color:"#dc2626",
fontWeight:"700"
}}
>
❌ Fraudsters Captured Your Information
</p>


</div>




<button

onClick={()=>onComplete([
"Full Name",
"Mobile Number",
"Email Address",
"Password",
"UPI ID",
"UPI PIN"
])}

style={{
width:"100%",
marginTop:"30px",
padding:"18px",
background:"linear-gradient(90deg,#2563eb,#4338ca)",
border:"none",
color:"#fff",
fontWeight:"700",
fontSize:"18px",
borderRadius:"12px",
cursor:"pointer"
}}

>

Continue to Quiz →

</button>



</div>


</div>


</div>

)

}




/* MAIN OFFER SCREEN */


return(

<div
style={{
background:"#f8fafc",
minHeight:"100vh",
padding:"40px"
}}
>


<div
style={{
maxWidth:"900px",
margin:"auto",
background:"#fff",
borderRadius:"18px",
overflow:"hidden",
boxShadow:"0 20px 50px rgba(0,0,0,.15)"
}}
>



<div
style={{
background:"linear-gradient(90deg,#7c3aed,#4c1d95)",
padding:"25px",
color:"#fff",
textAlign:"center"
}}
>


<h1>
🎬 Fwalch Premium
</h1>


<h3>
Unlimited Movies & Series
</h3>


</div>




<div style={{padding:"35px"}}>



<div
style={{
background:"#ede9fe",
padding:"20px",
borderRadius:"12px"
}}
>

<h2>
🔥 Special Offer
</h2>


<h1>
Premium Access ₹99/month
</h1>


<p>
Watch unlimited entertainment with premium membership.
</p>


<p>
⏳ Offer expires today!
</p>


</div>




<h2>
Create Your Account
</h2>



<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={inputStyle}
/>


<input
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={inputStyle}
/>


<input
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={inputStyle}
/>


<input
placeholder="Create Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={inputStyle}
/>



<button

onClick={()=>setView("payment")}

style={{
width:"100%",
padding:"18px",
background:"#7c3aed",
color:"#fff",
border:"none",
borderRadius:"12px",
fontSize:"18px",
fontWeight:"700",
cursor:"pointer"
}}

>

Start Premium →

</button>




</div>



</div>


</div>


)

}