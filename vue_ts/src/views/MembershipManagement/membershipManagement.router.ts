import RouterInterface from "@/interface/routerInterface";
import MembershipManagement from './MembershipManagement.vue'

let _router: RouterInterface = {
    path: '/membershipManagement',
    name: 'MembershipManagement',
    component: MembershipManagement,
};

export default [_router]