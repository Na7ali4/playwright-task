import { Locator, Page } from "@playwright/test";

export default class LocatorsPage {
  readonly page: Page;

  readonly buttonCustomerLogin: Locator;
  readonly buttonUserSelect: Locator;
  readonly buttonLogin: Locator;
  readonly buttonTransactions: Locator;
  readonly buttonSortDate: Locator;

  readonly inputFromData: Locator;
  readonly inputToData: Locator;

  readonly transactionTable: Locator;

  readonly tableFirstCell: Locator;

  constructor(page: Page) {
    this.page = page;

    //buttons
    this.buttonCustomerLogin = page.getByRole("button", {
      name: "Customer Login",
    });
    this.buttonUserSelect = page.locator("#userSelect");
    this.buttonLogin = page.getByRole("button", { name: "Login" });
    this.buttonTransactions = page.getByRole("button", {
      name: "Transactions",
    });
    this.buttonSortDate =page.locator("//a[contains(text(),'Date-Time')]");

    //inputs
    this.inputFromData = page.locator("#start");
    this.inputToData = page.locator("#end");

    //table
    this.transactionTable = page.locator(
      "//body/div[1]/div[1]/div[2]/div[1]/div[2]/table[1]"
    );

    //cell
    this.tableFirstCell = page.locator("//tbody/tr[@id='anchor0']/td[1]");
  }

  async chooseDate(): Promise<void> {
    await this.inputFromData.click();
    await this.inputFromData.fill("2015-03-01T15:21");
    await this.inputFromData.press("Enter");
    await this.inputFromData.press("Tab");
    await this.inputToData.fill("2015-03-29T23:59");
    await this.inputToData.press("Enter");
  }
}