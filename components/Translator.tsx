'use client'; 

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function Translator() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleChange = (event: { target: { value: any; }; }) => {
        const selectedLocale = event.target.value;
        
        router.push(`/${selectedLocale}`);
    };

    return (
        <div>
            <select id="language-select" onChange={handleChange} className='text-black p-2 border rounded-md dark:bg-black dark:text-white border-primary'>
                <option value="" disabled selected>languages</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
        </div>
    );
}


