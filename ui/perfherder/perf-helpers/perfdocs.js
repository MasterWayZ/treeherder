export const perfViews = {
  graphsView: 'graphsView',
  compareView: 'compareView',
  alertsView: 'alertView',
  testsView: 'testsView',
  fileBugMarkdown: 'fileBugMarkdown',
};

const testDocumentationFrameworks = [
  'talos',
  'awsy',
  'browsertime',
  'devtools',
];

const browsertimeDocsUnavailableViews = [
  perfViews.compareView,
  perfViews.testsView,
];

const supportedPerfdocsFrameworks = {
  talos: 'talos',
  awsy: 'awsy',
  browsertime: 'raptor',
  devtools: 'performance-tests-overview',
};

/**
 * TODO: remove hardcoded names once suffixes are removed from Perfdocs
 * @link https://firefox-source-docs.mozilla.org/testing/perfdocs/raptor.html#benchmarks
 */
const browsertimeBenchmarksTests = [
  'ares6',
  'assorted-dom',
  'jetstream2',
  'matrix-react-bench',
  'motionmark-animometer',
  'motionmark-htmlsuite',
  'raptor-speedometer-geckoview',
  'raptor-youtube-playback-av1-sfr-chrome',
  'raptor-youtube-playback-av1-sfr-fenix',
  'raptor-youtube-playback-av1-sfr-firefox',
  'raptor-youtube-playback-av1-sfr-geckoview',
  'raptor-youtube-playback-h264-1080p30-firefox',
  'raptor-youtube-playback-h264-1080p60-firefox',
  'raptor-youtube-playback-h264-full-1080p30-firefox',
  'raptor-youtube-playback-h264-full-1080p60-firefox',
  'raptor-youtube-playback-h264-sfr-chrome',
  'raptor-youtube-playback-h264-sfr-fenix',
  'raptor-youtube-playback-h264-sfr-firefox',
  'raptor-youtube-playback-h264-sfr-geckoview',
  'raptor-youtube-playback-hfr-chrome',
  'raptor-youtube-playback-hfr-fenix',
  'raptor-youtube-playback-hfr-firefox',
  'raptor-youtube-playback-hfr-geckoview',
  'raptor-youtube-playback-v9-1080p30-firefox',
  'raptor-youtube-playback-v9-1080p60-firefox',
  'raptor-youtube-playback-v9-full-1080p30-firefox',
  'raptor-youtube-playback-v9-full-1080p60-firefox',
  'raptor-youtube-playback-vp9-sfr-chrome',
  'raptor-youtube-playback-vp9-sfr-fenix',
  'raptor-youtube-playback-vp9-sfr-firefox',
  'raptor-youtube-playback-vp9-sfr-geckoview',
  'raptor-youtube-playback-widevine-h264-sfr-chrome',
  'raptor-youtube-playback-widevine-h264-sfr-fenix',
  'raptor-youtube-playback-widevine-h264-sfr-firefox',
  'raptor-youtube-playback-widevine-h264-sfr-geckoview',
  'raptor-youtube-playback-widevine-hfr-chrome',
  'raptor-youtube-playback-widevine-hfr-fenix',
  'raptor-youtube-playback-widevine-hfr-firefox',
  'raptor-youtube-playback-widevine-hfr-geckoview',
  'raptor-youtube-playback-widevine-vp9-sfr-chrome',
  'raptor-youtube-playback-widevine-vp9-sfr-fenix',
  'raptor-youtube-playback-widevine-vp9-sfr-firefox',
  'raptor-youtube-playback-widevine-vp9-sfr-geckoview',
  'speedometer',
  'stylebench',
  'sunspider',
  'unity-webgl',
  'wasm-godot',
  'wasm-godot-baseline',
  'wasm-godot-optimizing',
  'wasm-misc',
  'wasm-misc-baseline',
  'wasm-misc-optimizing',
  'webaudio',
  'youtube-playback',
  'youtube-playback-av1-sfr',
  'youtube-playback-h264-1080p30',
  'youtube-playback-h264-1080p60',
  'youtube-playback-h264-full-1080p30',
  'youtube-playback-h264-full-1080p60',
  'youtube-playback-h264-sfr',
  'youtube-playback-hfr',
  'youtube-playback-v9-1080p30',
  'youtube-playback-v9-1080p60',
  'youtube-playback-v9-full-1080p30',
  'youtube-playback-v9-full-1080p60',
  'youtube-playback-vp9-sfr',
  'youtube-playback-widevine-h264-sfr',
  'youtube-playback-widevine-hfr',
  'youtube-playback-widevine-hfr',
];

