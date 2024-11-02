import React, {useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';


const ContactForm = () => {
  const pathname = window.location.pathname;

  const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [option, setOption] = useState("")
    const [mes, setMes] = useState("");

    const form = useRef()

    const emailHandler = (e) => {
        setEmail(e.target.value);
      };
      const mesHandler = (e) => {
        setMes(e.target.value);
      };
      const fnameHandler = (e) => {
        setFname(e.target.value);
      };
      const lnameHandler = (e) => {
        setLname(e.target.value);
      };
      const optionHandler = (e) => {
        setOption(e.target.value);
      };
      
      const numHandler = (e) => {
        setNum(e.target.value);
      };

      const submitHandler = (e) => {
        e.preventDefault();
    
        if (email === "" || mes === "") {
          Swal.fire({
            title: "Fields must not be empty",
            icon: "warning",
          });
    
          return;
        } else {
          emailjs
            .sendForm(
              "service_aybdbzg",
              "template_it8b7gn",
              form.current,
              "SaKsUWe14ryr1EYV_"
            )
            .then(
              (result) => {
                console.log(result.text);
                Swal.fire({
                  title: "We have received your message, Thank You! We will get back to you as soon as possible.",
                  icon: "success",
                });
              },
              (error) => {
                console.log(error.text);
              }
            );
          setEmail("");
          setMes("");
          setFname("");
          setLname("")
          setOption("")
          setNum("")
        }
      };
  return (
    <div className='mt-40'>
        <h2 className='text-[#d81220] font-medium text-2xl sm:text-base text-center'>GET IN TOUCH</h2>
      <p className='font-medium text-3xl sm:text-2xl sm:w-[90%] sm:mx-auto text-black text-center'>Let's Start a Conversation!</p>
      <p className='font-light text-lg sm:text-base w-[70%] sm:w-[90%] text-center mx-auto mt-6 mb-10 sm:mb-10'>
      Have questions or want to learn more about our services?
Fill out the form below, and our team will reach out to you
shortly. We look forward to connecting with you!
      </p>
<form ref={form} className='bg-[#F4E6E7] w-[80%] sm:w-[90%] mx-auto py-16 sm:py-10 px-14 sm:px-3 mt-0 mb-28'>
<div className='w-full flex gap-4 md:flex-col justify-between mb-12 sm:mb-[16px]'>
  <input name="fname"  value={fname}
                onChange={fnameHandler} type="text" className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='First Name' />
  <input name="lname"  value={lname}
                onChange={lnameHandler} type="text"  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Last Name' />
</div>
<div className='w-full flex gap-4 md:flex-col justify-between sm:mb-[16px] mb-12'>
  <input name="email"  value={email}
                onChange={emailHandler} type="email" className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Email' />
  <input name="num" value={num}
                onChange={numHandler} type="number"  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Phone Number' />
</div>
<div className='w-full flex justify-between mb-12 sm:mb-[16px]'>
 {pathname === "/request-quote" ? <select name="option" value={option}
                onChange={optionHandler} className='category-select pl-6 w-full h-[60px] rounded-[10px] pr-6 bg-[#FFFFFF] focus:outline-none'  id="category">
  <option value="Select an option" className='pl-6'>Select an option</option>
    <option value="Waste Management / Environmental and Sustainability" className='pl-6'>Waste Management / Environmental and Sustainability</option>
    <option value="Procurement and Equipment Supplies">Procurement and Equipment Supplies</option>
    <option value="Construction, Electricals and Instrumentation">Construction, Electricals and Instrumentation</option>
    <option value="Equipment Hire">Equipment Hire</option>
    <option value="Trainings/Manpower supply">Trainings/Manpower supply</option>
    <option value="Marine Logistics">Marine Logistics</option>
    <option value="Brand communications, Compliance Certification & New media marketing">Brand communications, Compliance Certification & New media marketing</option>
  </select>    :   <select name="option" value={option}
                onChange={optionHandler} className='category-select pl-6 w-full h-[60px] rounded-[10px] pr-6 bg-[#FFFFFF] focus:outline-none'  id="category">
  <option value="Select an option" className='pl-6'>Select an option</option>
    <option value="General Inquiries" className='pl-6'>General Inquiries</option>
    <option value=" Request Quote">Request Quote</option>
    <option value="Partnership Opportunities">Partnership Opportunities</option>
    <option value="Careers">Careers</option>
    <option value="Customer Support">Customer Support</option>
    <option value="Marine Logistics">Marine Logistics</option>
    <option value="Media & Press Inquiries">Media & Press Inquiries</option>
    <option value="Investor Relations">Investor Relations</option>
    <option value="Feedback & Suggestions">Feedback & Suggestions</option>
    <option value="Regulatory & Compliance">Regulatory & Compliance</option>
    <option value="Technical Support">Technical Support</option>
    <option value="Supplier Inquiries">Supplier Inquiries</option>
  </select> }



</div>
<div>
  <textarea name="mes"   value={mes}
                onChange={mesHandler} className='w-full pl-6 pt-5 pb-32 rounded-[10px] focus:outline-none' placeholder='Your Text'></textarea>
</div>
<button onClick={submitHandler} className='bg-[#d81220] hover:bg-[#b40f1b] rounded-[10px] text-white w-full h-[80px] mt-12 sm:mt-[22px]'>Submit</button>
</form>
</div>

  )
}

export default ContactForm