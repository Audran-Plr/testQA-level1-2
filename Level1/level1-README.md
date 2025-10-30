0. **Quickstart**
    - Prerequisite : npm and node installed(10.9.2 and v22.14.0 worked for me)
    - Copy paste the code folder in you project
    - with terminal go in the "code" folder
    - run command : npm install --legacy-peer-deps 
        --legacy-peer-deps option required so version conflicts are handled properly
    - run command : npm run cy:run:headed
        OR 
    - run command : npm run cy:open
    

1. **Vibe coded app to test**
    - Accordint to the simple specificatins given, I vibe-coded an app very like the system supposedly under test: 
    https://express-bank-link.lovable.app/

2. **BDD, ATDD and Gherkin**
    - I chose to use ATDD in this case. I made this decision out of habit and also visual testing is mentionned in the repo which fits better with ATDD.
    - Both are still very similar and I know how to use both
    - I could have used fewer steps in Gherkin but as I don't know who will read this, I decided to go until 7 steps for maximum clarity.

3. **Typescript or Javascript**
    - I went for .ts usually considered a better practice. I can do both.

4. **Roles**
    I invented 2 roles for the purpose of the exercice
    - Valid role :
       admin / admin
    - Invalid role : 
        salesmanager / salesmanager 

