# Simple Phone Directory

This is a simple website to be utilized like a phone directory. This was built using NextJS, Tailwind, and Typescript.

## Preview

Preview the example live on [Vercel](https://simple-phone-directory-fnvszlr3z-shadez95.vercel.app).

## How to use

Just edit the `directory.json` file located in the root directory of the project folder. You can make adjustments to the shape of your data and the data itself by editing the function `getStaticProps` inside `index.tsx`. Then ensure the shape of your data matches what is in  `directory.json`. You will have to edit the `Contacts` interface as well, which is located at `./components/FilteredList.tsx`.

## Things to Note
Currently, this example will search through the JSON data and check the `name` and `company` of each contact in the data set.
