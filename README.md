# Up and running: Next.js, Hasura, and Relay

[Slides available here](https://drive.google.com/file/d/1ptRY0h9aiQvKUetTSxOzgF_nlFFs8NZO/view)

**Setting up Hasura with project metadata**

1. Create Hasura project
2. Go to Settings
3. Click "Import Metadata"
4. Import `hasura_metadata.json`

**Starting Next.js project**

1. Create `.env.local` at project root and add the following environment variables:
  * `NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:3000/api/graphql`
  * `HASURA_ADMIN_SECRET=PUT_YOUR_ADMIN_SECRET_HERE`
  * `HASURA_RELAY_ENDPOINT=https://your-hasura-app.hasura.app/v1beta1/relay`
2. Install dependencies
  * `yarn`
3. Run the development server
  * `yarn dev`
4. Go to [http://localhost:3000](http://localhost:3000)
