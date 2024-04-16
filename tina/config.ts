import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "upcoming",
        label: "Projects",
        path: "content/projects",
        fields: [
          {
            label: "Projects Collection",
            name: "projectsCollection",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "Projects",
            name: "projects",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.address};
              }
            },
            fields: [ 
              {
                label: "Project Address",
                name: "address",
                type: "string",
                required: true,
              },
              {
                label: "Project Description",
                name: "projectDescription",
                type: "rich-text",
                isBody: true,
              },
              {
                label: "Project Photos",
                name: "projectPhotos",
                type: "image",
                list: true,
              },
            ],
          },

        ],
      },
    ],
  },
});
