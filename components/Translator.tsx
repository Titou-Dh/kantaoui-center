'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Translator() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedLocale, setSelectedLocale] = useState(searchParams.get('locale') || 'en'); // Default value

    const pathname = usePathname();

    const pathParts = pathname.split('/');


    useEffect(() => {
        // Get the current locale from the router's locale
        const currentLocale = pathParts[1] || 'en';
        setSelectedLocale(currentLocale);
    }, [searchParams]);

    const handleChange = (event: { target: { value: any; }; }) => {
        const newLocale = event.target.value;
        setSelectedLocale(newLocale); // Update state
        router.push(`/${newLocale}/${pathParts.slice(2).join('/')}`); // Update the URL
    };



    return (
        <div>
            <select id="language-select" onChange={handleChange} value={selectedLocale} className='text-black p-2 border rounded-md dark:bg-black dark:text-white border-primary'>
                <option value="" disabled>languages</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
        </div>
    );
}

export default Translator;

