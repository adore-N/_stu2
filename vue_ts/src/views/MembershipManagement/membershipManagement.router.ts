import RouterInterface from "@/interface/routerInterface";
// @ts-ignore
import MembershipManagement from './MembershipManagement.vue'


let _router: RouterInterface = {
    path: '/membershipManagement',
    name: 'MembershipManagement',
    component: MembershipManagement,
};

export default [_router]