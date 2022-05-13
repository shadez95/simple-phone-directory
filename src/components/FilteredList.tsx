import React, { Fragment } from 'react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}

interface Props {
  directory: Contact[];
  searchText: string;
}

function FilteredList({ directory, searchText }: Props) {
  const filtered = directory.filter((contact: Contact) => {
    return (contact.name.toUpperCase().includes(searchText.toUpperCase())) ||
      (contact.company.toUpperCase().includes(searchText.toUpperCase()));
  });

  return (
    <Fragment>
      {filtered.map((contact) => (
        <div className="box-content p-4 border-2 rounded-xl text-left" key={contact._id}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.phone}</p>
          <p>Company: {contact.company}</p>
          <p>Email: {contact.email}</p>
        </div>
      ))}
    </Fragment>
  );
}

export default FilteredList;