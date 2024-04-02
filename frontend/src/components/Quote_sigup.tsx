export const QuoteCom = ({ type }: { type: "Sign up" | "Sign in" }) => {
    return <div className=" bg-slate-200 h-screen flex justify-center flex-col italic">
        <div className="flex justify-center">
        <div className="max-w-lg  
        ">
            <div className="text-3xl  font-bold ">{type === "Sign in" ? "Blogging is not just about publishing content, but sharing your expertise, wisdom, and passion with the world." : "Blogging is a tool that allows us to share our thoughts with the world, and in doing so, create meaningful connections with others."}  </div>
            <div className="max-w-md  text-xl font-semibold text-left mt-4">{type === "Sign in" ? "Darren Rowse" : "Brian Clark"}</div>
          
        </div>
      
</div> 
    </div>
}