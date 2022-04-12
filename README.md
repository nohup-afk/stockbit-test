# stockbit-test


how to run ui automation test 

    install npm

    npm ci
        Running npm ci downloads the Node modules this project depends on, as well as the latest version of chromedriver and the Serenity BDD CLI reporter jar.
        * working with chrome ver 100

    npm run lint            # runs code linter
    npm run lint:fix        # attempts to automatically fix linting issues
    npm run clean           # removes reports from any previous test run
    npm test                # executes the example test suite




how to run api test 

    install python 
    pip install robotframework
    robot --version
    pip install robotframework-requests

    robot .
        or
    python -m robot .
