# Nx proves JavaScript is Dead 💀

https://nx-javascriptisdead.com/

https://github.com/NathanWalker/nx-javascriptisdead/assets/457187/3236652c-8416-491e-913a-fe8eaf473027

## Inspiration

All credit goes to [Maxi Ferreira](https://twitter.com/charca) and [Addy Osmani](https://twitter.com/addyosmani) inspired example for their amazing "Death by JavaScript" series:
- https://deathbyjavascript.com

## Setup

*Prerequisites:*
- [Node](https://nodejs.org) 20.6+
- [yarn](https://classic.yarnpkg.com)
- [NativeScript](https://beta.docs.nativescript.org/setup/): if you want to develop iOS and Android apps.

```bash
yarn
```

## Develop Analog Web App

```bash
yarn nx run web-store:serve
```

## Develop iOS and Android Apps

```bash
yarn nx run nativescript-store:ios

yarn nx run nativescript-store:android
```

## Ready to deploy?

The web app can be hosted with any hosting provider and the iOS and Android apps could be packaged for App Store distributions.

#### Build Web:

```bash
yarn nx run web-store:build
```

The app could now be deployed to any web hosting providers. It's currently deployed on [Render](https://render.com/) here: https://nx-javascriptisdead.com/


#### Build iOS:

```bash
yarn nx run nativescript-store:build --platform=ios
```

The app could now be uploaded to TestFlight by Archive and Upload in Xcode (`open apps/nativescript-store/platforms/ios/nativescriptstore.xcworkspace`)

#### Build Android:

```bash
yarn nx run nativescript-store:build --platform=android
```

A `.aab` file would be available inside `apps/nativescript-store/dist` for upload to Google Play.

## Connect!

- [Follow Nx on Twitter](https://twitter.com/nxdevtools)
- [Follow Analog on Twitter](https://twitter.com/analogjs)
- [Follow NativeScript on Twitter](https://twitter.com/NativeScript)
- [Join the NativeScript community](https://nativescript.org/discord)
