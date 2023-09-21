# Armstrong English

Armstrong English is a Next.js (13.5) web application offering booking and payment services tailored for users in Mainland China. It is designed to avoid services blocked by the Golden Shield Project and integrate Chinese digital wallets and social media for payments and user authentication. 

## [Live Demo](https://armstrongenglish.vercel.app/)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)

## Overview

Armstrong English is a jamstack web app designed for class scheduling with a convenient booking and payment system tailored to a Chinese userbase.   This app integrates WeChat OAuth for convenient QR- or OTP-based user authentication.   Integration with WeChat Pay and AliPay via the Stripe API provides secure and efficient payment processing with the most popular Chinese digital wallets.  AWS Lambda provides serverless compute paired with API Gateway for security.  Assets are hosted in an AWS S3 bucket and served via AWS CloudFront CDN for optimal performance.  Mainland China enforces the 'Internet Content Provider' (ICP) licensing system, which requires websites hosted on servers (and CDNs) within China to obtain an ICP number through government registration.  In order to reduce latency caused by the Golden Shield Project's packet inspection while also avoiding the arduous process of ICP registration, this application is deployed as a static site using AWS S3 + CloudFront via the ap-east-1 server (Hong Kong) as the primary location, with Singapore as a fallback. This deployment strategy minimizes latency while avoiding the need for a China-based server or CDN that would necessitate ICP filing and government registration.  


## Features

This app is optimized for use by students located in Mainland China without triggering the Golden Shield Project's TCP packet blocks (usually caused by integration of banned third-party services, e.g. anything Google).  It is architectured as a Next.js "jamstack" serverless application relying on AWS Lambda, API Gateway security, S3 bucket hosting, and CloudFront CDN delivery of assets. 

- **Next.js 13.5:** Next's static site and API routing features are combined with AWS Lambda serverless compute in order persist user data while optimizing for speed.  

- **OAuth:** OAuth provides secure QR- or OTP-based user authentication through WeChat.

- **Stripe API:** Stripe checkout services include popular Chinese digital wallets like WeChat Pay and AliPay.

- **Tailwind CSS:** UI is styled with utility-first CSS framework Tailwind.

## Getting Started

Follow these steps to set everything up on your local development environment:

### Prerequisites

Before installing, ensure you have the following prerequisites installed:

- **Node.js:** Armstrong English uses the latest version of Node (20.6.1 as of this push).  You can download it from [nodejs.org](https://nodejs.org/).

- **npm or Yarn:** This project was developed using npm as the package manager.  You can install npm with Node.js, or you can find Yarn installation instructions at [yarnpkg.com](https://yarnpkg.com/).


### Installation

1. **Clone the repository:**  `$ git clone https://github.com/ccingram94/armstrongenglish.git`

2. **Navigate to the project directory:** `$ cd armstrongenglish`

3. **Install dependencies:** `$ npm install`

4. **Configure environmental variables:**  Because this app relies on the use of third-party APIs (e.g. Stripe) you will require a `.env` file in the project root.  Add necessary env variables here such as OAuth settings and Stripe API keys.

5. **Start the dev server:** `$ npm run dev`

6. **You may now access the app at `http://localhost:3000`.**