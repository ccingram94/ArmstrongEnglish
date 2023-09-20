# Armstrong English

Armstrong English is a Next.js 13 web application providing tutoring booking and payment services to a userbase located in Mainland China. It is designed for use by Mainland Chinese students (eliminating services blocked by the Golden Shield Project and integrating Chinese digital wallets and social media for payments and user authentication). 

## [Live Demo](https://your-live-demo-url.com)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)

## Overview

Armstrong English is a Next-based (13.5) jamstack web application offering a booking and payment system for class scheduling.   This app integrates WeChat OAuth for user authentication and WeChat Pay + AliPay via the Stripe API to provide secure and efficient payment processing for Chinese users.  As a jamstack application, it relies on AWS Lambda for serverless compute paired with API Gateway to protect sensitive data.  Assets are hosted by AWS S3 bucket and served by AWS CloudFront CDN.  In order to reach Mainland Chinese students at a reasonable speed (without hosting or using a CDN based in China (both of which would require a commercial ICP filing) this will be hosted via AWS S3 + Cloudfront via the ap-east-1 server (Hong Kong) to reduce latency (with Singapore as a fallback).

## Features

This app is optimized to reduce latency and provide convenient UX for users located in Mainland China without triggering the Golden Shield Project's TCP packet blocks (usually caused by integration of blocked third-party services, e.g. anything Google).  

- **Next.js 13.5:** This is a static "jamstack" application incorporating Next's React-based component and API routing features to ensure user data persistence while remaining serverless to reduce latency.

- **OAuth:** OAuth provides secure user authentication with use of the WeChat provider for the convenience of Chinese users.

- **Stripe API:** Stripe checkout services include activation of WeChat Pay and AliPay for Chinese users.

- **Tailwind CSS:** UI is styled using utility-first CSS framework Tailwind.

## Getting Started

Follow these steps to set everything up on your local development environment:

### Prerequisites

Before installing, ensure you have the following prerequisites installed:

- **Node.js:** Armstrong English uses the latest version of Node (20.6.1 as of this push).  You can download it from [nodejs.org](https://nodejs.org/).

- **npm or Yarn:** This project was developed using npm as the package manager.  You can install npm with Node.js, or you can find Yarn installation instructions at [yarnpkg.com](https://yarnpkg.com/).


### Installation

1. **Clone the repository:**  $ git clone https://github.com/your-username/armstrong-english.git

2. **Navigate to the project directory:** $ cd armstrongenglish

3. **Install dependencies:** $ npm install 

4. **Configure environmental variables:**  Because this app relies on the use of third-party APIs (e.g. Stripe) you will require a `.env` file in the project root.  Add necessary env variables here such as OAuth settings and Stripe API keys.

5. **Start the dev server:** $ npm run dev

6. **You may now access the app at `http://localhost:3000`.