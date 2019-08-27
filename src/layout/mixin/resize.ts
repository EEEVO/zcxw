import {Component, Vue} from 'vue-property-decorator'
import {AppModule, DeviceType} from '@/store/modules/app'

const WIDTH = 992; // 参考Bootstrap的响应式设计

@Component({
  name: 'ResizeMixin'
})
export default class extends Vue {
  get device() {
    return AppModule.device
  }

  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  }

  mounted() {
    const isMobile = this.isMobile();
    if (isMobile) {
      AppModule.ToggleDevice(DeviceType.Mobile)
    }
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  }

  private isMobile() {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH
  }

  private resizeHandler() {
    if (!document.hidden) {
      const isMobile = this.isMobile();
      AppModule.ToggleDevice(isMobile ? DeviceType.Mobile : DeviceType.Desktop)
    }
  }
}
