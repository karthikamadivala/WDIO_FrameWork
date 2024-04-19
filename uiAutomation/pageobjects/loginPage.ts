import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $("#username");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  //   public async login(username: string, password: string) {
  //     await this.inputUsername.setValue(username);
  //     await this.inputPassword.setValue(password);
  //     await this.btnSubmit.click();
  //   }

  public async login(username: string, password: string) {
    // await (await this.inputUsername).waitForClickable({ timeout: 2000 });
    // await browser.waitUntil(
    //   async () => await (await this.inputUsername).isDisplayed(),
    //   { timeout: 4000, timeoutMsg: "element is not displayed after 5 sec" }
    // );

    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public async open() {
    await browser.maximizeWindow();
    return super.open("login");
  }
}

export default new LoginPage();
