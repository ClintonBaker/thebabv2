import Core from '@e2e/utils/Core';

export default class LoginForm extends Core {
	waitForAllElementsToLoad() {
		this.waitForElementVisible(this.elements.root);
	}

	elements = this.generateSelectors({
		root: '[e2e=LoginForm]',
	});
}
