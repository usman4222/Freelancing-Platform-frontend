import Delete_Profile from "@/components/Delete_Profile";
import { URLS } from "@/config/config";

import ChangePassword from "@/Pages/Freelancers/ChangePassword";
import EditGig from "@/Pages/Freelancers/component/EditGig";
import ServiceForm from "@/Pages/Freelancers/CreateGig";

import EditProfile from "@/Pages/Freelancers/EditProfile/EditProfile";
import FavoritesPage from "@/Pages/Freelancers/Favourite";
import Freelancer_Dashboard from "@/Pages/Freelancers/Freelancer_Dashboard";
import Freelancer_Verification from "@/Pages/Freelancers/Freelancer_Verification";
import GigDetail from "@/Pages/Freelancers/GigDetail";
import MyServices from "@/Pages/Freelancers/MyServices";
import Proposals from "@/Pages/Freelancers/Proposal";

import { Briefcase, FilePlus2, FileText, Heart, Icon, Lock, Trash, Verified } from "lucide-react";

export const freelancerRoutes = [
  {
    path: URLS.FREELANCER.HOME,
    element: Freelancer_Dashboard,
    isLayout: true,
    isProtected: true,
    // Icon: SquareChartGantt,
    title: "Dashboard",
  },
  {
    path:URLS.FREELANCER.EDIT_FREELANCER_PROFILE,
    element: EditProfile,
    isLayout: true,
    isProtected: true,
    // Icon: UserPen,
    title: "Edit Profile",
  },
 
  {
    path:URLS.FREELANCER.FREELANCER_VERIFY,
    element: Freelancer_Verification,
    isLayout: true,
    isProtected: true,
    Icon: Verified,
    title: "Verification",
  },
  {
    path:URLS.FREELANCER.CREATE_GIGS,
    element: ServiceForm,
    isLayout: true,
    isProtected: true,
    Icon: FilePlus2,
    title: "Create Gig",
  },
  {
    path:URLS.FREELANCER.MANAGE_GIGS.INDEX,
    element:MyServices,
    isLayout:true,
    isProtected:true,
    Icon:Briefcase,
    title:"Manage Gigs",
  },
  {
    path:URLS.FREELANCER.MANAGE_GIGS.MANAGE_GIG_PREVIEW,
    element:GigDetail,
    isLayout:true,
    isProtected:true,
  },
  {
    path:URLS.FREELANCER.MANAGE_GIGS.MANAGE_GIGS_EDIT,
    element:EditGig,
    isLayout:true,
    isProtected:true,
  },
  {
    path:URLS.FREELANCER.PROPOSAL,
    element:Proposals,
    isLayout:true,
    isProtected:true,
    Icon:FileText,
    title:"Proposals",
  },
  {
    path:URLS.FREELANCER.FAVOURITE,
    element:FavoritesPage,
    isLayout:true,
    isProtected:true,
    Icon:Heart,
    title:"Favorites",
  },
  {
    path:URLS.FREELANCER.PASSWORD_CHANGE,
    element:ChangePassword,
    isLayout:true,
    isProtected:true,
    Icon: Lock,
    title:"Change Password",
  },
  {
    path:URLS.FREELANCER.DELETE_PROFILE,
    element:Delete_Profile,
    isLayout:true,
    isProtected:true,
    Icon: Trash,
    title:"Delete Profile",
  } 

];
