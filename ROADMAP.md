Dev Notes:


*****
-----

To do next:
    Implement CRUD for users (create controller)
    Create CRUD tests for bonsai
    Implement CRUD for bonsai (create controller)
-----

Short term:

Extract photo_url to be its own object/ model
photo_urls should be an array of references to these photo objects
Each photo object (each representing a photo), 
contains a photo, a date and associated caption.
    ~~
    This (an array of photos and captions) mimics the format of the Bonsai Life Histories book.
    Can get rid of the origin_story field.
    Date should be editable by user
    Present/ sort photo_urls objects by date
    When a new photo_url is added, update the object array with sorted values
-----

Medium term:

-----

Down the line:

    Allow users to list their trees for sale, and to bid on other users trees
    People will come from fb marketplace to sell their trees. Users already on
    the site will be encouraged to sell their trees (already listed, easy to sell).
    Seems like a 'virtuous' cycle.

    ~~

    Allow users to list their pots, as well. They can buy and sell. Pots can be
    associated with trees. Trees have an optional pots attribute on their data model
    to link the two.

    ~~

    Bonsai community of products currently consists of:
        Bonsainut (classic forum)
        r/bonsai  (more advanced forum, in essence)
        Facebook groups for auctioning bonsai

    ~~

    Bonsai practitioners:
        Are generally older 
        Generally have disposable income for their hobby
        Are generally loyal 

-----