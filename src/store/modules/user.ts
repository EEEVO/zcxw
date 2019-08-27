import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import {getUserInfo, login, logout} from '@/api/users'
import {getToken, removeToken, setToken} from '@/utils/cookies'
import router, {resetRouter} from '@/router'
import {PermissionModule} from './permission'
import store from '@/store'

export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

@Module({dynamic: true, store, name: 'user'})
class User extends VuexModule implements IUserState {
  public token = getToken() || '';
  public name = '';
  public avatar = '';
  public introduction = '';
  public roles: string[] = [];
  public email = '';

  @Action
  public async Login(userInfo: { username: string, password: string }) {
    let {username, password} = userInfo;
    username = username.trim();
    const {data} = await login({username, password});
    setToken(data.accessToken);
    this.SET_TOKEN(data.accessToken)
  }

  @Action
  public ResetToken() {
    removeToken();
    this.SET_TOKEN('');
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const {data} = await getUserInfo({ /* Your params here */});
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const {roles, name, avatar, introduction, email} = data.user;
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    this.SET_ROLES(roles);
    this.SET_NAME(name);
    this.SET_AVATAR(avatar);
    this.SET_INTRODUCTION(introduction);
    this.SET_EMAIL(email)
  }

  /**
   * 检查角色
   * @param role
   * @constructor
   */
  @Action
  public async ChangeRoles(role: string) {
    // 动态修改权限
    const token = role + '-token';
    this.SET_TOKEN(token);
    setToken(token);
    await this.GetUserInfo();
    resetRouter();
    // 根据角色来生成可访问的路由
    PermissionModule.GenerateRoutes(this.roles);
    // 添加生成的路由
    router.addRoutes(PermissionModule.dynamicRoutes)
    // 重置已访问视图和缓存视图
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    await logout();
    removeToken();
    resetRouter();
    this.SET_TOKEN('');
    this.SET_ROLES([])
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }
}

export const UserModule = getModule(User);
