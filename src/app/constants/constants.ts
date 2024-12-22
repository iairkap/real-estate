import {
  VILLA,
  BUILDING,
  HOUSE,
  VALUATION,
  STRATEGIC,
  NEGOTATION,
  SUCCESS,
  TENANT,
  LEGAL,
  FINANCE,
  MAINTENANCE,
} from "@/lib/image";
import { faker } from "@faker-js/faker";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Given a type of property (Villa, Apartment, House), returns the associated image.
 * @param type - The type of property.
 * @returns The image associated with the property type.
 */
/******  cbe83540-0022-4a2f-99a0-df923c3cb9d0  *******/ export const iconByType =
  (type: string) => {
    console.log();
    switch (type) {
      case "Villa":
        return VILLA;
      case "Apartment":
        return BUILDING;
      case "House":
        return HOUSE;
      default:
        return "";
    }
  };

export const FAQ = [
  {
    id: 1,
    question: "How do I search for properties on Estatein?",
    sub: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 2,
    question: "What Documents do I need to sell my property through Estatein?",
    sub: "Find out about the necessary documentation for listing your property with us.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 3,
    question: "How can I contact an Estatein agent?",
    sub: "Discover the different ways you can get in touch with our experienced agents.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 4,
    question: "What is the process of selling a property through Estatein?",
    sub: "Learn about the steps involved in selling your property with us.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 5,
    question:
      "What are the costs associated with buying a property through Estatein?",
    sub: "Understand the fees and expenses involved in purchasing a property with us.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 6,
    question: "How does Estatein ensure the security of transactions?",
    sub: "Learn about the measures we take to protect your personal and financial information.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 7,
    question: "Can I get a property valuation through Estatein?",
    sub: "Find out how our valuation services can help you determine the market value of your property.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 8,
    question: "What financing options are available for buying properties?",
    sub: "Explore the different mortgage and financing solutions offered by Estatein.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 9,
    question: "Does Estatein handle rental properties?",
    sub: "Learn more about our services for landlords and tenants.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
  {
    id: 10,
    question: "How can I schedule a property viewing with Estatein?",
    sub: "Find out how to book a visit to see your desired property in person.",
    answer: faker.lorem.lines(12), // Genera una respuesta aleatoria de ejemplo
  },
];

export const formInputsProperties = [
  {
    id: 1,
    type: "text",
    name: "First Name",
    placeholder: "Enter First Name",
    required: true,
    gridsize: 1,
  },
  {
    id: 2,
    type: "text",
    name: "Last Name",
    placeholder: "Enter Last Name",
    required: true,
    gridsize: 1,
  },
  {
    id: 3,
    type: "email",
    name: "Email",
    placeholder: "Enter Email",
    required: true,
    gridsize: 1,
  },
  {
    id: 4,
    type: "text",
    name: "Phone",
    placeholder: "Enter Phone Number",
    required: true,
    gridsize: 1,
  },
  {
    id: 5,
    type: "select",
    name: "Prefered Location",
    placeholder: "Select Location",
    required: true,
    options: [
      { value: "1", label: "Location 1" },
      { value: "2", label: "Location 2" },
      { value: "3", label: "Location 3" },
    ],
    gridsize: 1,
  },
  {
    id: 6,
    type: "select",
    name: "Property Type",
    placeholder: "Select Property Type",
    required: true,
    options: [
      { value: "1", label: "Villa" },
      { value: "2", label: "House" },
      { value: "3", label: "Apartment" },
      { value: "4", label: "Office" },
      { value: "5", label: "Land" },
    ],
    gridsize: 1,
  },

  {
    id: 7,
    type: "select",
    name: "No. of Bedrooms",
    placeholder: "Select No. of Bedrooms",
    required: true,
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5+" },
    ],
    gridsize: 1,
  },

  {
    id: 8,
    type: "select",
    name: "No. of Bathrooms",
    placeholder: "Select No. of Bathrooms",
    required: true,
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5+" },
    ],
    gridsize: 1,
  },
  {
    id: 9,
    name: "Budget",
    type: "selext",
    placeholder: "Select Budget",
    options: [
      { value: "1", label: "Less than $100,000" },
      { value: "2", label: "Between $100,000 and $200,000" },
      { value: "3", label: "Between $200,000 and $300,000" },
      { value: "4", label: "Between $300,000 and $400,000" },
      { value: "5", label: "More than $400,000" },
    ],
    required: true,
    gridsize: 2,
  },
  {
    id: 10,
    name: "Preferred Contact Method",
    type: "checkbox",
    options: [
      { value: "1", label: "By Email" },
      { value: "2", label: "By Phone" },
    ],
    required: true,
    gridsize: 2,
  },

  {
    id: 11,
    type: "textarea",
    name: "Message",
    placeholder: "Enter Message",
    required: true,
    gridsize: 4,
  },
];

export const gridPropertyValue = [
  {
    id: 1,
    title: "Valuation Mastery",
    span: "Discover the true worth of your property with our expert valuation services.",
    gridColumnSize: 1,
    icon: VALUATION,
  },
  {
    id: 2,
    title: "Strategic Marketing",
    span: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    gridColumnSize: 1,
    icon: STRATEGIC,
  },
  {
    id: 3,
    title: "Negotiation Wizardry",
    span: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    gridColumnSize: 1,
    icon: NEGOTATION,
  },

  {
    id: 4,
    title: "Closing Success",
    span: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    gridColumnSize: 1,
    icon: SUCCESS,
  },
  {
    id: 5,
    title: "Tenant Harmony",
    span: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    icon: TENANT,
  },
  {
    id: 6,
    title: "Maintenance Ease",
    span: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    icon: MAINTENANCE,
  },
  {
    id: 7,
    title: "Financial Peace of Mind",
    span: "Managing property finances can be complex. Our financial experts take care of rent collection",
    icon: FINANCE,
  },
  {
    id: 8,
    title: "Legal Guardian",
    span: "Stay compliant with property laws and regulations effortlessly.",
    icon: LEGAL,
  },
];
