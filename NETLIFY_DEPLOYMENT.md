# Netlify Deployment Instructions for Vuelidate

## Overview
This project is a monorepo containing Vuelidate documentation built with VitePress. The documentation site can be deployed to Netlify.

## Prerequisites
- GitHub repository (this project is already a git repo)
- Netlify account

## Deployment Steps

### 1. Initialize the Project
Ensure all dependencies are installed:
```bash
yarn install  # or npm install --legacy-peer-deps
```

### 2. Build the Documentation
Test the build locally:
```bash
cd packages/docs
yarn build:docs
```

### 3. Deploy to Netlify

#### Option A: Connect via GitHub (Recommended)
1. Go to [Netlify](https://netlify.com)
2. Sign in with your GitHub account
3. Click "New site from Git"
4. Connect your repository: `Logiclayer1111/vuelidate`
5. Configure build settings:
   - **Branch to deploy**: `main` (or your default branch)
   - **Build command**: `cd packages/docs && yarn build:docs`
   - **Publish directory**: `packages/docs/src/.vitepress/dist`
6. Click "Deploy site"

#### Option B: Manual Deploy
1. Build the site locally
2. Drag and drop the `packages/docs/src/.vitepress/dist` folder to Netlify's deploy page

## Configuration
The `netlify.toml` file in the root contains:
- Build command: `cd packages/docs && yarn build:docs`
- Publish directory: `packages/docs/src/.vitepress/dist`
- Node version: 18

## Environment Variables
No special environment variables are required for basic deployment.

## Custom Domain
To use a custom domain:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS as instructed

## Troubleshooting
- If build fails, check the build logs in Netlify dashboard
- Ensure Node.js version 18 is used
- For dependency issues, Netlify may need `--legacy-peer-deps` flag

## Current Live Site
The documentation is currently live at: https://vuelidate-next.netlify.app