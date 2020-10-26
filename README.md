# employee-listing

## Instructions

1. `git clone https://github.com/BobbyDarts/employee-listing.git`
1. `cd employee-listing/api`
1. `./mvnw spring-boot:run`
1. `cd ../ui`
1. `yarn install`
1. `yarn start`

_Note that maven and yarn both run in the foreground, so multiple terminals may need to be opened to get them both running._

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Spring Initializr](https://github.com/spring-io/initializr).

These were augmented with...

### Java

- [H2 Database](https://github.com/h2database/h2database)

### Javascript

- [axios](https://github.com/axios/axios)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [react hook form](https://github.com/react-hook-form/react-hook-form)
- [redux toolkit](https://github.com/react-hook-form/react-hook-form)
- [flatpickr](https://github.com/flatpickr/flatpickr)

## Future

- Sort by Column (Ascending & Descending)
- Paginate data
- Add the rest of the CRUD functionality
- Tighten up the query
- More exception handling
- More test coverage
- Refactor as needed
- Migrate `flatpickr_purple.css` to tailwindcss
- Dark Mode
