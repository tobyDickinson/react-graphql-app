import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export interface NoteCreate {
  text: string;
}

export interface Note extends NoteCreate {
  id: string;
}

const client = new ApolloClient({
  uri: 'https://actual-tapir-37.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});

export const SAVE_NOTE = gql(/* GraphQL */ `
  mutation saveNote($note: RocketInput!) {
    saveRocket(rocket: $rocket) {
      model
    }
  }
`);

export async function saveNote(note: NoteCreate): Promise<void> {
  await client.mutate({
    mutation: gql`
      mutation {
        insert_notes(objects: [{text: "${note.text}"}]) {
          returning {
            id
          }
        }
      }
    `
  });
}

export async function getNotes(): Promise<Note[]> {
  const result = await client.query({
    query: gql`
      query GetNotes {
        notes {
          id
          text
        }
      }`
  });

  const notes: Note[] = result.data.notes;
  return notes;
}

export async function viewTypes(): Promise<void> {
  const result = await client.query({
    query: gql`{
      __schema {
        types {
          name
        }
      }
    }`
  });

  console.log(result);
}