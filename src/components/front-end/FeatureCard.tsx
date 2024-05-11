import { ReactNode } from "react";

interface PropsType {
    icon: ReactNode;
    title: string;
    desc: string;
}
const FeatureCard = ({ icon, title, desc }: PropsType) => {
    return (
        <div className="flex gap-2 bg-gray-100 px-4 py-6">
            {icon}
            <div>
                <p className="text-xl font-medium">{title}</p>
                <p className="text-gray-600">{desc}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
