# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When https://www.techtonic.com/ is entered into the browser and enter is pressed, the browser requests the IP address of the Techtonic server, then the browser sends an HTTP packet to the Techtonic server. This packet requests a copy of the Techtonic website to be sent back to the client. If the server approves the client request, it sends packet fragments of the website to be assembled in the browser.

## From start to finish, how does data reach you to be rendered in the browser?

After the server sends the synchronize/acknowledge message which tells the client the request has been received and includes the packet sequence number, which allows the packet fragments to be arranged in the right order once all packets have been sent to the client, the client starts sending packets back to the client. These packets are made up of several distinct parts. There is the header which contains the server IP address, the client IP address, the internet protocol being used, the packet number. The payload which is the actual data. Finally the trailer which shows the end of the packet and includes error correction.

## What code is rendered in the browser?

The HTML and CSS code will be rendered in the browser as this is the only thing being displayed. HTML and CSS code is rendered using a render engine, it takes the code and turns it into the UI that is seen on the website.

## What is the server-side code’s main function?

The server-side code's main function is to efficiently store and deliver information, customize a user's experience, control access to content, store session, and analyze data. The server-side code allows webpages to be dynamic and load content as needed or as requested. An example of a dynamic website is Gmail.com. When you first go to Gmail.com it presents you with a homepage which loads more data if you sign in. Server-side code operates on the server.

## What is the client-side code’s main function?

The client-side code's main function is to present the UI/UX of the website. Websites with only client-side code are static webpages. Client-side code operates on the clients computer. An example of this would be the homepage of the Techtonic website.

## What is runtime?

Runtime is when a program is being executed, it starts as soon as the program is started, and ends when the program is closed.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I'm a little stuck on this question because I don't know in what context this question is in. On the Techtonic website there is probably 1 CSS asset for every page you have, only 1 JS asset, 10 plus images, and one HTML asset per page.. In total there are over 30 assets on the Techtonic website.

## How many instances of the server-side code are available at any given time?

I'm also hung up on this question because I understand an instance of server-side code as how many instances of the code can be run on a server at any given time and this depends on the servers capacity. However I don't know if my context of instances is correct.

## How many instances of the databases connected to the server application are created?

I did a little bit of research however I wasn't able to find a definitive answer. However I would answer one per database because a database instance is a snapshot of the actual content at any given time.
