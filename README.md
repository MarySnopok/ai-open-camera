# test-task-react-native

Aim : Create a reusable react native component to render list of selection items with possibility of multiply selection.

TimeFrame:

30 min - thinking about the structure and googling right components
1.40 h component creation
15 min - refactoring ( components destructing)
10 min - read me creation
Coding time : 1.55

Structure:

App.js - ScrollView + ButtonGroup components / rendering the final result
ButtonGroup - aimed to map around hard coded list of selection items and render all of them at once
SelectionButton - creation of button and monitoring of user interaction
ButtonContent - smaller fracture aimed to render button content (title and icon in this case)

Utils: Hold hardcoded list of colors in json format and list of selection categories

Comments:

If I have more time:
I would work on styling and add more svg's
I would destructure the APP.js to have a single counted component
Think about the ScrollView vs FlatList performance differences in a case when there would be more data on the page to render.
