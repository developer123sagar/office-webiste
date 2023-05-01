import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = [
        {
            title: "Water Proofing Services",
            content: "Waterproofing services are essential for protecting buildings, structures, and surfaces from water damage and maintaining their structural integrity.",
            serviceImg: "images/waterproof.jpg",
        },
        {
            title: "Building Remodeling",
            content: "Building renovation projects can have many benefits, including improving the functionality and efficiency of the building ..",
            serviceImg: "images/remodeling.jpeg",
        },
        {
            title: "Construction & Supervision",
            content: "Construction supervision is the process of overseeing and managing the construction of a building or infrastructure project ....",
            serviceImg: "images/services1.jpeg",
        },
        {
            title: "CAD and GIS Maps",
            content: "Computer-Aided Design (CAD) and Geographic Information Systems (GIS) are essential tools used in engineering services for designing and analyzing infrastructure projects.",
            serviceImg: "images/cadmap.jpg",
        },
        {
            title: "Estimation & Quantity Survey",
            content: "Estimation and quantity surveying are crucial aspects of engineering services that involve calculating the costs and quantities of materials needed for construction projects.",
            serviceImg: "images/survey.jpeg",
        },
        {
            title: "Roof & Metal Works",
            content: "Roof and metal works are an essential aspect of construction and building maintenance. Roofs and metal works protect buildings from the elements ...",
            serviceImg: "images/roof.jpeg",
        },
    ];
    return (
        <>
            <div className="relative mt-20 p-5">
                <p className="text-red-500 font-bold text-lg">Our Services</p>
                <h1 className="font-bold text-2xl text-black mb-5">
                    Trust The Experience
                </h1>
                <div className="grid gap-4 grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
                    {
                        services.map((item, id) => (
                            <div key={id} className=" bg-slate-900 rounded-md p-5">
                                <ServiceCard title={item.title} content={item.content} serviceImg={item.serviceImg} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Services;
