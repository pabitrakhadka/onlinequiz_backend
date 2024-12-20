import Joi from "joi";


// First Name Validation Schema
const FirstNameValidate = () =>
    Joi.string()
        .min(3)
        .max(20)
        .regex(/^[A-Za-z]+$/)
        .messages({
            "string.min": "Too Short!",
            "string.max": "Too Long!",
            "string.pattern.base": "Must be only alphabetic characters",
            "any.required": "Required"
        })
        .required();

// Last Name Validation Schema
const LastNameValidate = () =>
    Joi.string()
        .min(3)
        .max(20)
        .regex(/^[A-Za-z]+$/)
        .messages({
            "string.min": "Too Short!",
            "string.max": "Too Long!",
            "string.pattern.base": "Must be only alphabetic characters",
            "any.required": "Required"
        })
        .required();

// Email Validation Schema
const EmailValidate = () =>
    Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            "string.email": "Invalid email",
            "any.required": "Required"
        });

const passwordValidate = () => {
    return Joi.string().min(4).max(50).messages({
        "string.min": "Too Short!",
        "string.max": "Too Long!",
        "any.required": "Required"
    })
}
//Category Validate
const categoryValidate = () =>
    Joi.number()
        .required()
        .messages({
            'number.base': '"Category ID" should be a number',  // Custom message for non-number values
            'number.empty': '"Category ID" is required',         // Custom message for empty value
            'any.required': '"Category ID" is required'          // Custom message for missing value
        })
const questionValidate = () => Joi.string()
    .required()
    .messages({
        'string.base': '"Question" should be a string',
        'string.empty': '"Question" is required'
    });


// Registration Schema
const registerSchema = Joi.object({
    firstName: FirstNameValidate(),
    lastName: LastNameValidate(),
    email: EmailValidate(),
    address: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            "string.min": "Too Short!",
            "string.max": "Too Long!",
            "any.required": "Required"
        }),
    password: Joi.string().min(4).max(50).messages({
        "string.min": "Too Short!",
        "string.max": "Too Long!",
        "any.required": "Required"
    }),
    confirm_password: Joi.string().min(4).max(50).messages({
        "string.min": "Too Short!",
        "string.max": "Too Long!",
        "any.required": "Required"
    })
});

// Login Schema
const loginSchema = Joi.object({
    email: EmailValidate(),
    password: passwordValidate()
});

const idValidate = () => Joi.number()
    .integer() // Ensures the value is an integer
    .positive() // Ensures the value is positive
    .required() // Ensures the field is mandatory
    .messages({
        'number.base': '"NumberField" should be a number.',
        'number.positive': '"NumberField" must be a positive number.',
        'number.integer': '"NumberField" must be an integer.',
        'any.required': '"NumberField" is required.',
    });


const quizSchema = Joi.object({
    question: Joi.string()
        .required()
        .messages({
            'string.base': '"Question" should be a string',
            'string.empty': '"Question" is required'
        }),
    answer: Joi.string()
        .required()
        .messages({
            'string.base': '"Answer" should be a string',
            'string.empty': '"Answer" is required'
        }),
    categoryId: Joi.number()
        .required()
        .messages({
            'number.base': '"CategoryId" should be a number',
            'number.empty': '"CategoryId" is required',
            'any.required': '"CategoryId" is required'
        }),
    options: Joi.array()
        .items(Joi.string().required())
        .length(4)
        .required()
        .messages({
            'array.base': '"Options" should be an array of strings',
            'array.length': '"Options" should contain exactly 4 items',
            'array.includesRequiredUnknowns': '"Options" should only contain strings'
        }),
    description: Joi.string()
        .allow(null, '')
        .optional()
        .messages({
            'string.base': '"Description" should be a string',
            'string.empty': '"Description" cannot be empty',
        }),
});




