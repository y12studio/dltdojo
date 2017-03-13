#### References
* apollo-angular/examples/hello-world at master  https://github.com/apollographql/apollo-angular/tree/master/examples/hello-world
* aweary/json-to-graphql: Create GraphQL schema from JSON files and APIs  https://github.com/aweary/json-to-graphql
* avantcredit/gql2ts: convert a graphql schema to a typescript definition https://github.com/avantcredit/gql2ts
* https://github.com/leoselig/foodie/blob/master/packages/server/src/schema/index.js
* https://github.com/apollographql/frontpage-server/blob/master/data/schema.js
* convert a graphql schema to a typescript definition · Issue #17 · apollographql/graphql-server https://github.com/apollographql/graphql-server/issues/17
* apollographql/apollo-codegen: Generate API code or type annotations based on a GraphQL schema and query documents https://github.com/apollographql/apollo-codegen

#### testlog
```
$ npm i graphql -S
$ npm i graphql-tools -S
$ sudo npm install -g apollo-codegen
$ apollo-codegen introspect-schema schema.graphql --output schema.json
$ apollo-codegen generate gql/*.graphql --schema schema.json --target typescript --output gql/schema.ts
```
