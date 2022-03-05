const fs = require("fs");
const createBrowserless = require("browserless");
const sharp = require("sharp");

const entries = [
  {
    name: "twitter",
    url: "https://twitter.com/_mariusflorescu",
  },
];

const screenshotsDir = "./public/screenshots";

//utils
const createDir = (dirname) => {
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }
};

const cleanup = () => {
  if (fs.existsSync(screenshotsDir)) {
    fs.rmdirSync(screenshotsDir, { recursive: true });
  }
};

const resize = async (buffer, path) => {
  try {
    await sharp(buffer)
      .resize(400, 256, {
        fit: "fill",
      })
      .toFile(path);
  } catch (err) {
    console.error(err);
    return err;
  }
};

//this is the function that actually creates the screenshots
const createScreenshot = async (browserless, entry) => {
  try {
    const dirname = `${screenshotsDir}/${entry.name}`;
    createDir(dirname);

    const buffers = await Promise.all([
      browserless.screenshot(entry.url, {
        colorScheme: "light",
        waitForTimeout: 5000,
      }),
      browserless.screenshot(entry.url, {
        colorScheme: "dark",
        waitForTimeout: 5000,
      }),
    ]);

    await Promise.all([
      resize(buffers[0], `${dirname}/light.webp`),
      resize(buffers[1], `${dirname}/dark.webp`),
    ]);
  } catch (err) {
    console.error(err);
    return err;
  }
};

//looping through the entries and generating screenshots
const generateScreenshots = async () => {
  try {
    const browserlessFactory = createBrowserless();
    const browserless = await browserlessFactory.createContext();

    cleanup();
    createDir(screenshotsDir);

    await Promise.all(
      entries.map((entry) => createScreenshot(browserless, entry))
    );

    await browserless.destroyContext();
    await browserlessFactory.close();
  } catch (err) {
    console.error("Error while generating the screenshots");
    console.error(err);
  }
};

generateScreenshots();
