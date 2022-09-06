export class LocationsSchema {
  title = 'Locations Schema';
  endpoint = 'https://rickandmortyapi.com/api/location';
  type = 'object';
  properties = {
    info: {
      type: 'object',
      properties: {
        count: { type: 'int', desc: 'The length of the response' },
        pages: { type: 'int', desc: 'The amount of pages' },
        next: {
          type: 'string (url) | null',
          desc: 'Link to the next page (if it exists)',
        },
        prev: {
          type: 'string (url) | null',
          desc: 'Link to the previous page (if it exists)',
        },
      },
    },
    results: {
      type: 'array (objects)',
      desc: "Array of 20 first locations' data",
    },
  };
  required = ['info', 'results'];
  additionalProperties = false;
}

export class LocationSchema {
  title = 'Location Schema';
  endpoint = 'https://rickandmortyapi.com/api/location/3';
  type = 'object';
  properties = {
    id: {
      type: 'int',
      desc: 'The id of the location',
    },
    name: {
      type: 'string',
      desc: 'The name of the location',
    },
    type: {
      type: 'string',
      desc: 'The type of the location',
    },
    dimension: {
      type: 'string',
      desc: 'The dimension in which the location is located',
    },
    residents: {
      type: 'array (urls)',
      desc: 'List of character who have been last seen in the location',
    },
    url: {
      type: 'string (url)',
      desc: "Link to the location's own endpoint",
    },
    created: {
      type: 'string',
      desc: 'Time at which the location was created in the database',
    },
  };
  required = ['id', 'name', 'type', 'dimension', 'residents', 'url', 'created'];
  additionalProperties = false;
}
