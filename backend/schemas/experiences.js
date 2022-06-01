export default {
    name: "experiences",
    title: "Experiences",
    type: "document",
    fields: [
        {
            name: "year",
            title: "Year",
            type: "string",
        },
        {
            name: "works",
            title: "Works",
            type: "array",
            of: [
                {
                    name: "workExperience",
                    title: "Work Experience",
                    type: "document",
                    fields: [
                        { name: "name", title: "name", type: "string" },
                        {
                            name: "company",
                            title: "Company",
                            type: "string",
                        },
                        {
                            name: "desc",
                            title: "Desc",
                            type: "string",
                        },
                    ],
                },
            ],
        },
    ],
};
