import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
    {
        icon: <TbTruckDelivery className="text-4xl" />,
        title: "Free Delivery",
        desc: "Orders from all time",
    },
    {
        icon: <RiRefund2Fill className="text-4xl" />,
        title: "Return & Refund",
        desc: "Money back quarantine",
    },
    {
        icon: <TbDiscount className="text-4xl" />,
        title: "Member Discount",
        desc: "On Order over $99.00",
    },
    {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "Support 24/7",
        desc: "Contact us 24 hours a day",
    },
];
const Feature = () => {
    return (
        <section>
            <div className="container grid sm:grid-cols-2 lg:grid-cols-4 mt-8">
                {data.map((item) => (
                    <FeatureCard
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </section>
    );
};

export default Feature;
