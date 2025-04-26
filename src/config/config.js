// export const BACKEND_URL = "https://malls11.com/api";
export const BACKEND_URL = "http://localhost:3000"; 

export const URLS = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: {
    INDEX: "/blogs",
    BLOG_DETAIL: "/blogs/:id",
  },
  CONTACT: "/contact",
  FAQ: "/faq",
  TERMANDCONDITION: "/terms-and-condition",
  FREELANCERS: "/freelancers",
  PROJECT:"/projects",
  SERVICES:"/services",



  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },

  CLIENT: {
    HOME: "/client-dashboard",
    ALL_FREELANCERS: "/client/freelancers",
    EDIT_PROFILE : "/client/edit-profile",
    CLIENT_VERIFY: "/client/verify",
    PROJECT_CREATION: "/client/create-new-project",
    MANAGE_PROJECTS: "/client/my-projects",
    PROPOSALS: "/client/my-projects/proposals",
    CHECKOUT: "/client/my-projects/proposals/checkout",
    BOUGHT_SERVICES: "/client/bought-services",
    CLIENT_MEETINGS: "/client/meeting",
    CHANGING_PASSWORD:'/client/changing-password',
    DELETE_ACCOUNT:'/client/delete-profile',
    JOBS: {
      INDEX: "/client/jobs",
      POST_JOB: "/client/jobs/create",
    },
    COMPLETED_PROJECT:"/client/completed-projects"
  },

  FREELANCER: {
    HOME: "/freelancer-dashboard",
    EDIT_FREELANCER_PROFILE: "/freelancer/edit-profile",
    FREELANCER_VERIFY: "/freelancer/verify",
    CREATE_GIGS: "/freelancer/create-new-gig",

    MANAGE_GIGS: {
      INDEX: "/freelancer/manage-gigs",
      MANAGE_GIGS_EDIT:"/freelancer/manage-gigs/edit",
      MANAGE_GIG_PREVIEW: "/freelancer/manage-gigs/:id",

    },
    
    ALL_JOBS: "/freelancer/jobs",
    PROPOSAL: "/freelancer/proposals",
    FAVOURITE: "/freelancer/favourite",
    PASSWORD_CHANGE: "/freelancer/password-change",
    DELETE_PROFILE: "/freelancer/delete-profile",
  },
};
