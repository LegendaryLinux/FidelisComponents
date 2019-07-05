# Banner Message

**WARNING: This component uses a non-free dependency from @fortawesome.
If you do not have access to this dependency, you should clone the
repository and replace the pro dependency with a free one, then rebuild
the module yourself.**

This is a simple banner message which appears at the top of your website
and displays a message with appropriate colors. If both *isWarning* and
*isError* are false, the message will automatically disappear after ten
seconds.

### Props

**message** (string)  
The message to be displayed to the user

**isWarning** (bool)  
If true, the background of the message is yellow. Defaults to false.

**isError** (bool)  
If true, the background of the message is red. Defaults to false.
