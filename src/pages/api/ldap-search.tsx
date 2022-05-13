import type { NextApiRequest, NextApiResponse } from 'next';

// const attributes = [
//     'cn', 'dn', 'sn', 'givenName', 'displayName', 'mail', 'department',
//     'description', 'userPrincipalName', 'SAMaccountName', 'ou',
//     'mailNickName', 'telephoneNumber', 'memberOf'
// ];

// ldap.search(`(&(ObjectClass=user)(|(cn=*${}*)(description=*${}*)(department=*${}*)))`,
//     attributes)
//     .then((users) => {
//         console.log(users);
//         process.exit(0);
//     }).catch((err) => {
//         console.log(err);
//         process.exit(1);
//     });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

};