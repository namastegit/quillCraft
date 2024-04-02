
interface ButtonTypes {
    label: string;
    onClick: any
}
export const Button= ({label,onClick}:ButtonTypes) => {
    return<div className="w-full pt-6">

<button onClick={onClick}type="button" className="text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-extrabold rounded-lg text-lg px-10 py-2.5  me-2 mb-2 w-full italic ">{label}</button>
    </div>
}