# Packages Task Details

you can check the figma wireframe for better understanding
https://www.figma.com/file/X0K4fliOJbSjUPnL3hNSth/Untitled?node-id=0%3A27&t=5NsWPqCuhTNKX6fJ-1
make sure you create a different branch for your work

## TASK 1: [/prisma/schema.prisma]

create a package model [/types/packages.ts] check this for data fields

## TASK 2: [/app/(user)/(protected)/packages/page.tsx]

fetch data from package db and pass it to table component [/components/users/tables/packages/index.tsx] inside table component add columns & show data which was sent as a prop

antd table [https://ant.design/components/table]

## TASK 3: [/components/users/tables/packages/index.tsx]

create a button at top which will allow users to create new package, whenever the button will press it will open a modal [https://ant.design/components/modal] inside that modal add a form [https://ant.design/components/form] which will accept user inputs

## TASK 4: [/pages/api/packages/index.ts]

create an api which will accept task 3 modal data then it will store the data in db via prisma

## TASK 5: []

add delete & edit options
