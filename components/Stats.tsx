import { Card } from "@nextui-org/card";
import { JSX, SVGProps } from "react";

function Stats() {
    return (
        <section className="pb-12 px-10 md:px-40 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4  border-primary ">
            <Card className="p-6 bg-background border rounded-full shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full p-2 text-primary-foreground animate-pulse">
                        <MapPinIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">Midtown</div>
                        <p className="text-muted-foreground">Location</p>
                    </div>
                </div>
            </Card>
            <Card className="p-6 bg-background border rounded-full shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-red-800 text-white rounded-full p-2 text-error-foreground animate-pulse">
                        <ClockIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">10 minutes</div>
                        <p className="text-muted-foreground">drive from city center</p>
                    </div>
                </div>
            </Card>
            <Card className="p-6 bg-background border rounded-full shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-secondary rounded-full p-2 text-secondary-foreground animate-pulse">
                        <SofaIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">346 +</div>
                        <p className="text-muted-foreground">Luxury rooms</p>
                    </div>
                </div>
            </Card>
            <Card className="p-6 bg-background border rounded-full shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-500 text-white rounded-full p-2 text-muted-foreground animate-pulse">
                        <SwimmingPoolIcon fill="white" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">2 +</div>
                        <p className="text-muted-foreground">Swimming pools</p>
                    </div>
                </div>
            </Card>
            <Card className="p-6 bg-background border rounded-full shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-orange-700 text-white rounded-full p-2 text-error-foreground animate-pulse">
                        <PlaneIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">15 Km</div>
                        <p className="text-muted-foreground">from the international airport of  Monastir</p>
                    </div>
                </div>
            </Card>
            <Card className="p-6 bg-background border rounded-full shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-slate-400 text-white rounded-full p-2 text-error-foreground animate-pulse">
                        <PlaneIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">30 Km</div>
                        <p className="text-muted-foreground">from the international  airport of Enfida</p>
                    </div>
                </div>
            </Card>
            <Card className="p-6 bg-background border rounded-full shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full p-2 text-primary-foreground animate-pulse">
                        <TreePalmIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">200m</div>
                        <p className="text-muted-foreground">from the beach "Port El Kantaoui"</p>
                    </div>
                </div>
            </Card>


        </section>
    );
}

export default Stats;



function TreePalmIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
            <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
            <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
            <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
        </svg>
    )
}


function SwimmingPoolIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg 
            {...props}
            height="24"
            width="24"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 453.136 453.136" xmlSpace="preserve"
        >
            <g>
                <circle cx="314.663" cy="129.249" r="40.898" />
                <path d="M88.562,192.074c-7.87,7.538-8.137,20.031-0.597,27.901c7.403,7.727,19.935,8.23,27.901,0.597l49.288-47.223l0.001,0
		l73.238,16.398l-65.353,2.282c-50.385,48.276-43.325,41.516-44.332,42.462c10.512,3.491,20.149,9.371,28.223,17.391
		c0.059,0.059,0.121,0.113,0.18,0.172c2.397,2.397,5.597,3.717,9.011,3.717c3.413,0,6.613-1.32,9.01-3.717
		c8.141-8.141,17.889-14.092,28.526-17.603c7.294-2.408,15.002-3.678,22.912-3.678c12.172,0,23.882,2.962,34.305,8.543
		l23.094-18.578l59.875,9.581c4.631,0.741,9.491-0.18,13.631-2.785l78.421-49.366c9.223-5.806,11.993-17.99,6.188-27.213
		c-5.807-9.223-17.99-11.993-27.213-6.188l-72.13,45.406l-54.256-8.682l-30.806-38.294c-9.279-11.535-25.925-13.651-37.766-5.033
		l24.215,12.233c-0.001,0-79.512-18.945-79.513-18.945c-6.284-1.404-13.107,0.361-17.956,5.001
		c-0.003,0.002-0.005,0.005-0.008,0.007C139.598,143.214,95.642,185.296,88.562,192.074z"/>
                <path d="M86.055,283.874c5.24-5.24,12.207-8.125,19.618-8.125c7.411,0,14.377,2.886,19.617,8.125
		c10.906,10.906,25.407,16.913,40.831,16.913c15.424,0,29.925-6.006,40.83-16.913c5.24-5.24,12.207-8.125,19.618-8.125
		s14.377,2.886,19.618,8.125c22.513,22.514,59.146,22.515,81.662,0c5.24-5.24,12.207-8.125,19.617-8.125
		c7.41,0,14.377,2.885,19.617,8.125c22.514,22.515,59.147,22.515,81.661,0c5.858-5.858,5.858-15.355,0-21.213
		c-5.857-5.858-15.355-5.858-21.213,0c-5.24,5.24-12.207,8.125-19.618,8.125c-7.411,0-14.377-2.886-19.617-8.125
		c-10.906-10.906-25.407-16.913-40.831-16.913c-15.424,0-29.925,6.006-40.831,16.913c-5.24,5.24-12.207,8.125-19.618,8.125
		c-7.411,0-14.377-2.886-19.618-8.125c-22.514-22.515-59.147-22.515-81.662,0c-5.24,5.24-12.206,8.125-19.617,8.125
		c-7.41,0-14.377-2.885-19.617-8.125c-22.514-22.515-59.147-22.515-81.661,0c-5.24,5.24-12.207,8.125-19.618,8.125
		c-7.411,0-14.378-2.886-19.618-8.125c-5.857-5.858-15.356-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213
		C26.907,306.389,63.541,306.389,86.055,283.874z"/>
                <path d="M427.53,326.661c-5.24,5.24-12.207,8.125-19.618,8.125c-7.411,0-14.377-2.886-19.617-8.125
		c-10.906-10.906-25.407-16.913-40.831-16.913c-15.424,0-29.925,6.006-40.831,16.913c-5.24,5.24-12.207,8.125-19.618,8.125
		c-7.411,0-14.377-2.886-19.618-8.125c-22.514-22.515-59.147-22.515-81.662,0c-5.24,5.24-12.206,8.125-19.617,8.125
		c-7.41,0-14.377-2.885-19.617-8.125c-22.514-22.515-59.147-22.515-81.661,0c-5.24,5.24-12.207,8.125-19.618,8.125
		c-7.411,0-14.378-2.886-19.618-8.125c-5.857-5.858-15.356-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213
		c22.514,22.515,59.147,22.515,81.661,0c5.24-5.24,12.207-8.125,19.618-8.125c7.411,0,14.377,2.886,19.617,8.125
		c10.906,10.906,25.407,16.913,40.831,16.913c15.424,0,29.925-6.006,40.83-16.913c5.24-5.24,12.207-8.125,19.618-8.125
		s14.377,2.886,19.618,8.125c22.513,22.514,59.146,22.515,81.662,0c5.24-5.24,12.207-8.125,19.617-8.125
		c7.41,0,14.377,2.885,19.617,8.125c22.514,22.515,59.147,22.515,81.661,0c5.858-5.858,5.858-15.355,0-21.213
		C442.886,320.803,433.388,320.803,427.53,326.661z"/>
            </g>
        </svg>);
}


function PlaneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
    )
}

function ActivityIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
        </svg>
    );
}

function DollarSignIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}

function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function ShowerHeadIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m4 4 2.5 2.5" />
            <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
            <path d="M15 5 5 15" />
            <path d="M14 17v.01" />
            <path d="M10 16v.01" />
            <path d="M13 13v.01" />
            <path d="M16 10v.01" />
            <path d="M11 20v.01" />
            <path d="M17 14v.01" />
            <path d="M20 11v.01" />
        </svg>
    );
}

function SofaIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
            <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
            <path d="M4 18v2" />
            <path d="M20 18v2" />
            <path d="M12 4v9" />
        </svg>
    );
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
