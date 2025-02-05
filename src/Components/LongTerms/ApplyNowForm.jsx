import React, {useState} from 'react'
import { SlCalender } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { IoPricetagsOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { RiCoupon3Line } from "react-icons/ri";
import { assests } from '../../assets/assets';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ApplyNowForm = () => {
  const navigate = useNavigate();
  const [isPopup, setIsPopup] = useState(false);
  const ShowPopup = () =>{
    setIsPopup(!isPopup)
  }
  
  const [ischecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errormsg, setErrorMsg] = useState({})

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rto: "",
    nationality: "",
    file: "",
    comment: ""
  })

  const ValidationForm = (e) =>{
    const NewMsg = {};
    e.preventDefault();
    if(!formdata.name){
        NewMsg.name = "Name field are required"
    }

    if(!formdata.email){
      NewMsg.email = "Email field are required"
    }
    else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      NewMsg.email = "Invalid email format";
    }

    if(!formdata.phone){
      NewMsg.phone = "Phone field are required"
    }
    else if(formdata.phone.length !== 10){
      NewMsg.phone ="10 Digit Number required"
    }
    else if(isNaN(formdata.phone)){
      NewMsg.phone = "Only Numbers are allowed"
    }

    if(!formdata.rto){
      NewMsg.rto = "RTO are required"
    }

    if(!formdata.nationality){
      NewMsg.nationality ="Nationality are required"
    }

    if(!formdata.file){
      NewMsg.file = "file are required"
    }

    if(!formdata.comment){
      NewMsg.comment ="comment are required"
    }
    else if(formdata.comment.length < 5 ||  formdata.comment.length >= 200){
      NewMsg.comment = "Write a comment between 5 to 200 Words"
    }
    setErrorMsg(NewMsg);
  }

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      toggleModal();
    }
  };

  const canceltoggle = () => {
    setIsChecked(false)
    setIsModalOpen(!isModalOpen);

  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const ApplyDetails = [
    {
      id: 1,
      DetailIcons: <SlCalender/>,
      DetailName: "Standard Date",
      DetailInfo: "20/Jan/2025"
    },
    {
      id: 2,
      DetailIcons: <RiCoupon3Line/>,
      DetailName: "Code",
      DetailInfo: "AWX05YYN13"
    },
    {
      id: 3,
      DetailIcons: <GoClock/>,
      DetailName: "Days",
      DetailInfo: "Monday"
    },
    {
      id: 4,
      DetailIcons: <IoPricetagsOutline/>,
      DetailName: "Price",
      DetailInfo: "$500"
    },
    {
      id: 5,
      DetailIcons: <SlLocationPin/>,
      DetailName: "Location",
      DetailInfo: "Faridabad"
    }
  ]
  return (
    <div>

      <div className='p30 -bg--theme-primary-one-light -rounded--theme-normalradius -shadow--theme-darkshadow'>
        <div>
          {ApplyDetails.map((detailval)=>(
            <div className='mb10' key={detailval.id}>
              <div className='flex items-center gap-x-3 -text--theme-primary-one'>
                <span>{detailval.DetailIcons}</span>
                <p className='-font--theme-bold'>{detailval.DetailName}</p>
              </div>
              <div><h4 className='-text--theme-xs font-extrabold'>{detailval.DetailInfo}</h4></div>
            </div>
          ))}
        </div>
        <button onClick={ShowPopup} className='darkbtn'>Apply Now</button>
      </div>


      {isPopup && 
        <div>
          <div className="container">
            <div className='fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[80%] p20 z-50 -bg--theme-light transition-all delay-100 ease-linear -shadow--theme-darkshadow -rounded--theme-normalradius border border-solid border-[#bdbdbd] overflow-hidden'>
              <div onClick={()=>ShowPopup(isPopup)} className='absolute top-0 right-0 w-8 h-8 -bg--theme-primary-one -text--theme-light -text--theme-sm  flex items-center justify-center'><IoClose/></div>
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 md:col-span-5"><img className='hidden md:block -rounded--theme-normalradius' src={assests.applyimg} alt="" /></div>
                <div className="col-span-12 md:col-span-7">
                  <h2 className='mb20 -font--theme-Extrabold -text--theme-md'>Apply Now</h2>
                  <form onSubmit={ValidationForm}>
                    <div className="grid grid-cols-12 gap-x-5">
                      <div className="col-span-12 md:col-span-6">
                        <div className='mb20'>
                          <input value={formdata.name} onChange={(e)=>setFormData({...formdata, name: e.target.value})} type="text" placeholder='Name*' className='applyinput' />
                          {errormsg.name && <p className='text-red-700'>{errormsg.name}</p>}
                        </div>
                      </div>

                      <div className="col-span-12 md:col-span-6">
                        <div className='mb20'>
                          <input value={formdata.email} onChange={(e)=>setFormData({...formdata, email:e.target.value})} type="email" placeholder='Email*' className='applyinput' />
                          {errormsg.email && <p className='text-red-700'>{errormsg.email}</p>}
                        </div>
                      </div>

                      <div className="col-span-12 md:col-span-6">
                        <div className='mb20'>
                          <input value={formdata.phone} onChange={(e)=>setFormData({...formdata, phone:e.target.value})} type="text" placeholder='Phone*' className='applyinput' />
                          {errormsg.phone && <p className='text-red-700'>{errormsg.phone}</p>}
                        </div>
                      </div>

                      <div className="col-span-12 md:col-span-6">
                        <div className='mb20'>
                          <input value={formdata.rto} onChange={(e)=>setFormData({...formdata, rto:e.target.value})} type="text" placeholder='RTO (Right to Work)*' className='applyinput' />
                          {errormsg.rto && <p className='text-red-700'>{errormsg.rto}</p>}
                        </div>
                      </div>

                      <div className="col-span-12 md:col-span-12">
                        <div className='mb20'>
                          <input value={formdata.nationality} onChange={(e)=>setFormData({...formdata, nationality:e.target.value})} type="text" placeholder='Nationality*' className='applyinput' />
                          {errormsg.nationality && <p className='text-red-700'>{errormsg.nationality}</p>}
                        </div>
                      </div>

                      <div className="col-span-12 md:col-span-12">
                        <div className='mb20'>
                          <input value={formdata.file} onChange={(e)=>setFormData({...formdata, file:e.target.value})} type="file" placeholder='C.V Upload*' className='applyinput' />
                          {errormsg.file && <p className='text-red-700'>{errormsg.file}</p>}
                        </div>
                      </div>

                      <div className="col-span-12 md:col-span-12">
                        <div className='mb20'>
                          <textarea value={formdata.comment} onChange={(e)=>setFormData({...formdata, comment:e.target.value})} name="" id="" className='applyinput resize-none' placeholder='Comment Here...'></textarea>
                          {errormsg.comment && <p className='text-red-700'>{errormsg.comment}</p>}
                        </div>
                      </div>

                      <div className='col-span-12 md:col-span-12'>
                        <div className="mb20">
                          <input
                            type="checkbox"
                            checked={ischecked}
                            onChange={handleCheckboxChange}
                            className='mr-3'
                          />
                          I agree to the consent form.
                        </div>
                      </div>
                    </div>
                    <button className='darkbtn'>Submit Enquiry</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-[80%] md:w-[50%] p-5 rounded-lg relative overflow-y-scroll">
            <div className="absolute top-2 right-2 text-xl cursor-pointer" onClick={toggleModal} >
              <IoClose />
            </div>
            <div className='mb10'>
              <h4 className='-text--theme-sm -font--theme-Extrabold mb10'>Legal Basis for Processing</h4>
              <p>Your consent serves as the legal basis for processing your personal data in accordance with Article 6(1)(a) of the GDPR.</p>
            </div>
            <div className='mb10'>
              <h4 className='-text--theme-sm -font--theme-Extrabold mb10'>Your Rights Under GDPR</h4>
              <ul className='pl-5'>
                  <li className='list-decimal'><p><b>Access:</b> You have the right to access your personal data upon request.</p></li>
                  <li className='list-decimal'><p><b>Rectification:</b> You may request corrections to your personal data if it is inaccurate.</p></li>
                  <li className='list-decimal'><p><b>Withdrawal of Consent:</b> You may withdraw your consent at any time by contacting <b>university@schoolofcoding.co.uk</b></p></li>
                  <li className='list-decimal'><p><b>Erasure:</b> You have the right to request the deletion of your personal data where legally applicable.</p></li>
                  <li className='list-decimal'><p><b>Objection:</b> You may object to the processing of your data for marketing purposes.</p></li>
              </ul>
            </div>
            <div className='mb10'>
              <h4 className='-text--theme-sm -font--theme-Extrabold mb10'>Consent Agreement:</h4>
              <ul className='pl-5'>
                  <li className='list-decimal'><p>I confirm that I have been informed of the purpose of the recordings and photos, and how they may be used.</p></li>
                  <li className='list-decimal'><p>I  grant the University of Wolverhampton permission to process, edit, and distribute the photos, videos, and interview content as stated above.</p></li>
                  <li className='list-decimal'><p>I waive the right to review or approve the final material or any associated use.</p></li>
                  <li className='list-decimal'><p>I understand that portions of my interview may be used for public-facing promotional materials.</p></li>
                  <li className='list-decimal'><p>I acknowledge that there is no financial compensation for the use of my image, voice, or recorded content.</p></li>
              </ul>
            </div>
            <div className='flex items-center gap-x-5'>
              <button className="darkbtn" onClick={toggleModal}> I Agree </button>
              <button className="bg-red-700 text-white px-4 py-2 rounded" onClick={canceltoggle}> Cancel </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ApplyNowForm