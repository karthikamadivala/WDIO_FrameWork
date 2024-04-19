export class ConfigUtility {
  async generateAllureReport() {
    const reportError = new Error("Could not generate Allure report");
    const generation = await allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  }

  async takeScreenShotForFailureCase(result) {
    if (result.error) {
      await browser.takeScreenshot();
    }
  }
}

export default new ConfigUtility();
