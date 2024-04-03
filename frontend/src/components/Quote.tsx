
export const Quote = ({ type }: { type: "signin" | "signup" }) => {
    return <div className="bg-slate-200 h-screen flex justify-center flex-col ">
        { }
        <div className="flex justify-center">

            <div className="max-w-lg">
                {type === "signin" ? <div className=" text-9xl text-right mr-10 font-extrabold">
                    C R U D
                </div> : null}
                {type === "signin" ? <div className="max-w-md text-7xl font-semibold text-right mt-4 ml-20">
                    Blogs...
                </div> :<div className="text-8xl font-extrabold ">
                    QuillCraft
                </div>}
              
                
            </div>
        </div>

    </div>
}