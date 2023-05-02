import React, { useState } from 'react'
import data from '../Datas';
import PrvPolicyCard from './PrvPolicyCard';

const Blog = () => {
    const [showPP, setShowPP] = useState(false);
    const { privacyPolicy } = data;

    return (
        <>
            <div className='relative mt-20 p-5 sm:p-10'>
                {
                    showPP ?
                        (
                            <>
                                <h1 className='text-xl sm:text-3xl font-bold'>कम्पनीका नियम र सर्तहरू (Company’s Terms and Conditions)</h1>
                                {
                                        privacyPolicy.map((item, id) => (
                                            <PrvPolicyCard key={id} title={item.title} contentNep={item.contentNep} contentEng={item.contentEng} />
                                        ))
                                }
                                <button onClick={()=> setShowPP(false)} className='mt-8 bg-blue-700 hover:bg-red-500 px-4 py-2 text-white rounded-2xl transition-all duration-700 hover:rounded-none'>Go Back</button>
                            </>

                        ) : (

                            <div className='flex flex-col gap-y-10 sm:flex-row gap-x-5'>
                                <div className='p-10 h-fit basis-2/5 bg-slate-100 rounded-md'>
                                    <p className='font-bold text-lg mb-3'>Recent Posts</p>
                                    <p>Privacy and Policy</p>
                                </div>
                                <div className='basis-4/5 md:p-10 p-3 bg-slate-100 rounded-md'>
                                    <p className='font-bold text-xl mb-5'>Privacy and Policy</p>
                                    <p className='text-sm'>कम्पनीका नियम र सर्तहरू (Company’s Terms and Conditions) कागजात साझेदारी प्रावधान (Document Sharing Provision) प्रारंभिक अध्ययन पश्चात भवनको पूर्ण अध्ययनको लागि, तपाईंले भवनको सबै आवश्यक दस्तावेज (जस्तै संरचनात्मक नक्शा / वास्तुकला चित्रहरू, स्थल र स्थान सम्बन्धि कागजातहरु, समझौता पत्र आदि) हामीलाई उपलब्ध गर्न सहमत हुनुहुन्छ । हामी आश्वासन दिन्छौं कि प्रदान गरिएको दस्तावेज सुरक्षित हुनेछ …</p>
                                    <p className='mt-5 w-fit cursor-pointer hover:text-red-500' onClick={() => setShowPP(true)}>Read More...</p>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Blog