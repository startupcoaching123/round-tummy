import React from "react";

// Brand logos
import veerji from "../assets/veerji.png";
import hotspot from "../assets/hotspot.png";
import rtLogo from "../assets/logo.png";
import fud from "../assets/fud.png";

const Brands = () => {
    const brands = [
        {
            id: 1,
            name: "HOTSPOT",
            type: "Corporate & Institute Cafeterias",
            desc: "A fast and efficient cafeteria model perfect for offices and campuses. We manage the entire setup, daily operations, and food service.",
            features: ["Quick food", "Fresh meals", "Friendly pricing"],
            logo: hotspot,
            color: "#FF9800",
        },
        {
            id: 2,
            name: "Fu.D",
            type: "Café & Delivery",
            desc: "A cosy café experience for working professionals offering all-day breakfasts and fresh comfort food.",
            features: ["10-minute service", "Available on Zomato/Swiggy"],
            logo: fud,
            color: "#E91E63",
        },
        {
            id: 3,
            name: "VDP (Veerji De Paranthe)",
            type: "Cloud Kitchen",
            desc: "A delivery brand loved for its stuffed, flavour-packed North Indian parathas.",
            tagline: "“Mann bharke fillings, jee bharke pyaar.”",
            features: [],
            logo: veerji,
            color: "#F44336",
        },
        {
            id: 4,
            name: "RT Catering",
            type: "Gourmet Corporate Catering",
            desc: "Perfect for employee meals, office events, Friday specials, and team celebrations.",
            features: ["Indian", "Continental", "Oriental"],
            logo: rtLogo,
            color: "#9C27B0",
        },
    ];

    return (
        <section id="brands" className="bg-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-orange-600 font-semibold text-sm uppercase block mb-2">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Brands
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Diverse food solutions tailored for every need.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="p-6">
                                {/* Logo */}
                                <div
                                    className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-105"
                                    style={{
                                        backgroundColor: `${brand.color}15`,
                                        boxShadow: `0 10px 25px ${brand.color}25`,
                                    }}
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                    />

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
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {brand.desc}
                                </p>

                                {/* Tagline */}
                                {brand.tagline && (
                                    <blockquote
                                        className="text-xs italic text-gray-700 mb-4 font-medium pl-3 border-l-2"
                                        style={{ borderColor: brand.color }}
                                    >
                                        {brand.tagline}
                                    </blockquote>
                                )}

                                {/* Features */}
                                {brand.features.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {brand.features.map((feat, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200 shadow-sm"
                                            >
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
