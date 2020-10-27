/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set();
    
    for (let email of emails) {
        let [username, domain] = email.split("@");
        username = username.replace(/(\.)|(\+.*)/g, "")
        let regular = username + "@" + domain;
        set.add(regular);
    }
    return set.size;
};