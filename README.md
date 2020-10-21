# Cypress testing task

## Instructions

Run the following commands to get the sample express app running:
`npm install`
`npm start`

This will launch the web app on your local machine at `http://localhost:3000`.

Please see the "Jira" ticket below and create a Cypress test in the `/cypress/integration` folder that satisfies the detailed acceptance criteria.

You may wish to use the `mock-content-data.json` file as this contains some mock data that is used to render the web page.  This would ordinarily be served by the content management system.

In order to run the Cypress test, use the following command:
`npm test`

## Sample Jira Ticket

### Description

The Babylon team need to make sure that the data provided by the content management system is rendering on the website as expected.  This automated test should compare the mock JSON data provided with the rendered web page.  Any Cypress test failures should be human readable.

### Acceptance Criteria

The test must:

- All string values are visible on the page.
- All links or buttons contain correct attributes and text values.
- All images contain correct alt text and urls.
- Content blocks are displayed in the correct order, as per the mock JSON data file.
- If any assertions fail, the cause should be easily identifiable from the Cypress logs.
