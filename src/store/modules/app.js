import {
    getToken,
    getUsername,
    getUser,
    //getPermission,
    getDeptname,
    //setPermission,
    setToken,
    setUsername,
    setUser,
    getRoles,
    setRoles,
    clearAll,
    setDeptname,
    getOrgid,
    setOrgid
} from "@/utils/auth";

const APP = {
    state: {
        token: getToken(),
        nickname: getUsername(),
        user: getUser(),
        //permission: getPermission(),
        deptname: getDeptname(),
        roles: getRoles(),
        orgid:getOrgid(),
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USERNAME: (state, nickname) => {
            state.nickname = nickname;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        // SET_PERMISSION: (state, permission) => {
        //     state.permission = permission;
        SET_DEPTNAME: (state, deptname) => {
            state.deptname = deptname;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
        SET_ORGID:(state,orgid) => {
            state.orgid = orgid
        }
    },
    getters: {
        token: state => state.token,
        roles: state => state.roles,
        orgid:state=>state.orgid,
    },
    actions: {
        //  登陆
        Addlogin({ commit }, userInfo) { 
            return new Promise((resolve, reject) => {
                if (userInfo.success) {
                    setToken(userInfo.token);
                    setUsername(userInfo.user.nickname);
                    setUser(JSON.stringify(userInfo.user));
                    setDeptname(userInfo.user.deptname);
                    setRoles(userInfo.user.roles[0]);

                    commit("SET_TOKEN", userInfo.token);
                    commit("SET_USERNAME", userInfo.user.nickname);
                    commit("SET_DEPTNAME", userInfo.user.deptname);
                    commit("SET_ROLES", userInfo.user.roles[0]);
                    commit("SET_USER", JSON.stringify(userInfo.user));
                    resolve(userInfo);
                } else {
                    reject(userInfo);
                }
            });
        },
        // 登出
        Cancellation({ commit }) {
            clearAll();
            commit("SET_TOKEN", "");
            commit("SET_USERNAME", "");
            commit("SET_USER", "");
            commit("SET_DEPTNAME", "");
            commit("SET_ROLES", "");
            commit("SET_ORGID","")
        },
        //获取机构的id
        storageOrgId({ commit },id){
            setOrgid(id);
            commit("SET_ORGID",id);
        }
    }
};

export default APP;