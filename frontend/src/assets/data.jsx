import fiction from "../assets/categories/fiction.png";
import children from "../assets/categories/children.png";
import health from "../assets/categories/health.png";
import business from "../assets/categories/business.png";
import academic from "../assets/categories/academic.png";
import religious from "../assets/categories/religious.png";

import book_1 from "./book_1.png";
import book_2 from "./book_2.png";
import book_3 from "./book_3.png";
import book_4 from "./book_4.png";
import book_5 from "./book_5.png";
import book_6 from "./book_6.png";
import book_7 from "./book_7.png";
import book_8 from "./book_8.png";
import book_9 from "./book_9.png";
import book_10 from "./book_10.png";
import book_11 from "./book_11.png";
import book_12 from "./book_12.png";
import book_13 from "./book_13.png";
import book_14 from "./book_14.png";
import book_15 from "./book_15.png";
import book_16 from "./book_16.png";
import book_17 from "./book_17.png";
import book_18 from "./book_18.png";
import book_19 from "./book_19.png";
import book_20 from "./book_20.png";
import book_21 from "./book_21.png";
import book_22 from "./book_22.png";
import book_23 from "./book_23.png";
import book_24 from "./book_24.png";
import book_25 from "./book_25.png";
import book_26 from "./book_26.png";
import book_27 from "./book_27.png";
import book_28 from "./book_28.png";
import book_29 from "./book_29.png";
import book_30 from "./book_30.png";
import book_31 from "./book_31.png";
import book_32 from "./book_32.png";
import book_33 from "./book_33.png";
import book_34 from "./book_34.png";
import book_35 from "./book_35.png";
import book_36 from "./book_36.png";

export const categories = [
  {
    name: "Fiction",
    image: fiction,
  },
  {
    name: "Children",
    image: children,
  },
  {
    name: "Health",
    image: health,
  },
  {
    name: "Academic",
    image: academic,
  },
  {
    name: "Business",
    image: business,
  },
  {
    name: "Religious",
    image: religious,
  },
];

// icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

