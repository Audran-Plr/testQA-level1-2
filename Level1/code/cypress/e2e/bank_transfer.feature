Feature: Bank Transfer
    Scenario Outline: Successful bank transfer
        Given I am logged in as a "<user_type>"
        And I am on the bank transfer page
        When I fill in the transfer details
            | Field            | Type                | Validation                                                         |
            | ---------------- | ------------------- | ------------------------------------------------------------------ |
            | Beneficiary Name | Text                | Required                                                           |
            | IBAN             | Text                | Required; Alphanumeric; length 14–34                               |
            | Label            | Text                | Required; Alphanumeric; max 255; no special characters             |
            | Amount           | Numeric              | Required; Min **0.01** – Max **100,000**                          |
            | Transfer Mode    | Radio               | **Instant** or **Scheduled**                                       |
            | Transfer Date    | Date                | Required; **min: tomorrow**; **max: today + 90 days**              |
        And I select Instant transfer mode
        And I click the transfer button
        Then I should see a success message : "Bank transfer completed successfully"
        Examples:
            | user_type | Password |
            | admin     | admin |

    Scenario: Successful scheduled bank transfer
        Given I am logged in as a admin
        And I am on the bank transfer page
        When I fill in the transfer details
        And I select scheduled transfer mode and fill in the transfer date
        And I click the transfer button
        Then I should see a success message : "Bank transfer scheduled successfully"

    Scenario: Unsuccessful bank transfer with IBAN too short
        Given I am logged in as a admin
        And I am on the bank transfer page
        When I fill an IBAN too short in the IBAN field
        And I fill all the fields except the IBAN
        And I select Instant transfer mode
        And I click the transfer button
        Then I should see an error message "Invalid IBAN: IBAN is too short"

    Scenario: Invalid User bank transfer
        Given I am logged in as a "<user_type>"
        And I am on the bank transfer page
        When I fill in the transfer details
        And I select Instant transfer mode
        And I click the transfer button
        Then I should see an error message "You are not authorized to perform this action"
        Examples:
            | user_type     | password |
            | salesmanager | salesmanager |