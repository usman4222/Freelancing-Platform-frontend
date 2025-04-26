import { URLS } from "@/config/config";
import changePassword from "@/Pages/Client/chnagePassword";
import ClientDashboard from "@/Pages/Client/ClientDashboard";
import clientMeetings from "@/Pages/Client/clientMeetings";
import clientProjects from "@/Pages/Client/clientProjects";
import ClientProposals from "@/Pages/Client/ClientProposals";
import ClientCheckout from "@/Pages/Client/ClientCheckout";
import clientVerify from "@/Pages/Client/clientVerify";
import CompletedProjects from "@/Pages/Client/CompletedProjects";
import deleteProfile from "@/Pages/Client/deleteProfile";
import ManageProjects from "@/Pages/Client/myProjects";
import EditProfileForm from "@/Pages/Client/profile";
import Services from "@/Pages/Client/Services";
import Test from "@/Pages/Global/Test";
import { Cast, FilePlus2, Home,  LockKeyholeOpen,  SquareChartGantt,  Trash2,  UserPen, VerifiedIcon, WalletCards, } from "lucide-react";

export const clientRoutes = [
  {
    path: URLS.CLIENT.HOME,
    element: ClientDashboard,
    isLayout: true,
    isProtected: true,
    Icon: Home,
    title: "Dashboard",
  },
  
  {
    path: URLS.CLIENT.EDIT_PROFILE,
    element: EditProfileForm,
    isLayout: true,
    isProtected: true,
    Icon: UserPen,
    title: "Edit Profile",
  },
  {
    path: URLS.CLIENT.CLIENT_VERIFY,
    element: clientVerify,
    isLayout: true,
    isProtected: true,
    Icon: VerifiedIcon,
    title: "Client Verification",
    Pop_title: "Malls11 offers exclusive CR services to connect you with authorized and verified freelancers for your project. To avail of this service, you’ll pay 10% of your project’s budget to Malls11, and we’ll ensure you are matched with the best,pre-verified freelancer to meet your needs.",
  },
  {
    path: URLS.CLIENT.PROJECT_CREATION,
    element: clientProjects,
    isLayout: true,
    isProtected: true,
    Icon: FilePlus2,
    title: "Post a new Job",
  },
  {
    path: URLS.CLIENT.MANAGE_PROJECTS,
    element: ManageProjects,
    isLayout: true,   
    isProtected: true,
    Icon: SquareChartGantt,
    title: "Manage Projects",
  },
  {
    path: URLS.CLIENT.PROPOSALS,
    element: ClientProposals,
    isLayout: true,   
    isProtected: true,
    Icon: SquareChartGantt,
    title: "Proposals",
  },
  {
    path: URLS.CLIENT.CHECKOUT,
    element: ClientCheckout,
    isLayout: true,   
    isProtected: true,
    title: "Checkout",
  },
  {
    path:URLS.CLIENT.COMPLETED_PROJECT,
    element:CompletedProjects,
    isLayout: true,   
    isProtected: true,
    Icon: SquareChartGantt,
    title: "Completed Projects",
  },
  {
    path: URLS.CLIENT.BOUGHT_SERVICES,
    element: Services,
    isLayout: true,   
    isProtected: true,
    Icon: WalletCards,
    title: "Bought Service",
  },
  {
    path: URLS.CLIENT.CLIENT_MEETINGS,
    element: clientMeetings,
    isLayout: true,   
    isProtected: true,
    Icon: Cast,
    title: "Meetings",
  },
  {
    path: URLS.CLIENT.CHANGING_PASSWORD,
    element: changePassword,
    isLayout: true,   
    isProtected: true,
    Icon: LockKeyholeOpen,
    title: "Change Password",
  },
  {
    path: URLS.CLIENT.DELETE_ACCOUNT,
    element: deleteProfile,
    isLayout: true,   
    isProtected: true,
    Icon: Trash2,
    title: "Delete Profile",
  },
  

];
