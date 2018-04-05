import Component, { generateSelectors } from '@e2e/utils/Component';
import componentSelectors from './selectors.js';

export default (Browser) => {
	const selectors = generateSelectors(componentSelectors);
	class Home extends Component {
		render() {
			this.waitForAllElementsToLoad([
				selectors.header,
				selectors.title,
				selectors.searchInput,
				selectors.searchInputIcon,
				selectors.submitLink
			])
		}

		performSearch() {
			this.setValueOf(selectors.searchInput).to('stuff');
			this.expectValueOf(selectors.searchInput).toEqual('stuff');
			Browser.click(selectors.searchInputIcon);
			// TODO: finish this.
		}

		clickSubmitLink() {
			Browser.click(selectors.submitLink);
		}
	}

	return new Home(Browser);
}
