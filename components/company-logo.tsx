import React from "react";

const CompanyLogo = () => {
    const companies = [
        {
            name: "Layers",
            logo: <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7768 20.3183C14.599 17.25 17.7529 14.0961 20.8212 13.2739L39.9502 8.14749C43.0185 7.32522 44.8392 9.14597 44.0169 12.2142L38.8906 31.3432C38.0683 34.4115 34.9144 37.5654 31.8461 38.3877L12.7172 43.514C9.6489 44.3363 7.82815 42.5155 8.65042 39.4473L13.7768 20.3183Z" fill="#98A2B3" />
                <path d="M6.10882 12.6493C6.93108 9.58107 10.085 6.42717 13.1533 5.60491L32.2822 0.47854C35.3505 -0.343725 37.1713 1.47702 36.349 4.54529L31.2226 23.6743C30.4004 26.7425 27.2465 29.8964 24.1782 30.7187L5.0492 35.8451C1.98093 36.6673 0.160184 34.8466 0.982448 31.7783L6.10882 12.6493Z" fill="#667085" />
            </svg>
        },
        {
            name: "Sisyphus",
            logo: <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="19.2002" width="9.59998" height="9.59999" fill="#667085" />
                <rect x="29.3008" y="28.7998" width="9.6" height="9.59999" transform="rotate(180 29.3008 28.7998)" fill="#667085" />
                <path d="M10.0996 19.1996L19.6996 9.59961V19.1996L10.0996 28.7996V19.1996Z" fill="#D0D5DD" />
                <path d="M19.6992 28.8004L10.0992 38.4004L10.0992 28.8004L19.6992 19.2004L19.6992 28.8004Z" fill="#98A2B3" />
                <path d="M0.5 19.2L19.7 0V9.59999L10.1 19.2H0.5Z" fill="#667085" />
                <path d="M29.3008 28.8L10.1008 48L10.1008 38.4L19.7008 28.8L29.3008 28.8Z" fill="#667085" />
            </svg>
        },
        {
            name: "Circooles",
            logo: <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2151 31.4284C24.8939 31.4284 31.9294 24.3929 31.9294 15.7141C31.9294 14.7306 31.839 13.7681 31.6661 12.8345C30.7326 12.6617 29.7701 12.5713 28.7865 12.5713C20.1078 12.5713 13.0723 19.6068 13.0723 28.2856C13.0723 29.2692 13.1626 30.2317 13.3355 31.1652C14.269 31.3381 15.2315 31.4284 16.2151 31.4284Z" fill="#667085" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3347 31.1653C6.03118 29.8127 0.5 23.4095 0.5 15.7143C0.5 7.03553 7.53553 0 16.2143 0C23.9095 0 30.3128 5.53118 31.6653 12.8347C30.7318 12.6618 29.7693 12.5714 28.7857 12.5714C20.107 12.5714 13.0714 19.607 13.0714 28.2857C13.0714 29.2693 13.1618 30.2318 13.3347 31.1653Z" fill="#667085" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2136 31.4289C24.8924 31.4289 31.9279 24.3933 31.9279 15.7146C31.9279 14.731 31.8375 13.7685 31.6646 12.835C38.9681 14.1875 44.4993 20.5908 44.4993 28.286C44.4993 36.9648 37.4638 44.0003 28.785 44.0003C21.0899 44.0003 14.6866 38.4691 13.334 31.1656C14.2675 31.3385 15.23 31.4289 16.2136 31.4289Z" fill="#98A2B3" />
            </svg>
        },
        {
            name: "Catalog",
            logo: <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 0C10.3497 0 0.5 9.84974 0.5 22C0.5 34.1503 10.3497 44 22.5 44C33.401 44 42.4502 36.0716 44.1958 25.6667H44.0379C42.4098 31.9925 36.6674 36.6667 29.8333 36.6667C21.7332 36.6667 15.1667 30.1002 15.1667 22C15.1667 13.8998 21.7332 7.33333 29.8333 7.33333C36.6674 7.33333 42.4098 12.0075 44.0379 18.3333H44.1958C42.4502 7.92838 33.401 0 22.5 0Z" fill="#98A2B3" />
                <path d="M0.5 22C0.5 9.84974 10.3497 0 22.5 0C33.401 0 42.4502 7.92838 44.1958 18.3333H29.3713C27.7431 12.0075 22.0007 7.33333 15.1667 7.33333C7.06649 7.33333 0.5 13.8998 0.5 22Z" fill="#667085" />
                <path d="M0.5 22C0.5 34.1503 10.3497 44 22.5 44C33.401 44 42.4502 36.0716 44.1958 25.6667H29.3713C27.7431 31.9925 22.0007 36.6667 15.1667 36.6667C7.06649 36.6667 0.5 30.1002 0.5 22Z" fill="#667085" />
            </svg>
        },
        {
            name: "Quotient",
            logo: <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 34.4667C29.3851 34.4667 34.9667 28.8851 34.9667 22C34.9667 15.1149 29.3851 9.53333 22.5 9.53333C15.6148 9.53333 10.0333 15.1149 10.0333 22C10.0333 28.8851 15.6148 34.4667 22.5 34.4667ZM22.5 44C34.6503 44 44.5 34.1503 44.5 22C44.5 9.84974 34.6503 0 22.5 0C10.3497 0 0.5 9.84974 0.5 22C0.5 34.1503 10.3497 44 22.5 44Z" fill="#667085" />
                <path d="M22.752 22.4814C25.0431 20.1903 28.7577 20.1903 31.0488 22.4814L42.4567 33.8894C44.7478 36.1804 44.7478 39.895 42.4567 42.1861C40.1657 44.4772 36.4511 44.4772 34.16 42.1861L22.752 30.7781C20.461 28.487 20.461 24.7724 22.752 22.4814Z" fill="#98A2B3" />
                <path d="M25.9551 33.9816L33.2004 41.2269C36.6756 39.2887 39.5709 36.4357 41.5605 32.9936L34.3746 25.8076C33.1124 29.747 29.9441 32.8334 25.9551 33.9816Z" fill="#667085" />
            </svg>
        }
    ]
    return (
        <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 space-y-4 items-center justify-center px-10  lg:px-20 xl:px-40">
            {
                companies.map((company) => (
                    <p className="flex items-center justify-center text-text font-bold text-base" key={company.name}>{company.logo} <span className="ml-3">{company.name}</span></p>
                ))
            }
        </div>
    );
};

export default CompanyLogo;