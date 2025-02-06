import React, { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign';
import Navbar from '../NavFoot/Navbar';
import { assests } from '../../assets/assets';
import courses from './CorseApi';
import { Link } from 'react-router-dom';

const CoursesCard = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // Filter courses based on selected category (case-insensitive)
    const filteredCourses = courses.filter(course => {
        // Check if category is an array, then match any of the selected category values
        if (Array.isArray(course.category)) {
            return selectedCategory.toLowerCase() === 'all' ||
                course.category.some(c => c.toLowerCase() === selectedCategory.toLowerCase());
        } else {
            return selectedCategory.toLowerCase() === 'all' || course.category.toLowerCase() === selectedCategory.toLowerCase();
        }
    });

    return (
        <div>
            <BreadcrumbDesign
                BreadcrumbPara={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum numquam ex animi autem dicta dolores est? Assumenda, tempora laudantium'}
                BreadCrumbImg={assests.BreadcrumbImage}
                BreacrumbHeading={'What do you want to learn today?'}
            />

            <div className='py-10'>
                <div className='container'>
                    <div className="grid grid-cols-12">
                        <div className="col-span-10 md:col-span-8">
                            <h2 className='lefttitle'>Recommended Courses</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae, voluptatem corrupti nulla a minima ea dolorem mollitia illum nam, explicabo fuga, provident facilis quas maxime unde! Alias, enim quas.</p>
                        </div>
                        <div className="md:col-span-2"></div>
                        <div className="col-span-2">
                            <select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="custom-select p-2 border border-gray-300 rounded mb-10"
                            >
                                <option value="All">All</option>
                                <option value="Generic">Generic</option>
                                <option value="Care">Care</option>
                            </select>
                        </div>
                    </div>





                    <div className="grid grid-cols-12 gap-x-0 md:gap-5 mt-10">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((val) => (
                                <div key={val.id} className="col-span-12 md:col-span-6 lg:col-span-3 mtb10 md:mtb-0">
                                    <div className='border border-solid border-[#bdbdbd] overflow-hidden -rounded--theme-normalradius relative ' style={{ minHeight: "420px" }}>
                                        <div className='h-40'>
                                            <img className='-rounded-tr--theme-normalradius -rounded-tl--theme-normalradius h-full w-full object-cover' src={val.img} alt="" />
                                        </div>
                                        <div className='-bg--theme-light -shadow--theme-lightshadow p20 -rounded-br--theme-normalradius -rounded-bl--theme-normalradius'>
                                            <div className='flex justify-between w-100'>
                                                <span className='border border-solid -border--theme-primary-one -text--theme-primary-one p-1 rounded-sm -text--theme-xs mb10 inline-block'>
                                                    {Array.isArray(val.category) ? val.category.join(', ') : val.category}
                                                </span>

                                                <span className='border border-solid -border--theme-primary-one -text--theme-primary-one p-1 rounded-sm -text--theme-xs mb10 inline-block'>online batch</span>
                                            </div>
                                            <h5 className='mb10 -font--theme-Extrabold text-lg'>{val.title}</h5>
                                            <div className='flex items-center gap-x-2 mb-1 -text--theme-primary-one'>
                                                <div className='flex items-center'>
                                                    <IoIosStar />
                                                    <IoIosStar />
                                                    <IoIosStar />
                                                    <IoIosStarHalf />
                                                    <IoIosStarOutline />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-x-2 mb10'>
                                                <span className='-font--theme-Extrabold'>{val.price}</span>
                                            </div>
                                            {val.title && val.img && (
                                                <Link to={`/CourseDetails/${val.title.replaceAll(" ", "-")}`} className='darkbtn bottom-2 absolute' >Learn More</Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-12">No courses available for the selected category.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursesCard;
