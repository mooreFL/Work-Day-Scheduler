# Work-Day-Scheduler
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A hourly work day (9-5) calender that changes stylistically by hour based on actual time using momentjs. 

Yellow = Past Hours
Pink= Current Hour
Green= Future Hours

The application saves the users text input in hour blocks and can be recalled if the user saves, leaves then reloads the page. 

The page uses jQuery to run a function that evaluates the current hour(using momentjs) to the hour blocks on the calender, this function then informs the css styling to display one of the three colors.

Initial opening of the application at 2:00pm:
<img src="assets\imgs\Initial loading.PNG" alt="Hourly calender with 9 rows representing 9 workday hours">

User filled form:
<img src="assets\imgs\Filled Form.PNG" alt="same calender as above with personal activities in each hours row">





