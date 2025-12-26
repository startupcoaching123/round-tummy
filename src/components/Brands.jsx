import React from 'react';
import { Coffee, Truck, UtensilsCrossed, ChefHat } from 'lucide-react';

const Brands = () => {
    const brands = [
        {
            id: 1,
            name: 'HOTSPOT',
            type: 'Corporate & Institute Cafeterias',
            desc: 'A fast and efficient cafeteria model perfect for offices and campuses. We manage the entire setup, daily operations, and food service.',
            features: ['Quick food', 'Fresh meals', 'Friendly pricing'],
            icon: <Coffee size={40} />,
            color: '#FF9800'
        },
        {
            id: 2,
            name: 'Fu.D',
            type: 'Café & Delivery',
            desc: 'A cosy café experience for working professionals offering all-day breakfasts and fresh comfort food.',
            features: ['10-minute service', 'Available on Zomato/Swiggy'],
            icon: <UtensilsCrossed size={40} />,
            color: '#E91E63'
        },
        {
            id: 3,
            name: 'VDP (Veerji De Paranthe)',
            type: 'Cloud Kitchen',
            desc: 'A delivery brand loved for its stuffed, flavour-packed North Indian parathas.',
            tagline: '"Mann bharke fillings, jee bharke pyaar."',
            features: [],
            icon: <Truck size={40} />,
            color: '#F44336'
        },
        {
            id: 4,
            name: 'RT Catering',
            type: 'Gourmet Corporate Catering',
            desc: 'Perfect for employee meals, office events, Friday specials, and team celebrations.',
            features: ['Indian', 'Continental', 'Oriental'],
            icon: <ChefHat size={40} />,
            color: '#9C27B0'
        }
    ];

    return (
        <section id="brands" className="bg-white py-12 sm:py-12 lg:py-15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-orange-600 font-semibold text-sm sm:text-base tracking-wide uppercase block mb-2">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Brands
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Diverse food solutions tailored for every need.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 overflow-hidden border border-gray-100"
                        >
                            <div className="p-4 sm:p-5 relative">
                                {/* Icon with gradient background */}
                                <div
                                    className="inline-flex p-3 sm:p-4 rounded-xl mb-4 relative overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                                    style={{
                                        backgroundColor: `${brand.color}15`,
                                        color: brand.color,
                                        boxShadow: `0 6px 12px ${brand.color}20`
                                    }}
                                >
                                    <div
                                        className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full opacity-60 blur-xl"
                                        style={{
                                            backgroundColor: `${brand.color}08`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    />
                                    {React.cloneElement(brand.icon, { size: 28, className: "relative z-10" })}
                                </div>

                                {/* Brand name */}
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                                    {brand.name}
                                </h3>

                                {/* Brand type */}
                                <p
                                    className="text-xs font-semibold uppercase tracking-wide mb-3"
                                    style={{ color: brand.color }}
                                >
                                    {brand.type}
                                </p>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    {brand.desc}
                                </p>

                                {/* Tagline */}
                                {brand.tagline && (
                                    <blockquote
                                        className="text-xs italic text-gray-700 mb-3 font-medium pl-2 border-l-2"
                                        style={{ borderColor: brand.color }}
                                    >
                                        {brand.tagline}
                                    </blockquote>
                                )}

                                {/* Features */}
                                {brand.features.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {brand.features.map((feat, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300"
                                            >
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
