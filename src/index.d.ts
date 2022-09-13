declare module '@macpaw/browser-deeplink' {
  export function browserDeeplink(appLink : string, options: {
    waitTimeout?: number
  }): Promise<void>;
}
