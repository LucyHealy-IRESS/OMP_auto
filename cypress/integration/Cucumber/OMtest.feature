
Feature: OMTestFeature
    Test OMP Features

    @NewClient
    Scenario: Login and Create Client
        Given Login with "username1" and "password1"
        And Via "Home" click to "Create" New Client "const_Cl0001"



# Given, When, Then, And, But for steps (or *)
# """" (Doc Strings)
# | (Data Tables)
# @Tags
# Comments