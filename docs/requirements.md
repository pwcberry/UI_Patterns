Requirements Definition
=======================

Problem Statement
-----------------

Many developers or designers who do not have experience coding for the user interface are unaware of how user interface design patterns can be coded using web standards. This leads to poor implementation of visual designs and unexpected behaviour for users, thereby more time is spent reworking the code.

Vision Statement
----------------

"UI Patterns in Code" will give coders confidence in understanding how design patterns accommodate interactive behaviours and to write code effectively so the application behaves as expected by the user, and as envisioned by the designer.

Persona Expectations
--------------------

Victoria is a busy person, and relies on Google to provide answers to her coding problems. A web site that provides her with solutions for typical coding problems relating to user interface - specifically web pages - needs to be well organized, easily searchable, and contain concise code based on standards. 

Thomas is hands-on, and keeps his tools neatly arranged and easily accessible. While learning to code, he doesn't want to have to continually switch from his editor to the web page that contains the material he is learning. (Does this mean a responsive site, or the content is easy to learn?)


Context Scenarios
-----------------

### "Search for specific pattern"

1. Victoria has begun work on a new project with a set of requirements that have been drawn up by the office's only business analyst. He has sketched only a small number of screens that have been described by the client.

2. After reading through the requirements, and discussing the screens with the business analyst, Victoria has a clearer understanding for the form of the software, and what interactions are required.

3. In the sketches, she recognizes that there are many elements to that page, but she recognizes some of the page as having an accordion, and the tabs of a card stack. These are patterns she's unsure of coding.

4. Victoria clicks the favourite link she has for "UI Patterns in Code". On the home page she finds the link for "accordion" under the heading "Page Layout".

5. On the page that explains the accordion, she copies the sample code and pastes it into her code editor and begins working on the styling. 

### "Browse pattern library"

1. Thomas has almost finished the high-fidelity mock-ups for the checkout processing in an e-commerce web site. He has started to think about how the pages will be coded.

2. He visits "UI Patterns in Code" after typing the home address into the omnibox of his browser. When the page loads, he looks under heading "Navigation". He clicks on the patterns for "Pyramid", "Sequence Map" and "Breadcrumbs" to gain a feel for how these can be coded.

### "Viewing a pattern code sample"

1. While working on a page for her new web application project, Victoria realizes that one of the input methods requires validation and help text.

2. She finds the pages for the pattern "Input Prompt".

3. On the page she sees the suggested styling, an explanation of the pattern, and the recommended HTML, CSS and JavaScript code for that pattern.

Data Requirements
-----------------

* Pattern: name, code, description
* Pattern Group

Functional Requirements
-----------------------

* Search for pattern
* Browse patterns
* Copy code
* Explore implmentation for explanation

Interaction Framework
---------------------

### Posture

The web application will behave similarly to a _Sovereign Posture_, in that while the user is comprehending the content, the user interface will command their attention.

### Data Elements

__Pattern__:

* Name
* Description
* When To Use
* Code
    - HTML
    - CSS
    - JavaScript

### Functional Elements

* Home Page displays groups of patterns with links to each pattern
* Home Page displays search field with button
* Pattern page contains relevant interactivity for the pattern on display

Key Path Scenarios
------------------

"Search for 'Action Panel'"

* View the Home page
* In the search field, type "Action Panel"
* Click "Search" button
* Page with matching results appears
* Click title "Action Panel"
* Action Panel pattern page appears

"Browse to 'Infinite List'"

* View the Home page
* Under the "Mobile Patterns" heading, click "Infinite List"
* Infinite List pattern page appears

