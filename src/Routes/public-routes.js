import PublicPageLayout from "@/components/Layout/PublicPageLayout";
import { URLS } from "@/config/config";
import LoginPage from "@/Pages/Global/auth/login/LoginPage";
import SignupPage from "@/Pages/Global/auth/signup/SignupPage";
import GlobalLandingPage from "@/Pages/Global/GlobalLandingPage.jsx";
import BlogPost from "@/Pages/Global/landingpage/blog/blog detail/BlogsDetails";
import Blogs from "@/Pages/Global/landingpage/blog/blogs";
import Freelancers from "@/Pages/Global/landingpage/explor/Freelancers";
import Projects from "@/Pages/Global/landingpage/explor/Projects";
import Services from "@/Pages/Global/landingpage/explor/Services";
import LandingPage from "@/Pages/Global/landingpage/LandingPage";
import AboutUs from "@/Pages/Global/landingpage/pages/AboutUs";
import ContactUS from "@/Pages/Global/landingpage/pages/ContactUS";
import Faq from "@/Pages/Global/landingpage/pages/Faq";
import TermCondition from "@/Pages/Global/landingpage/pages/TermCondition";


export const publicRoutes = [
  {
    path: URLS.HOME,
    element: PublicPageLayout(LandingPage),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.BLOG.INDEX,
    element: PublicPageLayout(Blogs),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.BLOG.BLOG_DETAIL,
    element: PublicPageLayout(BlogPost),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.FREELANCERS,
    element: PublicPageLayout(Freelancers),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.PROJECT,
    element: PublicPageLayout(Projects),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.SERVICES,
    element: PublicPageLayout(Services),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.ABOUT,
    element: PublicPageLayout(AboutUs),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.CONTACT,
    element: PublicPageLayout(ContactUS),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.FAQ,
    element: PublicPageLayout(Faq),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.TERMANDCONDITION,
    element: PublicPageLayout(TermCondition),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.AUTH.LOGIN,
    element: PublicPageLayout(LoginPage),
    isLayout: false,
    isProtected: false,
  },
  {
    path: URLS.AUTH.SIGNUP,
    element: PublicPageLayout(SignupPage),
    isLayout: false,
    isProtected: false,
  },
];

