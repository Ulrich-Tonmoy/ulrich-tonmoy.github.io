export default {
    name: "educations",
    title: "Educations",
    type: "document",
    fields: [
        {
            name: "year",
            title: "Year",
            type: "string",
        },
        {
            name: "educationInfo",
            title: "EducationInfo",
            type: "array",
            of: [
                {
                    name: "instituteInfo",
                    title: "Institute Info",
                    type: "document",
                    fields: [
                        { name: "degree", title: "Degree", type: "string" },
                        {
                            name: "instituteName",
                            title: "InstituteName",
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
