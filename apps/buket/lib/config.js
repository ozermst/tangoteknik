export const sanityConfig = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // projectId: '13xzcq8r',
  // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  dataset: 'production',
  // apiVersion: process.env.SANITY_API_VERSION,
  apiVersion: '2021-12-05',
  // see https://www.sanity.io/docs/api-versioning for how versioning works
  useCdn: false,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};
