
import { Select, SelectItem } from "@nextui-org/select";

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: any;
    }
}



export default function GoogleTranslate() {

    const handleChange = (lang) => {
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: lang
                }
            );
        };
    }

    return (
        <Select
            placeholder="Translate"
            className="w-20"
            size="sm"
            defaultValue="en"
        >
            <SelectItem key="1" value="en" onClick={(e) => handleChange(e.target.value)}>Eng</SelectItem>
            <SelectItem key="2" value="fr" onClick={(e) => handleChange(e.target.value)}>Fr</SelectItem>
            <SelectItem key="3" value="ar" onClick={(e) => handleChange(e.target.value)}>Ar</SelectItem>
            <SelectItem key="4" value="de" onClick={(e) => handleChange(e.target.value)}>De</SelectItem>
        </Select>
    );
}