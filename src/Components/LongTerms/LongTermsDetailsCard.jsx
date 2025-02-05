import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LongTermsJson } from './LongTermsJson';
import ApplyNowForm from './ApplyNowForm';
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign';
import { assests } from '../../assets/assets';

const LongTermsDetailsCard = () => {
  const { id } = useParams();
  const [innerdata, setInnerdata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInner = LongTermsJson.find((val) => val.id === Number(id));
    if (fetchInner) {
      setInnerdata(fetchInner);
    } else {
      setError("Item not found");
    }
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!innerdata) return <p>Loading...</p>;

  return (
    <>
      <BreadcrumbDesign 
        BreadCrumbImg={assests.BreadcrumbImage} 
        BreadcrumbPara={''} 
        BreacrumbHeading={innerdata.name} 
      />
      
      <div className='ptb60'>
        <div className="container">
          <div className="grid grid-cols-12 gap-x-0 md:gap-x-5">
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-12 gap-x-0 md:gap-x-5">
                {innerdata.details.map((detail, index) => (
                  <div className="col-span-12 md:col-span-6 mtb10" key={index}>
                    <div className={`p30 h-full -rounded--theme-normalradius group border border-solid border-[#bdbdbd] transition-transform delay-75 ease-in-out group-hover:scale-90 group-hover:-translate-y-1`}>
                      <div className='mb20 min-w-20 w-20 h-20 -bg--theme-primary-one-light -rounded--theme-fullradius flex items-center justify-center'>
                        <img className='w-12 transition-all delay-75 ease-in-out group-hover:scale-90 group-hover:-translate-y-1' src={innerdata.icon} alt={innerdata.name} />
                      </div>
                      <h2 className='-font--theme-Extrabold -text--theme-sm'>
                        {innerdata.name} <span className='-text--theme-primary-one'>{detail.year}</span>
                      </h2>
                      <ul className='pl-0 md:pl-5'>
                        {detail.modules.map((module, index) => (
                          <li className='list-decimal' key={index}>{module}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <ApplyNowForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LongTermsDetailsCard;