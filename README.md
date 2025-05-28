# Carbon app

## Approach

I've used a monorepo setup with a common package to allow the FE and BE to share API models for type safety across the stack. 

The server uses Prisma with a PostgreSQL database. For testing I have used supertest to test at the controller level, using a real database running in Docker. As the complexity of the app grows, I'd expect to add testing at other layers, e.g. unit testing of business logic at the service layer.

The client uses React, react router, react query, and styled components. It's tested with vitest, react-testing-library and the API mocked using mock service worker. 

## Local setup

### Dependencies

- Docker
- nvm (optional, recommended)

### Node

- Only tested with Node v20 - support with other versions unverified.  If you have nvm, run `nvm use` to automatically install and use a supported node version.
- Run `npm i` from the root directory
- Run `npm run build -w=@carbon-app/common` to build common package

### Database

- Make a copy of `.env.example` in the `packages/server` directory and name it `.env`
- Start local DB by running `npm run db:dev -w=@carbon-app/server`
  - This will start a Postgres DB in a docker container and run the Prisma migrations against it

### Running the app

- To start the server, run `npm run dev -w=@carbon-app/server`
- In a separate terminal, to start the client run `npm run dev -w=@carbon-app/client`

