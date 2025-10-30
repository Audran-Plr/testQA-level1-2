1. **QA Strategy**
   - **automated** vs **manual**
        - Almost everything should be Automated
        - I wouldn't automate :
            - A/B tests : not here to stay by definition
            - low impact x low probability cases : stay rationnal. this is a business. save money.
            - other entities product (partners, banks, framework, etc.) : seems obvious at first, it is not.

   - **prioritization**
        - When I think about prioritization, I look at : 
            - high impact x high probability cases
            - high reusability steps (ex : connection? dataset creation?)
            - other teams repetitive tasks

   - **CI/CD pipeline**
        - smoke test @smoke : 5 minutes max - pre-merge : very basic checks to make sure the repo will not be broken, 
        - critical non regression @critical @productname: 30 minutes max - after merge : aimed to test the product getting the update
        - nightlys @nightly @productname: 8 hours max - every night : very complete non regression with few combinations
        - complete Non regression @everything: 48 hours or more - rarely : every tests with many combinations, y. ex : before freeze or huge update



2. **Repository & Team Structure**
   - **repository organization**  
    I am way more experienced with playwright, so this is how I would do it in Playwright : 
        - features/
            - where .feature files are stored (a few or a lot of files depending on XRAY plugin or equivalent)
        - src/
            - steps/
                groups steps which will call methods in pages or tools: 
                ex : When ('I log in') -> loginpage.fillCredentials()
            - pages/ 
                PageObjectModel or equivalent: groups selectors, methods of said page or endpoint
                ex : login.page.ts, accountCreation.page.ts, etc 
                - selectors : using in this order : data-testIds > ids > classes > other > xpath
            - tools/ 
                ex : apiUser.tool.ts datasetX.tools.ts database.tool.ts
            - fixtures/
                whatever will need to be passed from steps to steps or test cases
        - .env file
            secrets, configuration environment variables
        - packages/ and files of whatever else the framework needs

   - **naming convention** and **tagging strategy** Gherkin and scenarios. 
        - Gherkin naming :
            feature name : \[applicationName\] unique name of feature/User Story, no verbs
            scenario : unique name of test case, differrent dataset will be handled through scenarios outline
        - tagging : 
            application : @APPLICATIONAME
            chapter/squad/guild name : @chapterName @squadName or @guildName
            criticality : @smoke @critical nothing if not critical
            very particuliar test cases : differrent laws in country X? military grade? a very big and special need partner to whom you can't say no?
                ex: @InternetExplorer7 @tablet @china @military @Amazon

   - test base **maintainable**
        productName/
            applicationName/ (name of the application under test, might happen to be the same as product, then we skip this level)
                epicsOrInitiatives/ (huge functional blocks) 
                    UserStory or IntermediateFolder/ (depending on the tool used to handle the test base or .feature files size this one can be useful)
                        features/
                            testcases.feature
        What I love about this structure :
            - product oriented, if the organization of the company changes, the test folder will not change
            - anyone can understand it and update it
            - this tree will almost be a documentation by itself which is a good point for maintainability
            - every new bits of the product can easily be added



3. **Mentoring & Collaboration**
   - **Junior QA** **first 2 weeks**
        - 2 hour each day with another QA member
        - "onboarding package" : administrative guide, list of useful documentation, useful links, checkup list of needed credentials
        - simple but clear objectives with a 2 week deadline : example : 1 automated test + 1 gherkins + 1 tickets to validate manually + 5 quizzes from the fulll academy(or equivalent if available)
        - send every useful meetings invitation (sounds obvious, it is not)
        - I would ask for a "rapport d'etonnement" after 3 weeks
        - 1 to 1 with me every 3 days
        - coordinate to make sure he/she/they are not alone during lunch during first week

   - **their first test PRs and help them progress toward autonomy**
        - 1. informal review with me,before pushing the branch to remote repo
        - 2. very complete review with me, we push together after that one even if not perfect
        - 3. another team member review the code normally

   - **ensure quality is a shared responsibility**
        - demos about our automations to Devs and PM teams every 2 month
        - nightly NonRegression reporting send to Developers / weekly for PMs and Directors
        - KPI about incomplete user stories or bugged development
        - 3 amigos meeting(3 people : 1 PM,1 QA,1 Dev) to write better tests



4. **Vision & Continuous Improvement**
   - **QA metrics**
        - escape rate : how many bugs were detected too late in production and could have been avoided? // anomaly detected by clients?
        - manual test/automated test ratio ?
        - number of gherkin scenarios written
        - number of tests automated
        - coverage rate (might require a lot of work)
        
   - Suggest one or two **initiatives** to improve the QA culture at fulll (tooling, processes, rituals, documentation)
        - synthetic monitoring : basic tests in production
        - test management tool : XRAY? Qtest? I didn't find one mentioned.
        - connect CICD directly to test management tool to fetch .featurefile during every pipeline : one source of truth  
        - load testing : track performance 
        - "rapport d'etonnement" globally in tech/digital department
        - AI models? : this exercice has highly probably been written with AI according to GPTzero but does the whole company use LLMs and AI properly? Cursor is nice for QA automation. Connect an LLM to daily NR reportings?
        - API testing is not mentioned. I would implement that too