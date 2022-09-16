/* eslint-disable @typescript-eslint/naming-convention */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'nl.brandwachthuren.lab',
	appName: 'LAB Animated Screensplash',
	webDir: 'www',
	bundledWebRuntime: false,

	cordova: {
		preferences: {
			LottieFullScreen: 'false',
			LottieHideAfterAnimationEnd: 'false',
			LottieAnimationLocation: 'public/assets/lottie.json',
			LottieScaleType: 'CENTER_INSIDE',
			LottieCacheDisabled: 'true',
			LottieLoopAnimation: 'true',
			LottieBackgroundColor: '#B53838',
			LottieWidth: '0.7',
			LottieHeight: '0.7',
			LottieEnableHardwareAcceleration: 'true',
			LottieRelativeSize: 'true',
		},
	},
};

export default config;
