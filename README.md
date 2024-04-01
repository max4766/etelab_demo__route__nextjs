# Introduction

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a demo web page(ETELAB) that uses route which is already set by Next.js.


## Getting Started

First, copy this project's URL and clone this project into your local with git :

```bash
git clone [project URL]
```

FYI, No need to make a new folder for this project. 

it is already packed in the folder with it's project name when you clone.

Then, recover packages. update node_modules with the command below :

```bash
npm run dev
```

Next, run the development server with one of the commands below (npm recommended) :

```bash
npm run dev
```

```bash
yarn dev
```

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations! you can now see the view of this project! 

## About the source

`src/app/layout.tsx` : all page's fixed layout. in this project's case, 

it's a top navigation bar which redirects you to other pages.

`src/app/page.tsx` : It's colored in GREY. main page which you can see as you first load the page. 

`src/app/testRequestManage/page.tsx` : a RED page if you click the first tab, 시험의뢰관리

`src/app/sampleManage/page.tsx` : an ORANGE page if you click the second tab, 샘플관리

`src/app/nonConformanceReportManage/page.tsx` : a YELLOW page if you click the third tab, 부적합관리

`src/app/specManage/page.tsx` : a GREEN page if you click the fourth tab, SPEC관리

`src/app/noticeBoard/page.tsx` : a BLUE page if you click the fifth tab, 게시판

`src/app/systemManage/page.tsx` : a DARK BLUE page if you click the sixth tab, 시스템관리

`src/app/systemSetting/page.tsx` : a PURPLE page if you click the last tab, 시스템설정

and there are svg and png files in public folder's directory.

and some other files that are related to configuration and settings...

(frankly, those are not critical here)

The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Goal

The goal of this project was `To check how fast and easily I could build a SPA`

Next.js doesn't contain unlike React.

It just follows .jsx grammar originated from React.

since it has no HTML, jsx is the only component you can deal with.

Follow the pre-built roles such as 'route' that Next.js suggests.

If you know how to make a SPA with React, you would take less time to build a project!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# youngsukHwang
# nice_toy_project
# nice_toy_project
