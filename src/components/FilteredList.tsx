import React, { Fragment } from 'react';
import { filterContacts } from '../pages/api/search';

interface Props {
  searchText: string;
}

function FilteredList({ searchText }: Props) {
  const contacts = filterContacts(searchText);

  return (
    <Fragment>
      {contacts.map((contact) => (
        <div className="box-content p-4 border-2 rounded-xl text-left" key={contact._id}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.phone}</p>
          <p>Department: {contact.department}</p>
          <p>Email: {contact.email}</p>
        </div>
      ))}
    </Fragment>
  );
}

export default FilteredList;