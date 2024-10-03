# Home Task: Create a Simple News App

## Objective
Create a simple news application using Expo and React Native that displays a list of news articles. The app should have basic navigation, styling, and use core components such as `Image`, `Text`, `FlatList`, `SectionList`, and `ScrollView`.

## Requirements

### 1. Setup and Project Initialization
- Initialize a new Expo project.
- Set up React Navigation to handle screen navigation.

### 2. Basic Components
- Create a screen that uses `FlatList` to display a list of news articles.
- Each article should include an `Image` and `Text` for the title and description.

### 3. SectionList Component
- Create another screen that uses `SectionList` to display news articles categorized by sections (e.g., "Sports", "Technology", "Health").

### 4. ScrollView Component
- Create a screen with a long article that includes multiple paragraphs of text and images, which should be scrollable using `ScrollView`.

### 5. Navigation
- Implement a `Stack Navigator` for navigating between the different screens (e.g., Home, Article, Sections).
- Implement a `Tab Navigator` for switching between the Home and Sections screens.

### 6. Styling
- Apply basic styling to the components using `StyleSheet`.
- Use Flexbox to layout the components and ensure the app looks good on different screen sizes.

## Screens Description

### 1. Home Screen
- **Purpose:** Display a list of news articles.
- **Components:** `FlatList`, `Image`, `Text`
- **Appearance:** 
  - A vertical list of articles.
  - Each article item includes a thumbnail image, the title of the article, and a brief description.
  - The list should be scrollable, displaying a series of articles stacked vertically.

### 2. Sections Screen
- **Purpose:** Display categorized news articles.
- **Components:** `SectionList`, `Image`, `Text`
- **Appearance:** 
  - A vertical list with sections.
  - Each section header represents a category (e.g., "Sports", "Technology").
  - Under each section, a list of articles related to that category.
  - Each article item within a section includes a thumbnail image, the title of the article, and a brief description.

### 3. Article Screen
- **Purpose:** Display a full-length article.
- **Components:** `ScrollView`, `Image`, `Text`
- **Appearance:** 
  - A scrollable view containing a long article.
  - The top part includes a large image as a banner.
  - Below the image, the article title in a large, bold font.
  - The content consists of multiple paragraphs of text, providing the full article content.
  - The entire content should be scrollable vertically.

### 4. Navigation
- **Stack Navigator:** For navigating between Home, Article, and Sections screens.
  - Home screen is the initial screen.
  - Tapping on an article from the Home or Sections screen navigates to the Article screen.
- **Tab Navigator:** For switching between Home and Sections screens.
  - Tabs at the bottom of the screen, allowing users to switch between the Home and Sections screens seamlessly.

## Task Steps

1. **Initialize the Expo Project:**
   - Create a new Expo project and set up the necessary dependencies for React Navigation.

2. **Create the Home Screen:**
   - Use `FlatList` to display a list of articles.
   - Each list item should include an image, title, and description.

3. **Create the Sections Screen:**
   - Use `SectionList` to display articles categorized into sections.
   - Each section should have a header, and each item in the section should display an image, title, and description.

4. **Create the Article Screen:**
   - Use `ScrollView` to display a full-length article with multiple paragraphs.
   - Include a banner image, article title, and the content text.

5. **Set Up Navigation:**
   - Implement a stack navigator to handle transitions between screens.
   - Implement a tab navigator to switch between the Home and Sections screens.

6. **Style the Components:**
   - Apply basic styling using `StyleSheet`.
   - Ensure that the layout is responsive and looks good on different screen sizes.

## Submission Requirements
1. Ensure your project is running without errors.
2. Take screenshots of each screen and the navigation flow.
3. Submit your Expo project link (if using Expo Snack) or the GitHub repository link.

## Extra Credit (Optional)
- Add a search bar to filter news articles.
- Implement a pull-to-refresh feature on the FlatList.
- Add animations to screen transitions.

---

This structured format provides a clear and detailed description of the home task, focusing on the components and their appearance, and guiding students through the creation of a simple news application using Expo and React Native.

Certainly! Here are the instructions for submitting the project to GitHub, which you can append to the existing README.

---

## Submission Instructions
**Submit Your Repository Link:**
   - Once your project is successfully pushed to GitHub, go to the repository page on GitHub.
   - Copy the URL of the repository (e.g., `https://github.com/your-username/NewsApp`).
   - Send this URL to me as your project submission on MS Teams.

### Important Notes
- Ensure all your code is properly committed and pushed to the repository.
- Include any additional instructions or notes in the README.md file of your repository if necessary.
- Make sure your project is public or provide access if the repository is private.

## DEADLINE
OCTOBER 8, WEDNESDAY
12:00 PM
