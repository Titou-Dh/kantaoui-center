
import { Select, SelectItem } from "@nextui-org/select";

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: any;
    }
}



export default function GoogleTranslate() {

    const handleChange = (s: string): void => {
        window.googleTranslateElementInit = (): void => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: s,
                    includedLanguages: "en,es,fr,de",
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                }
            );
        };
        // console.log(s);
    }

    return (
        <Select
            placeholder="Translate"
            className="w-20"
            size="sm"
        >
            <SelectItem key="1" value="en" onClick={() => handleChange('en')}>Eng</SelectItem>
            <SelectItem key="2" value="fr" onClick={() => handleChange('fr')}>Fr</SelectItem>
            <SelectItem key="3" value="ar" onClick={() => handleChange('ar')}>Ar</SelectItem>
            <SelectItem key="4" value="de" onClick={() => handleChange('de')}>De</SelectItem>
        </Select>
    );
}