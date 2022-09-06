export class CharactersSchema {
  title = 'Characters Schema';
  endpoint = 'https://rickandmortyapi.com/api/character';
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
      desc: "Array of 20 first characters' data",
    },
  };
  required = ['info', 'results'];
  additionalProperties = false;
}

export class CharacterSchema {
  title = 'Character Schema';
  endpoint = 'https://rickandmortyapi.com/api/character/2';
  type = 'object';
  properties = {
    id: {
      type: 'int',
      desc: 'The id of the character',
    },
    name: {
      type: 'string',
      desc: 'The name of the character',
    },
    status: {
      type: 'string',
      desc: 'The status of the character ("Alive", "Dead" or "unknown")',
    },
    species: {
      type: 'string',
      desc: 'The species of the character',
    },
    type: {
      type: 'string',
      desc: 'The type or subspecies of the character',
    },
    gender: {
      type: 'string',
      desc: 'The gender of the character ("Female", "Male", "Genderless" or "unknown")',
    },
    origin: {
      type: 'object',
      desc: "Name and link to the character's origin location",
      properties: { name: 'string', url: 'string' },
    },
    location: {
      type: 'object',
      desc: "Name and link to the character's last known location endpoint",
      properties: { name: 'string', url: 'string' },
    },
    image: {
      type: 'string (url)',
      desc: "Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars",
    },
    episode: {
      type: 'array (urls)',
      desc: 'List of episodes in which this character appeared',
    },
    url: {
      type: 'string (url)',
      desc: "Link to the character's own URL endpoint",
    },
    created: {
      type: 'string',
      desc: 'Time at which the character was created in the database',
    },
  };
  required = [
    'id',
    'name',
    'status',
    'species',
    'type',
    'gender',
    'origin',
    'location',
    'image',
    'episode',
    'url',
    'created',
  ];
  additionalProperties = false;
}
