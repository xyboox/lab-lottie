import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(private platform: Platform) {
		// this.showSplash();
	}

	private async showSplash() {
		await this.platform.ready();
		console.log('Platform is ready!');

		const lottie = (window as any).lottie;
		console.log('lottie: %O', lottie);

		if (this.platform.is('ios' && lottie)) {
			console.log('Platform IS iOS, starting lottie...');
			await lottie.splashscreen.hide();

			await lottie.splashscreen.show(
				'public/assets/lottie.json',
				false,
				390,
				844
			);
		}
	}
}
