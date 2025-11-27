import UNavigationMenuUi from "~/theme/UNavigationMenu";
export default defineAppConfig({
  ui: {
    navigationMenu: {
      ...UNavigationMenuUi as any,
    }
  }
})
