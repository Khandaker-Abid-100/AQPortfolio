import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="2022100000100@seu.edu.bd" Image={HiOutlineMail} />
      <SingleInfo text="01923345105" Image={FiPhone} />
      <SingleInfo text="keraniganj,Dhaka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
