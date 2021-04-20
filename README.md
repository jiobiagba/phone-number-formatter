__OVERVIEW__

This application was created to assist in formatting extracted phone numbers from socail media platforms. Primarily, **it removes all leading, trailing, and in-between white spaces from phone numbers and seperates new phone numbers to a new line using a comma as the delimiter.**

__SETTING UP__
1. Open a terminal to your desired directory and run `git clone https://github.com/jiobiagba/phone-number-formatter`
2. After clone is completed, run `cd phone-number-formatter` to enter the application's main directory

__EXAMPLE__
After set up, to use the application, supply both the path to the file containing the non-formatted phone numbers and the name of the file to save the formetted phone numbers to as input parameters. As an illustration, if the non-formatted phone numbers are in a file in the Users/MyFiles directory as unformatted.txt and I want to save the formatted file in the Users directory, I'll achieve this by running the following from the application's main directory via the terminal:

`node index.js C:/Users/MyFiles/unformatted.txt C:/Users/formatted.txt`

**Note that ONLY .txt FILES ARE ACCEPTED AS INPUT AND OUTPUT FILES**