export const books = [
  // Fiction
  {
    _id: "1",
    name: "The Great Escape",
    image: book_1,
    price: 15,
    description: "Dive into a thrilling tale of adventure and courage.",
    category: "Fiction",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "2",
    name: "Shadows of the Past",
    image: book_2,
    price: 20,
    description: "Unravel secrets hidden deep within a mysterious forest.",
    category: "Fiction",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "3",
    name: "Eternal Love",
    image: book_3,
    price: 10,
    description: "A heartwarming romance that transcends time and space.",
    category: "Fiction",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "4",
    name: "The Time Traveler's Quest",
    image: book_4,
    price: 25,
    description: "Embark on a journey through time to save humanity.",
    category: "Fiction",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "5",
    name: "Mystic Tales",
    image: book_5,
    price: 15,
    description: "A collection of enchanting stories full of wonder.",
    category: "Fiction",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "6",
    name: "Into the Unknown",
    image: book_6,
    price: 18,
    description: "A gripping saga of survival in uncharted lands.",
    category: "Fiction",
    date: 1716634345448,
    popular: true,
  },

  // Children
  {
    _id: "7",
    name: "Adventures in Toyland",
    image: book_7,
    price: 12,
    description: "Follow a group of toys on their magical adventures.",
    category: "Children",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "8",
    name: "The Talking Animals",
    image: book_8,
    price: 14,
    description: "A delightful story about animals who share their wisdom.",
    category: "Children",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "9",
    name: "Princess of the Enchanted Forest",
    image: book_9,
    price: 18,
    description: "A magical tale of bravery and kindness in a fairyland.",
    category: "Children",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "10",
    name: "Jack and the Giant Adventure",
    image: book_10,
    price: 20,
    description: "An exciting journey to outsmart a giant and find treasure.",
    category: "Children",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "11",
    name: "The Lost Treasure Map",
    image: book_11,
    price: 15,
    description: "Follow the map and discover a hidden treasure.",
    category: "Children",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "12",
    name: "Galaxy Explorers",
    image: book_12,
    price: 17,
    description: "Join kids on a thrilling adventure in outer space.",
    category: "Children",
    date: 1716634345448,
    popular: true,
  },

  // Health
  {
    _id: "13",
    name: "The Healthy Mind",
    image: book_13,
    price: 20,
    description: "Explore techniques to keep your mind sharp and focused.",
    category: "Health",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "14",
    name: "Yoga for Beginners",
    image: book_14,
    price: 18,
    description: "Learn yoga poses for physical and mental well-being.",
    category: "Health",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "15",
    name: "Nutrition Made Easy",
    image: book_15,
    price: 15,
    description: "Understand the basics of balanced eating and wellness.",
    category: "Health",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "16",
    name: "The Power of Sleep",
    image: book_16,
    price: 22,
    description: "Discover the importance of sleep for a healthier life.",
    category: "Health",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "17",
    name: "Fit in 30 Days",
    image: book_17,
    price: 25,
    description: "Your guide to getting fit with quick workouts.",
    category: "Health",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "18",
    name: "Healing with Nature",
    image: book_18,
    price: 18,
    description: "Learn how nature contributes to mental wellness.",
    category: "Health",
    date: 1716634345448,
    popular: false,
  },

  // Academic
  {
    _id: "19",
    name: "Introduction to Physics",
    image: book_19,
    price: 30,
    description: "An in-depth guide to basic physics concepts.",
    category: "Academic",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "20",
    name: "Mathematics Made Simple",
    image: book_20,
    price: 25,
    description: "Simplify complex math concepts with easy explanations.",
    category: "Academic",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "21",
    name: "History of the Modern World",
    image: book_21,
    price: 18,
    description: "Explore key events that shaped the modern era.",
    category: "Academic",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "22",
    name: "Chemistry Experiments for Beginners",
    image: book_22,
    price: 22,
    description: "Hands-on experiments for understanding chemistry basics.",
    category: "Academic",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "23",
    name: "The Art of Programming",
    image: book_23,
    price: 28,
    description: "A step-by-step guide to coding and problem-solving.",
    category: "Academic",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "24",
    name: "Exploring the Universe",
    image: book_24,
    price: 30,
    description: "A deep dive into astronomy and space exploration.",
    category: "Academic",
    date: 1716634345448,
    popular: false,
  },

  // Business
  {
    _id: "25",
    name: "Entrepreneurship 101",
    image: book_25,
    price: 22,
    description: "Learn the basics of starting and running a business.",
    category: "Business",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "26",
    name: "Marketing Strategies",
    image: book_26,
    price: 24,
    description: "Proven techniques for effective marketing and branding.",
    category: "Business",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "27",
    name: "Leadership for Success",
    image: book_27,
    price: 26,
    description: "Key skills and strategies for becoming a great leader.",
    category: "Business",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "28",
    name: "Finance for Beginners",
    image: book_28,
    price: 18,
    description: "Understand personal and corporate finance basics.",
    category: "Business",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "29",
    name: "The Art of Negotiation",
    image: book_29,
    price: 22,
    description: "Learn how to negotiate effectively in any scenario.",
    category: "Business",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "30",
    name: "Time Management Mastery",
    image: book_30,
    price: 20,
    description: "Practical tips for managing time and boosting productivity.",
    category: "Business",
    date: 1716634345448,
    popular: true,
  },
  // Religious
  {
    _id: "31",
    name: "The Path to Enlightenment",
    image: book_31,
    price: 15,
    description: "Explore the teachings that guide towards spiritual peace.",
    category: "Religious",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "32",
    name: "Stories from the Book",
    image: book_32,
    price: 18,
    description: "A collection of inspiring stories from the book",
    category: "Religious",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "33",
    name: "The Power of Prayer",
    image: book_33,
    price: 12,
    description: "Discover the transformative effects of sincere prayer.",
    category: "Religious",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "34",
    name: "The Life of Man",
    image: book_34,
    price: 20,
    description: "An insightful biography of.",
    category: "Religious",
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "35",
    name: "Understanding Religious",
    image: book_35,
    price: 22,
    description: "Learn the significance of best teachings from the.",
    category: "Religious",
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "36",
    name: "Spiritual Wisdom",
    image: book_36,
    price: 25,
    description: "Timeless lessons for personal and spiritual growth.",
    category: "Religious",
    date: 1716634345448,
    popular: true,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Latest books",
      "Hot Offers",
      "Popular books",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "anishpanj026@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: <FaFacebook />, id: "facebook" },
    { icon: <FaInstagram />, id: "instagram" },
    { icon: <FaTwitter />, id: "twitter" },
    { icon: <FaYoutube />, id: "youtube" },
    { icon: <FaLinkedin />, id: "linkedin" },
  ],
};
