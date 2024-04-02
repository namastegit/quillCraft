import { QuoteCom } from "../components/Quote_sigup";
import { Authsignup } from "../components/authsignup";

export function Signup() {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center">
                <Authsignup type="Sign up"/>
            </div>
            <div className="invisible lg:visible">  <QuoteCom type="Sign up"/></div>
      
        </div>
    
      </div>
}