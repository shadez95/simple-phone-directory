import { useState } from 'react';
import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import directory from '../../directory.json';
import FilteredList from '@/components/FilteredList';

function Home({ directory }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
  
  return (
    <div className="items-center justify-center py-2">
      <Head>
        <title>Simple Phone Directory</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Simple Phone Directory
        </h1>

        <p className="mt-3 text-2xl">
          <input
            className="border border-slate-300 py-2 px-2 max-w-sm mx-auto rounded-xl shadow-lg"
            type="search"
            placeholder="search for something"
            value={searchValue}
            onChange={handleChange}
          />
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {searchValue === '' ? (directory.map((contact) => (
              <div className="box-content p-4 border-2 rounded-xl text-left" key={contact._id}>
                <p>Name: {contact.name}</p>
                <p>Number: {contact.phone}</p>
                <p>Department: {contact.department}</p>
                <p>Email: {contact.email}</p>
              </div>
            ))) : (
              <FilteredList searchText={searchValue}/>
            )
          }
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      directory,
    },
  }
}

export default Home
