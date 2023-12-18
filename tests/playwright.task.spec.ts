import { test, expect } from "@playwright/test";
import LocatorsPage from "../pageObjects/locatorsPage";

test.only("Be able to view all transaction for 1001 from 2015/03/01 15:21 to 2015/03/29 23:59", async ({
  page,
}) => {
  const locatorsPage = new LocatorsPage(page);

  await page.goto(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
  );
  await locatorsPage.buttonCustomerLogin.click();
  await locatorsPage.buttonUserSelect.selectOption("1");
  await locatorsPage.buttonLogin.click();
  await locatorsPage.buttonTransactions.click();

  await locatorsPage.chooseDate();

  const table = await locatorsPage.transactionTable;
  console.log(await table.textContent());

  await expect(locatorsPage.tableFirstCell).toHaveText(
    "Mar 2, 2015 12:00:00 AM"
  );

  await locatorsPage.buttonSortDate.click();

  await expect(locatorsPage.tableFirstCell).toHaveText(
    "Mar 28, 2015 12:00:00 AM"
  );
});
