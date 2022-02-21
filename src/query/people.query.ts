import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query($page: Int){
    people(page: $page) {
      results{
        name,
        height
        mass,
        gender,
        homeworld
      },
      count
    }
  } 
`;

export const GET_PEOPLE_BY_NAME = gql`
  query($name: String){
    person(name: $name) {
      results{
        name,
        height
        mass,
        gender,
        homeworld
      },
      count
    }
  } 
`;