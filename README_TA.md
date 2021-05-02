# How to run

Hooray, you've gotten this far!

To run our app, you should probably have a metamask wallet account
before trying to run this app perhaps, two accounts if your testing 
this alone. One account may act as A (Alice) and the other may act as B (Bob),
these two can be our chatters for example.

So, now that you have your metamask accounts setup we can get to running this!

> npm install
> cd frontend
> npm install
> npm start

This should pull up a google chrome browser [http://localhost:3000](http://localhost:3000).

The webpage should prompt you for your metamask account details and all that, pick one of the two accounts that we
created earlier.

Next, you're going to open up another browser window using the same address above. Maybe to really check completeness, 
you can run this app on a whole other machine! Use the other account with this browser(or machine).

We're all setup now we can start messaging!
### alice
> hit the start chat button in the webpage
> enter the recipient's address
> enter the recipients name

it should now have a new conversation started and waiting for you to send a message!

> click on the conversation
> it should bring up a modal and an input box for your message
> hit send
> metamask transaction prompt should come up
> accept the transaction(be sure that you have sufficient funds)
### bob
on the other browser window(or machine)
> hit the start chat button in the webpage
> enter the recipient's address
> enter the recipients name
> click the conversation
> the message from alice should be in chat window
> you can now start your chat thread!

~~~~