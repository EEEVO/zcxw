interface ISettings {
  title: string
  showSettings: boolean
  showTagsView: boolean
  showSidebarLogo: boolean
  fixedHeader: boolean
  errorLog: string[]
  sidebarTextTheme: boolean
  devServerPort: number
  mockServerPort: number
}

// You can customize below settings :)
const settings: ISettings = {
  title: 'Vue Typescript Admin',
  showSettings: true,
  showTagsView: true,
  fixedHeader: false,
  showSidebarLogo: false,
  errorLog: ['production'],
  sidebarTextTheme: true,
  devServerPort: 9527,
  mockServerPort: 9528
};

export default settings
