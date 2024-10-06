'use client'; 

import { useRouter, useSearchParams } from 'next/navigation';

function Translator() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (event: { target: { value: any; }; }) => {
        const selectedLocale = event.target.value;
        
        router.push(`/${selectedLocale}`);
    };

    return (
        <div>
            <select id="language-select" onChange={handleChange} defaultValue={searchParams.get('locale') || 'en'} className='text-black p-2 border rounded-md dark:bg-black dark:text-white border-primary'>
                <option value="" disabled selected>languages</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
        </div>
    );
}

export default Translator;

