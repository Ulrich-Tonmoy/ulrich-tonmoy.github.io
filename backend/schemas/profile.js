export default {
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "logo",
            title: "Logo",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "skillImages",
            title: "Skill Images",
            type: "array",
            of: [
                {
                    name: "skillImage",
                    title: "Skill Image",
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
                {
                    name: "skill",
                    title: "Skill",
                    type: "string",
                },
            ],
        },
        { title: "CV", name: "cv", type: "file" },
    ],
};
