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
      ]

}

export default data;