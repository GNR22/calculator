How to run the calculator app in my-turborepo


Make sure you have installed all dependencies: 
if you haven't done so yet, run:
npm install

If you want to use turbo directly in the shell:
npm install -g turbo


How to run the calculator app only:
type: 
cd my-turborepo
npm run dev  

or 

cd my-turborepo
turbo run dev


Now in terminal there should be "calculator#dev" in task column. web#dev and docs#dev are in different ports(dont mind them). just go to calculator#dev

Probably the local and network localhost should look like this 
local: http://localhost:3002/
network: http://10.86.241.127:3002/