/**
 * TODO: remove hardcoded names once suffixes are removed from Perfdocs
 * @link https://firefox-source-docs.mozilla.org/testing/perfdocs/raptor.html#interactive
 */
const browsertimeInteractiveTests = [
  'cnn-nav',
  'facebook-nav',
  'reddit-billgates-ama',
  'reddit-billgates-post-1',
  'reddit-billgates-post-2',
];

/**
 * TODO: remove hardcoded names once suffixes are removed from Perfdocs
 * @link https://firefox-source-docs.mozilla.org/testing/perfdocs/raptor.html#custom
 */
const browsertimeCustomTests = ['process-switch', 'welcome'];

export const removedOldTestsDevTools = [
  'total-after-gc',
  'reload-total-after-gc',
  'content-total-after-gc',
  'reload-content-total-after-gc',
  'toolbox-total-after-gc',
  'target-total-after-gc',
];

// TODO: remove these once the documentation for DevTools is complete
export const nonDocumentedTestsDevTools = [
  'reload-inspector:content-process',
  'reload-inspector:parent-process',
  'reload-debugger:content-process',
  'reload-debugger:parent-process',
  'reload-no-devtools:content-process',
  'reload-no-devtools:parent-process',
  'reload-netmonitor:content-process',
  'reload-netmonitor:parent-process',
  'reload-webconsole:parent-process',
  'reload-webconsole:content-process',
];

const baseURL = 'https://firefox-source-docs.mozilla.org/';

export class Perfdocs {
  /**
   * Class that provides a link where possible with
   * detailed information about each test suite.
   */
  constructor(framework, suite, platform = '', title = '') {
    this.framework = framework || '';
    this.suite = suite || '';
    this.platform = platform || '';
    this.title = title || '';
    this.remainingTestName = '';
    this.url = '';
  }

  get remainingName() {
    if (this.remainingTestName.length === 0) {
      this.remainingTestName = this.title.replace(this.suite, '');
    }
    return this.remainingTestName;
  }

  get documentationURL() {
    const frameworkName = supportedPerfdocsFrameworks[this.framework];
    if (!frameworkName) {
      this.url = baseURL.concat('testing/perfdocs/');
      return this.url;
    }
    this.url =
      frameworkName === 'performance-tests-overview'
        ? baseURL.concat('devtools/tests/')
        : baseURL.concat('testing/perfdocs/');

    this.url = this.url.concat(frameworkName, '.html#');

    if (frameworkName === 'raptor') {
      // amazon-sec doesn't have yet documentation added
      if (this.suite === 'amazon-sec') {
        this.url = this.url.slice(0, -1);
        return this.url;
      }
      this.url = this.updatedURLWithSuffix;
    } else {
      // framework is either awsy, talos or devtools
      if (this.suite === 'about_newtab_with_snippets') {
        // talos
        this.suite = 'about-newtab-with-snippets';
      }
      this.url = this.url.concat(
        this.suite.replace(/:|\s|\./g, '-').toLowerCase(),
      );
    }
    return this.url;
  }

  get updatedURLWithSuffix() {
    let suffixForSuite;
    const suiteNameBeforeDot = this.suite.split('.')[0];
    if (browsertimeInteractiveTests.includes(suiteNameBeforeDot)) {
      this.url = this.url.concat(suiteNameBeforeDot);
      suffixForSuite = '-i';
    } else {
      this.url = this.url.concat(this.suite);
      if (browsertimeBenchmarksTests.includes(this.suite)) {
        suffixForSuite = '-b';
      } else if (browsertimeCustomTests.includes(this.suite)) {
        suffixForSuite = '-c';
      } else if (this.platform.includes('android')) {
        suffixForSuite = '-m';
      } else suffixForSuite = '-d';
    }
    return this.url.concat(suffixForSuite);
  }

  hasDocumentation(perfherderView = null) {
    if (
      (this.framework === 'browsertime' &&
        browsertimeDocsUnavailableViews.includes(perfherderView)) ||
      removedOldTestsDevTools.includes(this.suite) ||
      nonDocumentedTestsDevTools.includes(this.suite)
    ) {
      return false;
    }

    return testDocumentationFrameworks.includes(this.framework);
  }
}
