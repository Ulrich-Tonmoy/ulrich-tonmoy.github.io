export default {
    name: "experiences",
    title: "Experiences",
    type: "document",
    fields: [
        {
            name: "company",
            title: "Company",
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
                            name: "year",
                            title: "Year",
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
