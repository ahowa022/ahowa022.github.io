import React, { Component } from "react";



class ContactInfo extends Component{

    state = {email: "", subject: "", message: "", disabled:false, emailSent:null}

    render(){
        return (
            <main className="relative">
                <div className="pt-10 pl-20 container mx-auto relative">
                    <section className="bg-blue-800 mx-auto w-7/12 rounded-lg shadow-xl p-10">
                    <h1 className="text-white flex"> Work email: assaad.h@hotmail.com </h1>
                    <h1 className="text-white flex"> School email: ahowa022@uottawa.ca </h1>
                    <h1 className="text-white flex"> Phone Number: 613-859-1635 </h1>
                    </section>
                </div>
                
            </main>
        );
    }
}
    

export default ContactInfo;