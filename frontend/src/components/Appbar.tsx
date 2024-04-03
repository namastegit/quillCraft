import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4 italic">
        <Link to={'/blog/bulk'} className="flex flex-col text-3xl font-extrabold justify-center cursor-pointer">
                QuillCraft
        </Link>
        <div>
            <Link to={`/blog`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 italic ">Add New</button>
            </Link>

            <Avatar size={"big"} name="U" />
        </div>
    </div>
}