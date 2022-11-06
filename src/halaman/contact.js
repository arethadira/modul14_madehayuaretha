import { useState } from "react";

function Contact() {
    const [ Contact, setContact ] = useState ({
        email: "arethaadira01@gmail.com",
        line: "arethaadira",
        IG: "@arethadira",
    })
        return (
            <>
                <div align="center">
                    <h1>Contact Me!</h1>;
                    <p>email:{Contact.email}</p>
                    <p>line:{Contact.line}</p>
                    <p>IG:{Contact.IG}</p>
                </div>
            </>
        );
    }

export default Contact;