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

    /** Get all users 
     * gets list of all users in the DB
    */

    static async getUsers() {
        return await this.request('users/', 'get');
    }

    /** Get a user by id 
     * returns {id, email, firstName, lastName, state}
    */

    static async getUser(id) {
        return await this.request(`users/${id}`, 'get');
    }

    /** Updates an existing user
     * should not be able to change the id
     * returns {id, email, firstName, lastName, state}
    */

    static async updateUser(user) {
        return await this.request(`users/${user.id}`, 'put', user);
    }

    /** Deletes an existing user
     * returns {id, email, firstName, lastName, state}
    */

    static async deleteUser(id) {
        return await this.request(`users/${id}`, 'delete');
    }
}

export default YodlrApi;