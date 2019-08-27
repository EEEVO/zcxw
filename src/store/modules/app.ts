import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import {getSize, setSize} from '@/utils/cookies'
import store from '@/store'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface IAppState {
  device: DeviceType
  size: string
}

@Module({dynamic: true, store, name: 'app'})
class App extends VuexModule implements IAppState {
  public device = DeviceType.Desktop;
  public size = getSize() || 'medium';

  @Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device)
  }

  @Action
  public SetSize(size: string) {
    this.SET_SIZE(size)
  }

  @Mutation
  private TOGGLE_DEVICE(device: DeviceType) {
    this.device = device
  }

  @Mutation
  private SET_SIZE(size: string) {
    this.size = size;
    setSize(this.size)
  }
}

export const AppModule = getModule(App);
