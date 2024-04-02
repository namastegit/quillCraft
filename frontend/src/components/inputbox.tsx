import { ChangeEvent } from "react";

interface inputTypes {
    label: string;
    placeholder: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) =>void;
    type?: string;
}

export const InputBox = ({label, placeholder, onChange,type}:inputTypes) => {
    return <div className="pt-2 italic ">
            <label className="block mb-2 text-md font-semibold text-gray-900">{label}</label>
            <input onChange={onChange} type={type ||"text" }id="first_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 italic " placeholder={placeholder} required />
        </div>

    
}