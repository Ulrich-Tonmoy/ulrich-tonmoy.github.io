export default {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "sortId",
            title: "SortId",
            type: "number",
        },
        {
            name: "icon",
            title: "Icon",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "tag",
            title: "Tag",
            type: "string",
        },
    ],
};
