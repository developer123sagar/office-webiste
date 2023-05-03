import React, { useState } from "react";
import { TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    business: "",
    email: "",
    message: "",
  })
  const toastMsg = ()=>{
    toast.success('Thank you for submating your details.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setForm({ firstName: "", lastName: "", phone: "", business: "", email: "", message: "" })
    toastMsg();
  }
  return (
    <div className="relative mt-20 p-2 md:p-3">
      <ToastContainer />
      <div className="mb-10">
        <p className="text-red-500 font-bold text-lg">Get In Touch</p>
        <p className="text-3xl font-bold">With Us</p>
      </div>
      <div className="flex flex-col lg:justify-between lg:flex-row gap-y-10 w-fit sm:w-full">

        <div className="flex w-full sm:flex-row sm:flex-wrap gap-y-5 flex-col sm:w-full lg:basis-2/5">
          <div className="rounded-md bg-slate-100 shadow-xl shadow-slate-400 px-2 mx-auto lg:h-fit py-5 w-full sm:w-[350px]">
            <h1 className="text-base lg:text-xl font-bold mb-2">Visit Us</h1>
            <div className="flex items-center gap-1 text-purple-800">
              <FaMapMarkerAlt size={20} />{" "}
              <p> Kathmandu, Nepal Pepsicola -32, KMC </p>{" "}
            </div>
          </div>
          <div className="rounded-md bg-slate-100 shadow-xl shadow-slate-400 py-5 mx-auto px-2 lg:h-fit w-full sm:w-[350px]">
            <h1 className="text-base lg:text-xl font-bold mb-2">Call Us</h1>
            <div className="flex items-center gap-1 text-purple-800">
              <MdPhone size={20} />
              <a href="tel:+977982-6761861">982-6761861</a>
            </div>
          </div>
          <div className="rounded-md bg-slate-100 shadow-xl lg:h-fit shadow-slate-400 py-5 mx-auto px-2 w-full sm:w-[350px]">
            <h1 className="text-base lg:text-xl font-bold mb-2">Send an Email</h1>
            <div className="flex items-center gap-1 text-purple-800">
              <MdEmail size={20} />
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQMFxpWvQDTGDHtjlrJDgMqQbMsgxTFLnGVGCsSlGhWZDCLrvzTZLpsvTDqjbsjnPWBkFC"
                target="_blank"
                className="text-sm ml-1"
              >
                samagrabuildersofficial@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="sm:w-[700px] sm:mx-auto lg:basis-3/5 w-full rounded-md bg-slate-100 shadow-2xl shadow-slate-800 p-5">
          <h1 className="text-base lg:text-xl font-bold text-red-600">Any Questions ?</h1>
          <p className="mb-5 text-base lg:text-xl font-bold">Write Down and Send Us</p>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:gap-x-2 mb-6 lg:mb-10">
              <TextField
                required
                label="First Name"
                variant="outlined"
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                value={form.firstName}
              />
              <TextField
                required
                label="Last Name"
                variant="outlined"
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                value={form.lastName}
              />
              <TextField
                required
                label="Phone"
                variant="outlined"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                value={form.phone}
              />
            </div>
            <div className="mb-6 lg:mb-10">
              <TextField
                required
                label="Business / Organization"
                variant="outlined"
                fullWidth
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                value={form.business}
              />
            </div>
            <div className="mb-6 lg:mb-10">
              <TextField
                required
                label="email"
                variant="outlined"
                fullWidth
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              />
            </div>
            <TextareaAutosize
              required
              placeholder="Write Your Message here"
              className="w-full bg-slate-300 rounded-md focus:outline-none p-5"
              minRows={5}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              value={form.message}
            />
            <button
              type="submit"
              className="mt-4 bg-sky-500 hover:text-white hover:bg-green-500 py-3 px-6 rounded-xl hover:rounded-md transition-all duration-700"
            >
              Submit
            </button>
            <button
              className="mt-4 ml-7 bg-sky-500 py-3 px-7 rounded-xl"
              onClick={()=>setForm({ firstName: "", lastName: "", phone: "", business: "", email: "", message: "" })}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
