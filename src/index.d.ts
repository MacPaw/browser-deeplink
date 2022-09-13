declare module '@macpaw/browser-deeplink' {
  type Options = {
    waitTimeout?: number
  }

  export function browserDeeplink(appLink: string, options?: Options): Promise<void>;
}
