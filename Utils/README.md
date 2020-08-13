# Utils
A collection of helper methods to make our lives easier.  

Geographic State Methods
---
**getStates()**  
Returns an object where keys are state abbreviations and values are full
state names.

**getStateOptions(selected = [])**  
Accepts an optional array of values and applies the "selected" attribute to all options whose value
matches a value in the array. Returns an `<optgroup>` populated with `<option value="Alaska">Alaska</option>`
etc.

**getMiniStateOptions()**  
Returns an array of `<option value="AL">AL</option>` etc.

Input Verification Methods
---
**verifyEmail(email)**  
Returns a boolean. True if the provided string argument looks like an
email address.

**verifyPhone(phone)**  
Returns a boolean. True if the provided string argument is exactly
ten digits.

**verifyZip(zip)**  
Returns a boolean. True if the provided string argument is exactly
five digits.

**verifyZipPlusFour(zip)**  
Returns a boolean. True if the provided sting argument is five or nine
digits, with an optional dash between the fifth and sixth digit.

**verifyNumber(string)**  
Returns a boolean. True if all characters in the provided string are
digits.

**verifyDecimal(string)**  
Returns a boolean. True if all characters in the provided string are
digits, or if exactly one character is a period followed by one or more
digits.

Banner Helper Methods
---
**resetBannerMessage()**  
Removes any existing banner message from the page and restores an empty
`div` to the beginning of the document body.

**showSuccessBanner(message)**  
Displays a banner with a blue background at the top of the page. Provided
text is displayed in the banner.

**showWarningBanner(message)**  
Displays a banner with a yellow background at the top of the page.
Provided text is displayed in the banner.

**showErrorBanner(message)**  
Displays a banner with a red background at the top of the page. Provided
text is displayed in the banner.

Other Misc. Methods
---
**isArrayUnique(arr)**  
Returns a boolean. True if the array contains no duplicate values.

**getParam(param)**  
Returns the value of a provided GET parameter if it exists. Returns
null otherwise.

**genUUID()**  
Returns a randomly generated string UUID.

**makeReadableDate(dateString)**  
Transform an ISO-8601 date string and return a human-readable one.

**makeReadablePhone(phone)**  
Transform a string into a readable phone number. If there are more
than ten digits present in the passed value, only the first ten will
be returned.

**parseISO8601String(iso8601)**  
Parse an ISO-8601 string and return an array of parts found by the regex.

**genLocaltimeDateFromISO8601String(iso8601)**  
Generate a date in localtime, and set that date using a provided
ISO-8601 string. Returns a `Date` object.
