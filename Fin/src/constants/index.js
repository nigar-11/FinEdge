import {
  people01,
  people02,
  people03,
  airbnb,
  binance,
  coinbase,
  dropbox,
} from "../assets";

import Twitter from "../assets/svg/Twitter.astro";
import Facebook from "../assets/svg/Facebook.astro";
import LinkedIn from "../assets/svg/LinkedIn.astro";
import Instagram from "../assets/svg/Instagram.astro";

import Send from "../assets/svg/Send.astro";
import Star from "../assets/svg/Star.astro";
import Shield from "../assets/svg/Shield.astro";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },

];

export const features = [
  {
    Icon: Star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    Icon: Shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    Icon: Send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];



export const stats = [
  {
    title: "User Active",
    value: "3800+",
  },
  {
    title: "Trusted by Company",
    value: "230+",
  },
  {
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.FinEdge.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.FinEdge.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.FinEdge.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.FinEdge.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.FinEdge.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.FinEdge.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.FinEdge.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.FinEdge.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.FinEdge.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.FinEdge.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.FinEdge.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.FinEdge.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    Icon: Instagram,
    link: "https://www.instagram.com",
  },
  {
    Icon: Facebook,
    link: "https://www.facebook.com",
  },
  {
    Icon: Twitter,
    link: "https://www.twitter.com",
  },
  {
    Icon: LinkedIn,
    link: "https://www.linkedin.com",
  },
];


