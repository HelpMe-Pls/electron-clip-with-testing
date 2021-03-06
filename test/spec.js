const assert = require('assert');
const path = require('path');
const Application = require('spectron').Application;
const electronPath = require('electron');

const app = new Application({
	path: electronPath,
	args: [path.join(__dirname, '..')],
});

describe('Electron Clip', function () {
	this.timeout(10000);

	beforeEach(() => {
		return app.start();
	});

	afterEach(() => {
		if (app && app.isRunning()) {
			return app.stop();
		}
	});

	it('should work', () => {
		assert.ok(true);
	});

	it('shows an initial window', async () => {
		const count = await app.client.getWindowCount();
		return assert.equal(count, 1);
	});

	it('has the correct title', async () => {
		const title = await app.client.waitUntilWindowLoaded().getTitle();
		return assert.equal(title, 'Electron Clip');
	});

	it('does NOT have the developer tools open', async () => {
		const devToolsIsOpened = await app.client
			.waitUntilWindowLoaded()
			.browserWindow.isDevToolsOpened();
		return assert.equal(devToolsIsOpened, false);
	});

	it.skip('has a button with the text "Copy from Clipboard"', async () => {});

	it.skip('should not have any clippings when the application starts up', async () => {});

	it.skip('should have one clipping when the "Copy From Clipboard" button has been pressed', async () => {
		/*
		 * - Click on the #copy-from-clipboard button.
		 * - Verify that there is now one .clippings-list-item element
		 *   on the page.
		 */
	});

	it.skip('should successfully remove a clipping', async () => {});

	it.skip('should have the correct text in a new clipping', async () => {
		/*
		 * - Write a test that adds some text to the system clipboard.
		 * - Click on the "Copy to Clipboard" button.
		 * - Get the text from the .clipping-text element.
		 * - Assert that the text in the field is the same as what you
		 *   wrote to the clipboard.
		 *
		 * Hint—You can write text to the clipboard using:
		 *   app.electron.clipboard.writeText('Vegan Ham');
		 */
	});

	it.skip('it should write the text of the clipping to the clipboard', async () => {
		/*
		 * In this test, we want to make sure that Clipmaster replaces whatever is
		 * already on a the clipboard. We'll implement the following steps.
		 *
		 * - Write a string of text to the clipboard.
		 * - Click "Copy from Clipboard"
		 * - Write something else to the clipboard.
		 * - Click the .copy-clippling element that was created when you added
		 *   the first string to Clipmaster
		 * - Assert that the clipboard currently contains that first string using
		 *   `app.electron.clipboard.readText()`.
		 */
	});
});
