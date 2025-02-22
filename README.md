This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone the repo:

```bash
git clone git@github.com:chair28980/waku-battleship-starter.git
cd waku-battleship-starter
```

Install dependencies with yarn:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Waku concepts
https://docs.waku.org
https://docs.waku.org/learn

**Content topics**

```
/{application-name}/{version}/{content-topic-name}/{encoding}
```

For example:
```
/supercrypto/1/notification/proto
```

**ContentPairProvider**
Uses the `contentTopic` to distinguish the messages we are interested in.

**Light Push**
Sends messages to a content topic.

**Filter**
Retrieves messages from a content topic.

**Store**
Temporary storage.

## Helpers

In case connection to node fails:

```js
if (res?.errors?.length && res?.errors?.length > 0) {
    alert('unable to connect to a stable node. please reload')
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
