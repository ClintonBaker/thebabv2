import Core from '@e2e/utils/Core';

export default class Login extends Core {
	waitForAllElementsToLoad() {
		this.waitForElementVisible(this.elements.root);
	}

	elements = this.generateSelectors({
		root: '[e2e=Login]',
	});
}
