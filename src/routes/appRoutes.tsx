import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ChangelogPage from '../pages/changelog/ChangelogPage';
import DashboardIndex from '../pages/dashboard/DashboardIndex';
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPage from '../pages/dashboard/DefaultPage';
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AnalyticsPage from '../pages/dashboard/AnalyticsPage';
import SaasPage from '../pages/dashboard/SaasPage';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/createimg",
        element: <DashboardPageLayout />,
        state: "createimg",
        sidebarProps: {
            displayText: "CreateImg",
            icon: <DashboardOutlinedIcon />
        },
        child: [
            {
                index: true,
                element: <DashboardIndex />,
                state: "createimg.index"
            },
            {
                path: "/createimg/default",
                element: <DefaultPage />,
                state: "createimg.default",
                sidebarProps :{
                    displayText: "sample1"
                }
            },
            {
                path: "/createimg/analytics",
                element: <AnalyticsPage />,
                state: "createimg.analytics",
                sidebarProps :{
                    displayText: "sample2"
                }
            },
            {
                path: "/createimg/saas",
                element: <SaasPage />,
                state: "createimg.saas",
                sidebarProps :{
                    displayText: "sample3"
                }
            }

        ]
    },
    {
        path: "/postlist",
        element: <ChangelogPage />,
        state: "postlist",
        sidebarProps :{
            displayText: "投稿一覧",
            icon: <FormatListBulletedOutlinedIcon />
        }
    },
    {
        path: "/faq",
        element: <SaasPage />,
        state: "faq",
        sidebarProps :{
            displayText: "FAQ",
            icon: <LiveHelpIcon />
        }
    }
];

export default appRoutes;