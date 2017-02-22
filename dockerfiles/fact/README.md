Reality Keys - Facts about the future, cryptographic proof when they come true  https://www.realitykeys.com/

Decentralized Prediction Markets | Augur Project  https://augur.net/

An AI Hedge Fund Created a New Currency to Make Wall Street Work Like Open Source | WIRED  https://www.wired.com/2017/02/ai-hedge-fund-created-new-currency-make-wall-street-work-like-open-source/

maxlath/wikidata-sdk: A javascript tool-suite to query Wikidata and simplify its results  https://github.com/maxlath/wikidata-sdk

### Wikidata SPARQL

Wikidata:SPARQL query service - Wikidata  https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service

Wikidata:SPARQL query service/queries/examples  https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/queries/examples

Bitcoin(Q131723) - Wikidata  https://www.wikidata.org/wiki/Q131723

Bitcoin(Q131723) json - Wikidata https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&ids=Q131723

software version (P348)  https://www.wikidata.org/wiki/Property:P348

Women with most sitelinks and no image born in 1921 or later
```
SELECT ?s ?desc (COUNT(DISTINCT ?sitelink) as ?linkcount)
WHERE
{
  ?s wdt:P31 wd:Q5 .
  ?s wdt:P21 wd:Q6581072 .
  ?s wdt:P569 ?born .
  FILTER (?born >= "1921-01-01T00:00:00Z"^^xsd:dateTime) .
  ?sitelink schema:about ?s .
  OPTIONAL {
    ?s wdt:P18 ?dummy
  }
  FILTER ( !bound(?dummy) ) .
  OPTIONAL {
     ?s rdfs:label ?desc filter (lang(?desc) = "en").
   }
}
GROUP BY ?s ?desc
ORDER BY DESC(?linkcount)
LIMIT 50
```
