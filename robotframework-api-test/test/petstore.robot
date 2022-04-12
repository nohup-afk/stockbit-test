*** Settings ***
Library           RequestsLibrary
Library           Collections

*** Variables ***
${urlpetstore}    https://petstore.swagger.io/v2
${available}      /pet/findByStatus?status=available
${pending}        /pet/findByStatus?status=pending
${pending}        /pet/findByStatus?status=sold
${pet}            /pet
${valid}          { "id": 0, "category": { "id": 0, "name": "string"}, "name": "doggie", "photoUrls": [ "string" ], "tags": [ { "id": 0, "name": "string" } ], "status": "available"}
${invalid}        { "id": , "category": { "id": 0, "name": "string"}, "name": "doggie", "photoUrls": [ "string" ], "tags": [ { "id": 0, "name": "string" } ], "status": "available"}

*** Test Cases ***
get available pets
    Run petstore api    available

get pending pets
    Run petstore api    pending

get sold pets
    Run petstore api    sold

Data-driven test
    [Template]    Add a new pet to the store ${payload} should be ${expected}
    ${valid}    200
    ${invalid}    400

*** Keywords ***
Find pets by status available
    Create Session    petstore    ${urlpetstore}
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${resp}=    Get On Session    petstore    ${available}    headers=${headers}
    Status Should Be    200

Find pets by status pending
    Create Session    petstore    ${urlpetstore}
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${resp}=    Get On Session    petstore    ${pending}    headers=${headers}
    Status Should Be    200

Find pets by status sold
    Create Session    petstore    ${urlpetstore}
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${resp}=    Get On Session    petstore    ${pending}    headers=${headers}
    Status Should Be    200

Run petstore api
    [Arguments]    ${querystr}
    Run Keyword If    '${querystr}' == 'available'    Find pets by status available
    ...    ELSE IF    '${querystr}' == 'pending'    Find pets by status pending
    ...    ELSE IF    '${querystr}' == 'sold'    Find pets by status sold

Add a new pet to the store ${payload} should be ${expected}
    Create Session    petstore    ${urlpetstore}
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${resp}=    POST On Session    petstore    ${pet}    data=${payload}    headers=${headers}    expected_status=anything
    Status Should Be    ${expected}    ${resp}
