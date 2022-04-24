    •	This is an expo managed project
    •	Entire code of the project lies in the src folder. The code has been structured into various folders for better organization.
    ⁃	Screens - contains the code for the various screen in the app.
    ⁃	Components - contains the code for the components that make up the screens
    ⁃	Assets - contains the assets and commonly used code across the app.
    •	To keep the project simple, I did not use any external libraries. Everything was built using react-native components.
    •	Navigation is being handled by stack navigation.
    •	My assumption with this project are as follows:
    ⁃	The provided data belongs to various users.
    ⁃	Therefore, For this demo, I am using the top 15 users data.
    •	This data is being displayed as a list on the Home Screen (There are 2 screens in this app). This list displays the user picture, Name and the Anxiety State of each user. I choose anxiety state here because, I believe this is the most important information for the user.
    •	When a user is clicked, additional measurement details are displayed on the next screen. These details include - Name, Heart Rate, Anxiety Level, Anxiety State, Baseline Progress, Care Team, Organization, Wearable Device, Battery level of the variable device and the last updated time.
    •	I followed this order for organizing the data on the screen as I felt this is the order in which users would like to see the data. For example, Heart Rate and Anxiety Level/State are the most important data. Hence, I placed them on the top.
    •	I maintained a uniform layout across the app.
