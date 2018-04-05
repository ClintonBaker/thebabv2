import Core from '@e2e/utils/Core';

export default class Comment extends Core {
	waitForAllElementsToLoad() {
		this.waitForElementVisible(this.elements.root);
	}

	elements = this.generateSelectors({
		root: '[e2e=Comment]',
	});
}
