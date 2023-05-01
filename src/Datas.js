import { FaAward, FaCertificate, FaCheckCircle, FaClock, FaPhoneVolume, FaUser } from "react-icons/fa";

const data = {
    services : [
        {
          title: "Construction Supervision",
          content: "Construction supervision is the process of overseeing and managing the construction of a building or infrastructure project ....",
          servImg: "images/services1.jpeg"
        },
        {
          title: "Seepage Treatment",
          content: "Seepage is the slow movement of water through soil, rock, or other porous materials. It can be a significant problem in...",
          servImg: "images/services2.jpeg"
        },
        {
          title: "Building Renovation",
          content: "Renovating a building is an exciting and often necessary process that can completely transform its look and feel. Whether it's updating the ....",
          servImg: "images/services3.jpeg"
        },
      ],

    extraServices : ["Home Insepection", "Engineering Consultation", "CAD and GIS Solutions", "Construction", "Interior and Exterior Design"],

    testimonials : [
        {
          name: "Ram Aryal",
          description: "Sr. Div. Engineer (DoWR, GoN)",
          thoughts: "I recently had the pleasure of working with Samagra BUilders Pvt. Ltd. on my home renovation project, and I can’t wait recommend them highly enough. The team was professional, courteous, and always on time. They kept us informed throughout the entire process and went above and beyond to ensure that the project was completed on time and within budget. The quality of their work was exceptional, and we couldn’t be happier with the results.",
          rating: 4.5,
          imgTestimonial: "images/testimonials1.jpg"
        },
        {
          name: "Jay Raj Pant",
          description: "Businessman",
          thoughts: "We hired Samagra Builders Pvt. Ltd. to renovate our building for our business, and we were blown away by their professionalism and expertise. The team was extremely knowledgeable and provided us with excellent guidance throughout the entire process. They were always available to answer our questions and address any concerns we had. The quality of their work was exceptional, and we are thrilled with the finished product.",
          rating: 4,
          imgTestimonial: "images/testimonials2.jpg"
        },
        {
          name: "Digambar Bikram Rana",
          description: "Former Government Officer",
          thoughts: "I recently used the service of Samagra Builders Pvt. Ltd. to renovate my home, and I was incredibly impressed with their attention to detail and commitment to quality. The team was courteous, respectful, and always willing to go the extra mile to ensure that the project was completed to my satisfaction. They worked efficiently and effectively, and the finished result was beyond my expectations. I would highly recommend this company to anyone looking for a reliable and professional construction team.",
          rating: 5,
          imgTestimonial: "images/testimonials3.jpeg",
        }
      ],

      chooseUs : [
        {
          icon: <FaAward className="mb-2" size={30} color="orange" />,
          title: "Quality assurance",
          content: "Quality assurance is a critical component of any product or service development process. It involves the systematic review, testing, and monitoring of products and services to ensure that they meet the desired quality standards and customer expectations."
        },
        {
          icon: <FaCheckCircle className="mb-2" size={30} color="orange" />,
          title: "Accredited Firm",
          content: "Becoming an accredited firm is a significant achievement that requires a commitment to quality and meeting established standards. Accreditation can provide numerous benefits for businesses, including increased credibility, improved performance, and a competitive edge in the marketplace."
        },
        {
          icon: <FaUser className="mb-2" size={30} color="orange" />,
          title: "Trained Manpower",
          content: "Trained manpower is an important asset to many industries and professions. It can improve productivity, quality of work, and efficiency, and help organizations remain competitive in the marketplace. Trained manpower can improve productivity by reducing time & resources required to perform tasks."
        },
        {
          icon: <FaClock className="mb-2" size={30} color="orange" />,
          title: "Time Availability",
          content: "Time availability is a crucial factor in determining the success of any endeavor. Managing time effectively requires individuals and organizations to prioritize tasks, set goals, and allocate resources appropriately to achieve the desired outcomes."
        },
        {
          icon: <FaPhoneVolume className="mb-2" size={30} color="orange" />,
          title: "Quick Response",
          content: "To be effective, quick response must be coordinated and efficient. This requires individuals and organizations to work together as a team, communicating clearly and effectively to ensure that everyone is on the same page and working towards the same goals."
        },
        {
          icon: <FaCertificate className="mb-2" size={30} color="orange" />,
          title: "1 Year Warranty",
          content: "From a business perspective, offering a warranty in service can also help to reduce the risk of costly legal disputes or reputational damage in the event that a service does not perform as expected. Offering a warranty in service provides customers with added assurance and can help to build trust and loyalty. "
        },
      ],

      privacyPolicy: [
        {
          title: "कागजात साझेदारी प्रावधान (Document Sharing Provision)",
          contentNep:"प्रारंभिक अध्ययन पश्चात भवनको पूर्ण अध्ययनको लागि, तपाईंले भवनको सबै आवश्यक दस्तावेज (जस्तै संरचनात्मक नक्शा / वास्तुकला चित्रहरू, स्थल र स्थान सम्बन्धि कागजातहरु, समझौता पत्र आदि) हामीलाई उपलब्ध गर्न सहमत हुनुहुन्छ । हामी आश्वासन दिन्छौं कि प्रदान गरिएको दस्तावेज सुरक्षित हुनेछ ।",
          contentEng:"(For the complete study of the building prior to initial study, you agree to share all the required documents of the building (i.e. structural/ architectural drawings, site location, agreement papers, etc.). We assure that the provided document will be in safe hands.)"
        },
        {
          title: "निरीक्षणको लागि अनुमति (Permission for Inspection)",
          contentNep:"तपाईं हाम्रो सम्बन्धको उचित पहिचानको साथ कम्पनी द्वारा नियुक्त व्यक्तिहरूलाई निरीक्षणको लागि तालिका अनुसार पहुँच प्रदान गर्न सहमत हुनुहुन्छ ।",
          contentEng:"(You agree to provide access as per the schedule for the inspection to the personals appointed by the company with proper identification of link with us.)"
        },
        {
          title: "निरीक्षण शुल्क भुक्तानी (Inspection Fee Payment)",
          contentNep:"तपाईं सहमत हुनुहुन्छ कि यो सम्झौतामा हस्ताक्षर गर्दा तपाईंले यस सम्झौताका सामग्रीहरू पढ्नुभएको र बुझ्नुभएको छ र यो कागजात अनुसार निरीक्षण गरिनेछ । तपाईं निरीक्षण सुरु पश्चात सोहि दिन निरीक्षणको लागि आवस्यक न्यूनतम रकम भुक्तानी गर्न सहमत हुनुहुन्छ ।",
          contentEng:"(You agree that in signing this agreement You have read and understand the contents of this agreement and that the inspection will be carried out in accordance with this document. You agree to pay for the inspection on the same day after completion of inspection.)"
        },
        {
          title: "गोपनीयता कायम (Keeping Privacy)",
          contentNep:"भवनको प्रतिनिधिको उपस्थितिमा मात्र निरीक्षण गरिनेछ । हामीले देखेका र नदेखेका सबै सम्पत्तिहरूमा हामीले नियुक्त गरेको व्यक्तिद्वारा कुनै पनि बाधा पर्ने छैन ।",
          contentEng:"(Inspection will be carried out only in the presence of representative from the building. All the seen and unseen properties will not be hampered by the individuals appointed by Samagra Builders.)"
        },
        {
          title: "मिडिया मैत्री वातावरण (Media Friendly Environment)",
          contentNep:"तपाईं समस्याको थप अध्ययन र नमूनाका लागि तस्विर र भिडियो खिच्न मिडिया मैत्री वातावरण कायम राख्न सहमत हुनुहुन्छ। साथै, हामी तपाईंको गोपनीयता कायम राख्दै सामाजिक प्लेटफर्महरूमा क्याप्चर गरिएका छविहरू प्रयोग गर्न स्वतन्त्र छौं ।",
          contentEng:"(You agree to maintain the media friendly environment to take pictures and video for the further study and sampling of the problem. Also, we are free to use captured images on social platforms maintaining your privacy.)"
        },
        {
          title: "वारेन्टी र वैधता प्रावधान (Warranty and Validity)",
          contentNep:"तपाईं सहमत हुनुहुन्छ कि यो सम्झौतामा हस्ताक्षर गर्दा, प्रस्तावित उद्धरण सहितको रिपोर्ट निरीक्षणको मितिबाट तीस (३०) दिनको अवधिको लागि मान्य हुन्छ, र निरीक्षण सम्झौतामा नाम दिइएको ग्राहक/पक्षहरूको विशेष प्रयोगको लागि हुनेछ र रिपोर्ट भित्र साथै, नविकरणका लागि आवश्यक पर्ने टाईलहरू बाहेक सबै श्रम र निर्माण सामग्रीहरू कोटेशनहरूमा समावेश गरिएको भए तापनि निर्दिष्ट गरिएको समग्र विल्डर्सको हो भन्ने बुझ्नुहुन्छ ।",
          contentEng:"(You agree that in signing this agreement, you understand that the report along with proposed quotation is valid for a period of thirty (30) days from the date of inspection, and is for the exclusive use of the client/parties named on the inspection agreement and within the report. Also, it is necessary to understand that all the labors and construction materials except tiles required for renovation are included in quotations nevertheless specified are belonging of Samagra Builders.)"
        },
        {
          title: "निरीक्षण विधि (Inspection Methodology)",
          contentNep:"निरीक्षकहरू र प्राविधिकहरूद्वारा गरिएका सबै निरीक्षणहरू केही प्लम्बिङ र विद्युतीय निरीक्षणहरू बाहेक पूर्ण रूपमा गैर-विनाशकारी परीक्षणहरू हुनेछन् ।",
          contentEng:"(All the inspections are solely carried out by the inspectors and the technicians only. Non-destructive tests (NDTs) other than some of the plumbing and electrical inspections are to be carried out.)"
        },
        {
          title: "सम्झौताको वैधता (Contract Validity)",
          contentNep:"यदि तपाईंले हस्ताक्षर गर्न र हामीलाई यस सम्झौताको प्रतिलिपि फिर्ता गर्न असफल हुनुभयो र अनुरोध गरिएको निरीक्षण रद्द गर्नुभएन भने, तपाईं सहमत हुनुहुन्छ कि तपाईंले यस सम्झौताको सामग्रीहरू पढ्नुभएको र बुझ्नुभएको छ र हामी यस सम्झौताको आधारमा निरीक्षण शुल्क लिन बाध्य हुनेछौं |",
          contentEng:"(If You fail to sign and return a copy of this agreement to us and do not cancel the requested inspection, then you agree that you have read and understand the contents of this agreement which says that you need to pay the inspection fees for the same.)"
        },
      ]

}

export default data;