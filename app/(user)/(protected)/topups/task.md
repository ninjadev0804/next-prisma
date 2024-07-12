# TopUp Page Task

you can check the figma wireframe for better understanding
https://www.figma.com/file/qYbGiUPey3hRFfwWHcBi9y/Untitled?node-id=0%3A1&t=DvmAw2zhNmBAHK3u-1
make sure you create a different branch for your work

## TASK 1: [/prisma/schema.prisma]

create TopUp model, check [/types/topups.ts] for data fields

## TASK 2: [/app/(user)/(protected)/topups/page.tsx]

fetch user topups data from db via prisma,

## TASK 3: [https://ant.design/components/table]

add an antd table, then show all the data in that table

## TASK 4: [/components/users/modals/topups/index.tsx]

add a button called [make topup] on top of that table, whenever the button will press it will open
a modal [https://ant.design/components/modal], then inside that modal make form [https://ant.design/components/form] where user can chose topup gatway and can add topup amount too,

## TASK 5: [/pages/api/topups/index.ts]

create an api which accept new topup request then it will store the topup request data in db via prisma
