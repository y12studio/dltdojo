import { Component, OnInit } from '@angular/core';
import { printSchema } from 'graphql/utilities/schemaPrinter';
import { graphql } from 'graphql';
import gqlschema from '../graphql-schema';

const query = `
{
  posts{
      title
      author{
          firstName
          lastName
      }
  }
}
`;

@Component({
  selector: 'app-gql',
  templateUrl: './gql.component.html',
  styleUrls: ['./gql.component.css']
})

export class GqlComponent implements OnInit {

     graphqlResult:{};

  constructor() { }

  ngOnInit() {
      console.log(gqlschema);
      console.log(printSchema(gqlschema));
      graphql(gqlschema, query).then(r=>{
          console.log(r)
          this.graphqlResult = r.data;
      });

  }

}
