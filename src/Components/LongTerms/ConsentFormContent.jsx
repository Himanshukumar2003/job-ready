import React from 'react'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ConsentFormContent = ({setIsChecked}) => {
    const navigate = useNavigate();

    const handleAgree = () => {
        setIsChecked(true);
        navigate(-1);
    };

  return (
    <div className='ptb60'>
        <div className="container">
            <div className='bg-white p20 md:p30 -rounded--theme-normalradius -shadow--theme-darkshadow'>
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
                <button className='darkbtn' onClick={handleAgree}>I Agree</button>
                <button className='bg-red-800 text-white text-center py-2 px20 -rounded--theme-normalradius ml-5' onClick={() => navigate(-1)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default ConsentFormContent