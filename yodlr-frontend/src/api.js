import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

/** API class.
 * 
 * Static class tying together methods used to get/send to the RESTful API.
*/

class YodlrApi {
    /** Helper function that allows for individual requests to different API routes */

    static async request(endpoint, method = "get", data = {}) {
        try {
            const res = await axios({
                method,
                url: `${BASE_URL}/${endpoint}`,
                data,
                params: method === 'get' ? data : {}
            });
            return res.data;
        } catch(err) {
            throw err;
        }
    }

    // Individual API routes

    /** Signup new user
     * user: {email, firstName, lastName}
     * returns {id, email, firstName, lastName, state}
    */

    static async signUpUser(user) {
        try {
            return await this.request('users/', 'post', user);
        } catch(err) {
            throw err;
        }
    }
}

export default YodlrApi;