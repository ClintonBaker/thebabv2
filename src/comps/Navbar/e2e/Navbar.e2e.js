import Component, { generateSelectors } from '@e2e/utils/Component';
import componentSelectors from './selectors.js';

export default (Browser) => {
	const selectors = generateSelectors(componentSelectors);

	class Navbar extends Component {
		waitForAllElementsToLoad() {
			Browser.waitForElementVisible(elements.root);
			Browser.waitForElementVisible(elements.logoBox);
			Browser.waitForElementVisible(elements.logo);
		}
	}

	return new Navbar(Browser);
}
