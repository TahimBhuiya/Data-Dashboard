# Web Development Project 6 - *Data Dashboard Part 2*

Submitted by: 

**Tahim Bhuiya**

**Z-Number: Z23493520**

This web app: **is designed for superhero fans to explore, compare, and analyze the stats of various superheroes. You can search for your favorite heroes, filter them based on strength or intelligence, and view detailed information such as their power stats and abilities. The app pulls superhero data from the Superhero API and users can interact with these stats through dynamic sliders and view side-by-side comparisons between different superheroes.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [x] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [x] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  

## Video Walkthrough

Here's a walkthrough of implemented required features:

![Data Dahsboard Part 2 Display](src/Images/datadashboardpt2.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows



## Notes

While creating this app, I encountered several challenges. This included:

**1. Integrating the Superhero API**
**Challenge:** One of the major challenges was integrating the third-party Superhero API to fetch data about superheroes dynamically. The API returned a variety of data in JSON format, which required parsing and handling errors, especially when the data was missing or incorrectly formatted.

**Solution:** The data was parsed into a usable format, and error handling was implemented to ensure the app gracefully managed failed API calls or no results returned.

**2. Filtering and Sorting Data**
**Challenge:** Implementing the filtering functionality to search and display superheroes based on their strength and intelligence required filtering the list of heroes in real-time. Additionally, adjusting the UI to reflect the filtered data correctly was tricky.

**Solution:** I used React state management to track the filter values (strength and intelligence) and applied those filters directly to the superhero list. The challenge was ensuring the UI updated dynamically as users interacted with the range sliders.

**3. Chart Integration and Visualization**
**Challenge:** Implementing interactive charts (e.g., StrengthChart and IntelligenceStrengthChart) posed a challenge in terms of visualizing data effectively. The charts had to display superhero statistics in a meaningful and visually appealing way.

**Solution:** I researched chart libraries like Chart.js or React Chart.js to visualize the data. Ensuring that the charts were responsive and updated when the filters changed required efficient state and props management.


## License

    Copyright [2025] [Tahim Bhuiya]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.