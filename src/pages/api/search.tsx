import type { NextApiRequest, NextApiResponse } from 'next';
import { search } from 'ss-search';

import { Contact } from '@/types';

import directory from '../../../directory.json';

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

export function filterContacts(searchText: string): Contact[] {
  const searchKeys = ['name', 'email', 'phone', 'company'];
  const results = search(directory, searchKeys, searchText);
  return results as Contact[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { text } = req.query;
    let searchText = '';
    if (typeof text !== 'string') {
      const arrText = text as string[];
      searchText = arrText.join(' ');
    } else {
      searchText = text as string;
    }
    const results = filterContacts(searchText);
    res.status(200).json(results);
  }
};