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

// Registration Schema
const registerSchema = Joi.object({
    firstName: FirstNameValidate(),
    lastName: LastNameValidate(),
    email: EmailValidate(),
    address: Joi.string()
        .min(3)
        .max(20)
        .required()
        .messages({
            "string.min": "Too Short!",
            "string.max": "Too Long!",
            "any.required": "Required"
        }),
});

// Login Schema
const loginSchema = Joi.object({
    email: EmailValidate(),
    password: Joi.string()
        .min(6)
        .max(50)
        .required()
        .messages({
            "string.min": "Too Short!",
            "string.max": "Too Long!",
            "any.required": "Required"
        }),
});

const quizSchema = Joi.object({
    category: Joi.string()
        .required()
        .messages({
            'string.base': '"Category" should be a string',
            'string.empty': '"Category" is required'
        }),

    question: Joi.string()
        .required()
        .messages({
            'string.base': '"Question" should be a string',
            'string.empty': '"Question" is required'
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

    answer: Joi.string()
        .required()
        .messages({
            'string.base': '"Answer" should be a string',
            'string.empty': '"Answer" is required'
        }),
    description: Joi.string().optional().messages({
        'string.base': '"Description" should be a string',
        'string.empty': "Description",
    }),
});

// News Schema
const newsSchema = Joi.object({
    heading: Joi.string().required().messages({
        "any.required": "Required"
    }),
    description: Joi.string().required().messages({
        "any.required": "Required"
    }),
});


// Export Schemas
export { registerSchema, loginSchema, quizSchema, newsSchema };
