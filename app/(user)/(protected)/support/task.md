# Support Task Details

you can check the figma wireframe for better understanding
https://www.figma.com/file/QHxuakDGZpxdERyQkJtBlL/Untitled?node-id=0%3A1&t=VKBuqazd9Zapn86i-1
make sure you create a different branch for your work

## TASK 1: [/prisma/schema.prisma]

create two model one for support and other for message [/types/support.ts] check this for data fields

## TASK 2: [/app/(user)/(protected)/support/page.tsx]

fetch users active/inactive tickets then pass it to client support table as prop

## TASK 3: [/components/users/tables/support/index.tsx]

inside index.tsx create an antd table [https://ant.design/components/table] add all the columns and show the data which was sent via prop

## TASK 4: [/components/users/tables/support/index.tsx]

add a button which will open a modal [https://ant.design/components/modal] then inside that modal add a form [https://ant.design/components/form] which will allow users to create new tickets,

## TASK 5: [/pages/api/support/index.ts]

create an api which will accept task 4 data and will store it inside db
