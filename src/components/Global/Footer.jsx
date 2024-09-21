
import React from 'react'
import logo from "../../images/samdenkens-removebg.png"
import { Link } from 'react-router-dom'
import policy1 from "../../policies/Business Ethics and Anti-Corruption Policy for Samdenkens Nigeria Limited.pdf"
import policy2 from "../../policies/Community Relations and Social Responsibility Policy for Samdenkens Nigeria Limited.pdf"
import policy3 from "../../policies/Document Control and Management Policy for Samdenkens Nigeria Limited.pdf"
import policy4 from "../../policies/Environmental Policy for Samdenkens Nigeria Limited.pdf"
import policy5 from "../../policies/Ethical Code of Conduct for Samdenkens Nigeria Limited.pdf"
import policy6 from "../../policies/Waste Management Policy for Samdenkens Nigeria Limited.pdf"

const Footer = () => {
  return (
    <div className='' style={{borderTop: "1px solid #00000080"}}>
        <section className='w-[90%] mt-8 mb-4 mx-auto flex sm:flex-col sm:justify-center justify-between'> 
<div className='my-auto sm:flex sm:justify-cener sm:mb-6'>
    <img src={logo} className='sm:w-[116px] sm:hidden w-[160px] ] sm:h-[82px]' alt="Samdenkens" />
</div>

<div className='sm:text-ceter'>
    <h2 className='text-[#d81220] font-semibold text-2xl mb-6'>Quick links</h2>
    <ul>
        <li className='mb-6'>
            <Link to="/about" className='underline text-base my-auto'>About us</Link>
        </li>
        <li className='mb-5'>
            <Link to="/partners" className='underline text-base'>Partners</Link>
        </li>
        <li className='mb-7'>
            <Link to="/career" className='underline text-base'>Careers</Link>
        </li>
        <li className='mb-5'>
            <Link to="/" className='underline text-base'>FAQ</Link>
        </li>
    </ul>

</div>
<div className='sm:mt-10'>
    <h2 className='text-[#d81220] font-semibold text-2xl mb-4'>Policy</h2>
    <ul className='flex flex-col justify-cente ext-center'>
        <li className='flex gap-6 mb-5 text-center sm:justify-cener'> <a className='my-auto underline text-center' href={policy4} target='_blank' rel='noopener noreferrer'>Environmental Policy</a>
</li>
<li className='flex gap-6 mb-5 sm:justify-centr'>

<a  className='my-auto underline' href={policy6} target='_blank' rel='noopener noreferrer'>Waste Management Policy</a>
</li>
<li className='flex gap-6 mb-5 sm:justify-cener'> 

<a  className='my-auto underline' href={policy1} target='_blank' rel='noopener noreferrer'>Business Ethics and Anti-Corruption Policy</a>
</li>
<li className='flex gap-6 mb-5 sm:justify-centr'>

<a href={policy3} target='_blank' rel='noopener noreferrer'  className='my-auto underline'>Document Control and Management Policy</a>
</li>
<li className='flex gap-6 mb-5 sm:justify-centr'>

<a href={policy5} target='_blank' rel='noopener noreferrer'  className='my-auto underline'>Ethical Code of Conduct</a>
</li>
<li className='flex gap-6 mb-5 sm:justify-centr'>

<a href={policy2} target='_blank' rel='noopener noreferrer'  className='my-auto underline'>Community Relations and Social Responsibility Policy</a>
</li>
    </ul>
</div>
<div className=' sm:py-10'>
    <h2 className='text-[#d81220] font-semibold text-2xl mb-4'>Address</h2>
    <p>
    5a Benita Close Eliozu 
    </p>
    <p>Port-Harcourt.</p>
  
   
</div>
<div className=''>
    <h2 className='text-[#d81220] font-semibold text-2xl mb-4'>Need help</h2>
    <h2 className=' sm:text-lg'>Reach out to us : </h2>
    <p className='sm:mb-8 sm:text-lg'>
   <Link to="" className='underline'>info@samdenkensng.com</Link>
    </p>
    <ul className=' flex w-full gap-4 mb-10 items-center mt-4'>
        <li className='flex gap-6 mb-5'> <Link className='my-auto' to="">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
<path d="M16.4573 13.794L22.1532 7.125H20.8032L15.8588 12.9154L11.9078 7.125H7.35156L13.3253 15.882L7.35156 22.875H8.70156L13.9238 16.7595L18.0964 22.875H22.6527L16.4573 13.794ZM14.6089 15.9585L14.0037 15.0866L9.18756 8.14875H11.2609L15.1467 13.7479L15.7519 14.6198L20.8043 21.8985H18.7309L14.6089 15.9585Z" fill="#222222"/>
</svg>
</Link>
</li>
<li className='flex gap-6 mb-5'>

<Link  className='my-auto' to="">
<svg  className='my-auto' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z" fill="#222222"/>
</svg>
</Link>
</li>
<li className='flex gap-6 mb-5'> 

<Link  className='my-auto' to="">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5C12.963 7.5 12.708 7.509 11.9078 7.545C11.1097 7.58175 10.5645 7.7085 10.0875 7.89375C9.58687 8.08188 9.13331 8.377 8.7585 8.7585C8.37702 9.13333 8.08191 9.58688 7.89375 10.0875C7.7085 10.5645 7.58175 11.1097 7.545 11.9078C7.50825 12.708 7.5 12.963 7.5 15C7.5 17.037 7.50825 17.292 7.545 18.0922C7.58175 18.8902 7.7085 19.4355 7.89375 19.9125C8.08193 20.4131 8.37704 20.8667 8.7585 21.2415C9.13335 21.623 9.58689 21.9181 10.0875 22.1063C10.5645 22.2915 11.1097 22.4183 11.9078 22.455C12.708 22.491 12.963 22.5 15 22.5C17.037 22.5 17.292 22.491 18.0922 22.455C18.8902 22.4183 19.4355 22.2915 19.9125 22.1063C20.4131 21.9181 20.8667 21.623 21.2415 21.2415C21.623 20.8667 21.9181 20.4131 22.1063 19.9125C22.2915 19.4355 22.4183 18.8902 22.455 18.0922C22.491 17.292 22.5 17.037 22.5 15C22.5 12.963 22.491 12.708 22.455 11.9078C22.4183 11.1097 22.2915 10.5645 22.1063 10.0875C21.9181 9.58688 21.623 9.13333 21.2415 8.7585C20.8667 8.377 20.4131 8.08188 19.9125 7.89375C19.4355 7.7085 18.8902 7.58175 18.0922 7.545C17.292 7.509 17.037 7.5 15 7.5ZM15 8.8515C17.0025 8.8515 17.2395 8.859 18.03 8.895C18.762 8.92875 19.1588 9.05025 19.4235 9.153C19.773 9.2895 20.0235 9.45225 20.286 9.714C20.5485 9.9765 20.7105 10.227 20.847 10.5765C20.949 10.8413 21.072 11.238 21.105 11.9693C21.141 12.7605 21.1485 12.9967 21.1485 15C21.1485 17.0025 21.141 17.2395 21.105 18.03C21.0712 18.762 20.949 19.1588 20.847 19.4235C20.7268 19.7493 20.5351 20.044 20.286 20.286C20.0235 20.5485 19.773 20.7105 19.4235 20.847C19.1588 20.949 18.762 21.072 18.0308 21.105C17.2403 21.141 17.0033 21.1485 15 21.1485C12.9975 21.1485 12.7597 21.141 11.97 21.105C11.238 21.0712 10.8413 20.949 10.5765 20.847C10.2507 20.7268 9.95596 20.5351 9.714 20.286C9.46489 20.044 9.27319 19.7493 9.153 19.4235C9.05025 19.1588 8.928 18.762 8.895 18.0308C8.859 17.2395 8.8515 17.0033 8.8515 15C8.8515 12.9975 8.859 12.7605 8.895 11.97C8.92875 11.238 9.05025 10.8413 9.153 10.5765C9.2895 10.227 9.45225 9.9765 9.714 9.714C9.9765 9.4515 10.227 9.2895 10.5765 9.153C10.8413 9.05025 11.238 8.928 11.9693 8.895C12.7605 8.859 12.9967 8.8515 15 8.8515ZM15 17.4998C14.337 17.4998 13.7012 17.2364 13.2324 16.7676C12.7636 16.2988 12.5002 15.663 12.5002 15C12.5002 14.337 12.7636 13.7012 13.2324 13.2324C13.7012 12.7636 14.337 12.5002 15 12.5002C15.663 12.5002 16.2988 12.7636 16.7676 13.2324C17.2364 13.7012 17.4998 14.337 17.4998 15C17.4998 15.663 17.2364 16.2988 16.7676 16.7676C16.2988 17.2364 15.663 17.4998 15 17.4998ZM15 11.1487C14.4942 11.1487 13.9934 11.2484 13.5262 11.4419C13.0589 11.6355 12.6344 11.9191 12.2768 12.2768C11.9191 12.6344 11.6355 13.0589 11.4419 13.5262C11.2484 13.9934 11.1487 14.4942 11.1487 15C11.1487 15.5058 11.2484 16.0066 11.4419 16.4738C11.6355 16.9411 11.9191 17.3656 12.2768 17.7232C12.6344 18.0809 13.0589 18.3645 13.5262 18.5581C13.9934 18.7516 14.4942 18.8513 15 18.8512C16.0214 18.8512 17.001 18.4455 17.7232 17.7232C18.4455 17.001 18.8512 16.0214 18.8512 15C18.8512 13.9786 18.4455 12.999 17.7232 12.2768C17.001 11.5545 16.0214 11.1487 15 11.1487ZM19.9035 10.9965C19.9035 11.1147 19.8802 11.2317 19.835 11.3409C19.7898 11.4501 19.7235 11.5493 19.6399 11.6329C19.5563 11.7165 19.4571 11.7828 19.3479 11.828C19.2387 11.8732 19.1217 11.8965 19.0035 11.8965C18.8853 11.8965 18.7683 11.8732 18.6591 11.828C18.5499 11.7828 18.4507 11.7165 18.3671 11.6329C18.2835 11.5493 18.2172 11.4501 18.172 11.3409C18.1268 11.2317 18.1035 11.1147 18.1035 10.9965C18.1035 10.7578 18.1983 10.5289 18.3671 10.3601C18.5359 10.1913 18.7648 10.0965 19.0035 10.0965C19.2422 10.0965 19.4711 10.1913 19.6399 10.3601C19.8087 10.5289 19.9035 10.7578 19.9035 10.9965Z" fill="#222222"/>
</svg>

</Link>
</li>
<li className='flex gap-6 mb-5'>

<Link to=""  className='my-auto'>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
<path d="M11.2031 9.74977C11.2029 10.1476 11.0447 10.5291 10.7633 10.8102C10.4818 11.0914 10.1002 11.2492 9.70238 11.249C9.30455 11.2488 8.9231 11.0906 8.64193 10.8092C8.36077 10.5277 8.20293 10.1461 8.20313 9.74827C8.20332 9.35045 8.36155 8.969 8.643 8.68783C8.92444 8.40667 9.30605 8.24882 9.70388 8.24902C10.1017 8.24922 10.4832 8.40745 10.7643 8.68889C11.0455 8.97034 11.2033 9.35195 11.2031 9.74977ZM11.2481 12.3598H8.24813V21.7498H11.2481V12.3598ZM15.9881 12.3598H13.0031V21.7498H15.9581V16.8223C15.9581 14.0773 19.5356 13.8223 19.5356 16.8223V21.7498H22.4981V15.8023C22.4981 11.1748 17.2031 11.3473 15.9581 13.6198L15.9881 12.3598Z" fill="#222222"/>
</svg>
</Link>
</li>
    </ul>
</div>
        </section>
        <div className='py-5' style={{borderTop: "1px solid #00000080"}}>
           <div className='w-[90%] mx-auto'>
           <div className='flex sm:flex-col justify-between'>
                <h2 className='text-[#d81220] sm:text-center sm:mb-6'>&copy; SAMDENKENS NIG LTD</h2>
                <nav>
                    <ul className='flex justify-between gap-10 sm:gap-1'>
                <li>
                    <Link className='' style={{textDecoration: 'underline'}}>Terms of service</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'underline'}}>Privacy policy</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'underline'}}>Cookies</Link>
                </li>
                    </ul>
                </nav>
            </div>
           </div>
           
        </div>
        <div className='bg-[#d81220] w-full py-3'>
<h2 className='text-center text-white font-medium'>Powered by <Link className='underline' to="https://jgcreative.tech">JG Creative Studio</Link> </h2>
        </div>
    </div>
  )
}

export default Footer