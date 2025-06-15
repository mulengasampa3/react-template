import { Link } from "react-router-dom";

interface BreadcrumbProps {
    items: { label: string; path?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="flex items-center text-gray-600 text-sm">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index !== 0 && <i className="bx bx-chevron-right-circle mx-2"></i>}
                    {item.path ? (
                        <Link to={item.path} className="text-blue-500 text-[12px] hover:underline">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-62 text-[12px]">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;