const newsSchema = Joi.object({
    image: Joi.string()
        .uri()
        .required()
        .messages({
            "string.uri": "Image must be a valid URL",
            "any.required": "Image is required",
        }),
    heading: Joi.string()
        .required()
        .messages({
            "any.required": "Heading is required",
        }),
    description: Joi.string()
        .required()
        .messages({
            "any.required": "Description is required",
        }),
});


//Subjective Question Schema
const subjectiveQuestionSchema = Joi.object({
    question: questionValidate(),
    categoryId: categoryValidate(),
    category: categoryValidate()
});

// Validate pdf files
const pdfFileSchema = Joi.object({
    file: Joi.object({
        originalname: Joi.string().required().regex(/\.pdf$/i).messages({
            "string.pattern.base": "File must be a PDF.",
        }),
        mimetype: Joi.string()
            .valid("application/pdf")
            .required()
            .messages({ "any.only": "File must be a valid PDF format." }),
        size: Joi.number()
            .max(5 * 1024 * 1024) // 5 MB limit
            .required()
            .messages({
                "number.max": "File size must be less than or equal to 5 MB.",
            }),
    }).required().messages({
        "object.base": "File data is required.",
    }),
    category: Joi.string()
        .required()
        .messages({
            'string.base': '"Category" should be a string',
            'string.empty': '"Category" is required'
        }),
});

const stringValidate = () => {
    return Joi.string().min(5).required().messages({
        'string.base': '"Message" should be a string',
        'string.empty': '"Message" is required'
    });
};
//Contact Data Schema
const contactSchema = Joi.object({
    firstName: FirstNameValidate(),
    lastName: LastNameValidate(),
    email: EmailValidate(),
    message: stringValidate(),
})


// Define the category validation schema
const CategorySchema = Joi.object({
    categoryName: Joi.string().min(4).required().messages({
        'string.base': '"Message" should be a string',
        'string.empty': '"Message" is required',
        'string.min': '"Message" should have a minimum length of 4 characters',
    })
});

// Define a schema for validating single or multiple categories
const CategoriesSchema = Joi.alternatives().try(
    // Single category object
    CategorySchema,

    // Array of category objects
    Joi.array().items(CategorySchema).min(1)  // At least one category required in the array
);

const userDetailsScoreSchema = Joi.object({
    userId: idValidate(),
    quizId: idValidate(),
    score: Joi.number()
        .min(0) // Allow 0 or any positive number, including floats
        .required()
        .messages({
            'number.base': 'Score must be a number.',
            'number.min': 'Score cannot be negative.',
        }),
    attempt: Joi.number()
        .integer()
        .min(0) // Allow 0 as a valid attempt
        .required()
        .messages({
            'number.base': 'Attempt must be a number.',
            'number.min': 'Attempt cannot be negative.',
        }),

    timeTaken: Joi.number()
        .integer()
        .min(0) // Allow 0 seconds for time taken
        .required()
        .messages({
            'number.base': 'Time Taken must be a number.',
            'number.min': 'Time Taken cannot be negative.',
        }),

    correctAnswer: Joi.number()
        .integer()
        .min(0) // Allow 0 correct answers
        .required()
        .messages({
            'number.base': 'Correct Answer count must be a number.',
            'number.min': 'Correct Answer count cannot be negative.',
        }),

    wrongAnswer: Joi.number()
        .integer()
        .min(0) // Allow 0 wrong answers
        .required()
        .messages({
            'number.base': 'Wrong Answer count must be a number.',
            'number.min': 'Wrong Answer count cannot be negative.',
        }),

});
//Slider Image Validator

//Slug validate
const slugSchema = Joi.object({
    title: stringValidate(),
    description: stringValidate()
});
//Export Schemas
export { registerSchema, loginSchema, quizSchema, newsSchema, subjectiveQuestionSchema, pdfFileSchema, contactSchema, CategorySchema, CategoriesSchema, userDetailsScoreSchema, slugSchema };
