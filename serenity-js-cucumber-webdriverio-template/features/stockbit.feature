Feature: Test Stockbit
    @TestOpenWeb
    Scenario Outline: Open stockbit website
        Given Alice start with open stockbit
    @TestLogin
    Scenario Outline: Login to stockbit
        Given Heihaichi start with open stockbit
        When he login using "<username>" and "<password>"
        Then he should she that authentification has <outcome>
        Examples:
            | username      | password  | outcome |
            | sadfasdfqweqw | Qwerty123 | failed  |
            | foobar        | barfoo    | failed  |
    # | <valid login> | <valid password> | succeed |

    @Register
    Scenario Outline: Register new account stockbit
        Given Flynn start with open stockbit
        * he sign up for stockbit
        * he fill up requirement register account with "<name>" "<email>" "<username>" "<password>" "<confirmpassword>"
        Then he click register
        Examples:
            | name      | email                   | username   | password     | confirmpassword |
            | supremacy | glasscanonbuild@dps.com | glasscanon | P@ssword123# | P@ssword123#    |
            | rtxbois   | ultradef@tanker.com     | weaktanker | P@ssword123# | P@ssword123#    |
