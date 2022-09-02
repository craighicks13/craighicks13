import fetch from "node-fetch";
const SibApiV3Sdk = require('sib-api-v3-sdk');

export default async function handler(req, res):Promise<any> {
    const { body, method } = req;
    
    // Extract the email and captcha code from the request body
    const { email, captcha } = body;

    if (method === "POST") {
        // If email or captcha are missing return an error
        if (!email || !captcha) {
        return res.status(422).json({
            message: "Unproccesable request, please provide the required fields",
        });
        }
        
        try {
        // Ping the google recaptcha verify API to verify the captcha code you received
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
            {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            },
            method: "POST",
            }
        );
        const captchaValidation = (await response.json()) as any;
        /**
         * The structure of response from the veirfy API is
         * {
         *  "success": true|false,
         *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
         *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
         *  "error-codes": [...]        // optional
             }
            */

        if (captchaValidation.success) {

            let defaultClient = SibApiV3Sdk.ApiClient.instance;
            let apiKey = defaultClient.authentications['api-key'];
            apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY;

            let apiInstance = new SibApiV3Sdk.ContactsApi();

            let createContact = new SibApiV3Sdk.CreateContact();

            createContact.email = email;
            createContact.listIds = [2, 5]

            apiInstance.createContact(createContact).then(function(data) {
                console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            }, function(error) {
                console.error(error);
            });
            
            // Return 200 if everything is successful
            return res.status(200).send("OK");
        }

        return res.status(422).json({
            message: "Unproccesable request, Invalid captcha code",
        });
        } catch (error) {
            console.log(error);
            return res.status(422).json({ message: "Something went wrong" });
        }
    }
    // Return 404 if someone pings the API with a method other than
    // POST
    return res.status(404).send("Not found");
}